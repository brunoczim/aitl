window.onload = function () {
  var abtipaInput = document.getElementById("textarea-abtipa");
  var ipaInput = document.getElementById("textarea-ipa");
  abtipaInput.onkeyup = function () {
    ipaInput.value = toIpa(abtipaInput.value);
  };
  ipaInput.onkeyup = function () {
    abtipaInput.value = fromIpa(ipaInput.value);
  };
};
