const { promisify } = require('util');
const fs = require('fs');
const template = require('./index-template');
const table = require('./table');
const phones = require('./phones');

const open = promisify(fs.open);
const write = promisify(fs.write);
const read = promisify(fs.read);
const mkdir = promisify(fs.mkdir);
const copyFile = promisify(fs.copyFile);

const outputDir = 'site';

const toIpa = {};
const fromIpa = {};
for (let key of table) {
  let abtipa = `{${key}}`;
  toIpa[abtipa] = table[key];
  fromIpa[toIpa[abtipa]] = abtipa;
}

main();

async function main() {
  await mkdir(outputDir);
  await Promise.all(writeMainJs, writeIndexHtml, copyMainCss);
}

async function copyMainCss() {
  await copyFile('main.css', `${outputDir}/main.css`);
}

async function writeIndexHtml() {
  const indexHtml = await open(`${outputDir}/index.html`, 'w');
  await write(indexHtml, template(toIpa, phones));
}

async function writeMainJs() {
  const mainjs = await open(`${outputDir}/main.js`, 'w');
  const tablesProm = writeTables(mainjs);
  const convOpenProm = open('conversor.js', 'r');
  const [_tbl, conversor] = await Promise.all(tablesProm, convOpenProm);
  await writeConversor(mainjs, conversor);
}

async function writeTables(mainjs) {
  const toIpaString = JSON.stringify(toIpa, 4);
  const fromIpaString = JSON.stringify(fromIpa, 4);
  await write(mainjs, `var toIpaTable = ${toIpaString};\n`);
  await write(mainjs, `var fromIpaTable = ${fromIpaString};\n`);
}

async function writeConversor(mainjs, conversor) {
  const buffer = Buffer.alloc(8192);
  let read = null;
  do {
    read = await read(conversor, { buffer });
    if (read.bytesRead > 0) {
      await write(mainjs, read.buffer, 0, read.bytesRead);
    }
  } while (read.bytesRead > 0);
}

