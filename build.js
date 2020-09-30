const { promisify } = require('util');
const fs = require('fs');
const template = require('./src/index-template');
const table = require('./src/table');
const phones = require('./src/phones');

const open = promisify(fs.open);
const write = promisify(fs.write);
const read = promisify(fs.read);
const mkdir = promisify(fs.mkdir);
const copyFile = promisify(fs.copyFile);

const outputDir = 'public';

main();

async function main() {
  const { phoneMapping, toIpa, fromIpa } = buildTables();
  await makeOutputDir();
  await Promise.all([
    writeMainJs(toIpa, fromIpa),
    writeIndexHtml(phoneMapping),
    copyMainCss(),
  ]);
}

async function makeOutputDir() {
  try {
    await mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.log(error);
  }
}

async function copyMainCss() {
  await copyFile('main.css', `${outputDir}/main.css`);
}

async function writeIndexHtml(phoneMapping) {
  const indexHtml = await open(`${outputDir}/index.html`, 'w');
  await write(indexHtml, template(phoneMapping, phones));
}

async function writeMainJs(toIpa, fromIpa) {
  const mainjs = await open(`${outputDir}/main.js`, 'w');
  const tablesProm = writeTables(mainjs, toIpa, fromIpa);
  const convOpenProm = open(`src/conversor.js`, 'r');
  const onloadOpenProm = open('src/onload.js', 'r');
  const [_tbl, conversor, onload] = await Promise.all([
    tablesProm,
    convOpenProm,
    onloadOpenProm
  ]);
  await writeConversor(mainjs, conversor);
  await writeOnload(mainjs, onload);
}

function buildTables() {
  const phoneMapping = {};
  const toIpa = {};
  const fromIpa = {};
  for (let key in table) {
    let aitl = `{${key}}`;
    toIpa[aitl] = table[key];
    phoneMapping[aitl] = table[key];
    fromIpa[toIpa[aitl]] = aitl;
  }

  for (let i = 0; i < 26; i++) {
    let ch = String.fromCharCode('a'.charCodeAt(0) + i);
    phoneMapping[ch] = ch;
  }

  return {
    toIpa,
    fromIpa,
    phoneMapping,
  };
}

async function writeTables(mainjs, toIpa, fromIpa) {
  const toIpaString = JSON.stringify(toIpa, null, 2);
  const fromIpaString = JSON.stringify(fromIpa, null, 2);
  await write(mainjs, `var toIpaTable = ${toIpaString};\n`);
  await write(mainjs, `var fromIpaTable = ${fromIpaString};\n`);
}

async function writeConversor(mainjs, conversor) {
  const buffer = Buffer.alloc(8192);
  let result = null;
  do {
    result = await read(conversor, { buffer });
    if (result.bytesRead > 0) {
      await write(mainjs, result.buffer, 0, result.bytesRead);
    }
  } while (result.bytesRead > 0);
}

async function writeOnload(mainjs, onload) {
  const buffer = Buffer.alloc(8192);
  let result = null;
  do {
    result = await read(onload, { buffer });
    if (result.bytesRead > 0) {
      await write(mainjs, result.buffer, 0, result.bytesRead);
    }
  } while (result.bytesRead > 0);
}
