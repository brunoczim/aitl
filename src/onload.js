window.onload = function () {
  var aitlInput = document.getElementById("textarea-aitl");
  var ipaInput = document.getElementById("textarea-ipa");
  aitlInput.onkeyup = function () {
    ipaInput.value = toIpa(aitlInput.value);
  };
  ipaInput.onkeyup = function () {
    aitlInput.value = fromIpa(ipaInput.value);
  };
};
