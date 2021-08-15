window.onload = function () {
  var aitlInput = document.getElementById("textarea-aitl");
  var ipaInput = document.getElementById("textarea-ipa");

  function save() {
    localStorage.setItem("aitl-input", aitlInput.value);
    localStorage.setItem("aitl-ipa-input", ipaInput.value);
  }

  function load() {
    aitlInput.value = localStorage.getItem("aitl-input") || "";
    ipaInput.value = localStorage.getItem("aitl-ipa-input") || "";
  }

  load();

  aitlInput.onkeyup = function () {
    ipaInput.value = toIpa(aitlInput.value);
    save();
  };
  ipaInput.onkeyup = function () {
    aitlInput.value = fromIpa(ipaInput.value);
    save();
  };
};
