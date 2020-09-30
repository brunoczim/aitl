const escapeHtml = require('./escape-html');

function makeTableBody(table, phones, pad) {
  let output = '';
  for (let abtipa in table) {
    const ipa = table[abtipa];
    let desc = '';
    if (ipa in phones) {
      if ('link' in phones[ipa]) {
        desc = `<a href=${phones[ipa].link}>${phones[ipa].name}</a>`;
      } else {
        desc = phones[ipa].name;
      }
      if (phones[ipa].needsCircle) {
        ipa = "◌" + ipa;
      }
    }
    output += `${pad}<tr>
${pad}  <td>${abtipa}</td>
${pad}  <td>${ipa}</td>
${pad}  <td>${desc}</td>
${pad}</tr>
`;
  }
  return output;
}

module.exports = (table, phones) => {
  const tableBody = makeTableBody(table, phones, '            ');
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ABTIPA ─ ASCII Bijection To IPA</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" href="master.css">
    <script src="main.js"></script>
  </head>
  <body>
    <div id="page-wrapper">
      <h1>ASCII Bijection To IPA</h1>
      <div id="abtipa-area">
        <label for="abtipa-text-area">ABTIPA</label>
        <div id="textarea-abtipa" class="textarea">
            <textarea id="textarea-abtipa"></textarea>
        </div>
      </div>
      <div id="ipa-area">
        <label for="ipa-text-area">IPA</label>
        <div id="textarea-ipa" class="textarea">
            <textarea id="textarea-ipa"></textarea>
        </div>
      </div>
      <div id="conversion-table">
        <table>
          <thead>
            <tr>
              <th>ABTIPA</th>
              <th>IPA</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody id="conversion-table-body">${tableBody}
          </tbody>
        </table>
      </div>
    </div>
  </body>
</html>
`;
};
