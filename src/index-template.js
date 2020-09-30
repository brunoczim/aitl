const escapeHtml = require('./escape-html');

function makeTableBody(phoneMapping, phones, pad) {
  let output = '';
  for (let aitl in phoneMapping) {
    let ipa = phoneMapping[aitl];
    let desc = '';
    if (ipa in phones) {
      if ('link' in phones[ipa]) {
        let escaped = escapeHtml(phones[ipa].name);
        desc = `<a href=${phones[ipa].link}>${escaped}</a>`;
      } else {
        desc = `${escapeHtml(phones[ipa].name)}`;
      }
      if (phones[ipa].needsCircle) {
        ipa = "◌" + ipa;
      }
    }
    output += `${pad}<tr>
${pad}  <td>${escapeHtml(aitl)}</td>
${pad}  <td>${escapeHtml(ipa)}</td>
${pad}  <td>${(desc)}</td>
${pad}</tr>
`;
  }
  return output;
}

module.exports = (phoneMapping, phones) => {
  const tableBody = makeTableBody(phoneMapping, phones, '            ');
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>AITL ─ ASCII-IPA Translation Language</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
    <script src="main.js"></script>
  </head>
  <body>
    <div id="page-wrapper">
      <h1>ASCII-IPA Translation Language</h1>
      <a href="aitl.zip">Download Site</a>
      <div id="aitl-area">
        <label for="textarea-aitl">AITL</label>
        <div class="textarea">
            <textarea id="textarea-aitl"></textarea>
        </div>
      </div>
      <div id="ipa-area">
        <label for="textarea-ipa">IPA</label>
        <div class="textarea">
            <textarea id="textarea-ipa"></textarea>
        </div>
      </div>
      <div id="conversion-table">
        <table>
          <thead>
            <tr>
              <th>AITL</th>
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
