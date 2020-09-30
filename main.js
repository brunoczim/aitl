var toIpaTable = {
  "{0}": "∅",
  "{1}": "˩",
  "{2}": "˨",
  "{3}": "˧",
  "{4}": "˦",
  "{5}": "˥",
  "{a}": "ɑ",
  "{ao}": "ɒ",
  "{ae}": "æ",
  "{aa}": "ɐ",
  "{A}": "ʌ",
  "{b}": "β",
  "{b'}": "ɓ",
  "{B}": "ʙ",
  "{c}": "ç",
  "{cs}": "ɕ",
  "{d}": "ð",
  "{dr}": "ɖ",
  "{d'}": "ɗ",
  "{dr'}": "ᶑ",
  "{e}": "ɛ",
  "{ee}": "ə",
  "{er}": "ɚ",
  "{ea}": "ɜ",
  "{ear}": "ɝ",
  "{eo}": "ɞ",
  "{f}": "ɸ",
  "{g}": "ɣ",
  "{g'}": "ɠ",
  "{G}": "ɢ",
  "{G'}": "ʛ",
  "{h}": "ɦ",
  "{ha}": "ħ",
  "{hs}": "ɧ",
  "{hy}": "ɥ",
  "{H}": "ʜ",
  "{i}": "ɨ",
  "{I}": "ɪ",
  "{I-}": "ᵻ",
  "{j}": "ʝ",
  "{J'}": "ʄ",
  "{J}": "ɟ",
  "{k}": "ʡ",
  "{l}": "ʎ",
  "{lr}": "ɭ",
  "{ls}": "ɬ",
  "{l~}": "ɫ",
  "{lz}": "ɮ",
  "{L}": "ʟ",
  "{m}": "ɱ",
  "{n}": "ŋ",
  "{nj}": "ɲ",
  "{nr}": "ɳ",
  "{N}": "ɴ",
  "{o}": "ɔ",
  "{oe}": "œ",
  "{oi}": "ø",
  "{o-}": "ɵ",
  "{og}": "ɤ",
  "{oE}": "ɶ",
  "{r}": "ɹ",
  "{rd}": "ɾ",
  "{rD}": "ɽ",
  "{rr}": "ɻ",
  "{rl}": "ɺ",
  "{r_}": "˞",
  "{r?}": "ʢ",
  "{R}": "ʀ",
  "{Rh}": "ʁ",
  "{s}": "ʃ",
  "{sr}": "ʂ",
  "{t}": "θ",
  "{tr}": "ʈ",
  "{u}": "ɯ",
  "{u-}": "ʉ",
  "{U}": "ʊ",
  "{U-}": "ᵿ",
  "{vw}": "ʋ",
  "{vr}": "ⱱ",
  "{w}": "ɰ",
  "{wh}": "ʍ",
  "{x}": "χ",
  "{y}": "ʏ",
  "{z}": "ʒ",
  "{zr}": "ʐ",
  "{zc}": "ʑ",
  "{?}": "ʔ",
  "{??}": "ʕ",
  "{!b}": "ʘ",
  "{!t}": "ǀ",
  "{!s}": "ǃ",
  "{!r}": "‼",
  "{!l}": "ǁ",
  "{!c}": "ǂ",
  "{!k}": "ʞ",
  "{_}": "‿",
  "{:}": "ː",
  "{=}": "˭",
  "{`}": "ʼ",
  "{'}": "ˈ",
  "{\"}": "ˌ",
  "{~}": "̃",
  "{-.}": "̚",
  "{\"h}": "̤",
  "{||}": "‖",
  "{#^0}": "̊",
  "{#0}": "̥",
  "{#^}": "ꜛ",
  "{#t=}": "̪",
  "{#t>}": "̻",
  "{#t|}": "̺",
  "{#t~}": "̼",
  "{#|_}": "̝",
  "{#T}": "̞",
  "{T}": "˕",
  "{|_}": "˔",
  "{#~}": "̴",
  "{O+}": "̹",
  "{O-}": "̜",
  "{Q+}": "̘",
  "{Q-}": "̙",
  "{#x}": "̽",
  "{*}": "ˑ",
  "{#^_}": "͡",
  "{#_}": "͜",
  "{#^.}": "̑",
  "{#.}": "̯",
  "{+}": "˖",
  "{-}": "˗",
  "{#+}": "̟",
  "{#-}": "̠",
  "{#V}": "ꜜ",
  "{#:}": "̈",
  "{#1}": "̏",
  "{#2}": "̀",
  "{#3}": "̄",
  "{#4}": "́",
  "{#5}": "̋",
  "{#52}": "̂",
  "{#34}": "̌",
  "{#13}": "᷅",
  "{#55}": "᷄",
  "{#524}": "᷈",
  "{^a}": "ᵃ",
  "{^-a}": "ᵅ",
  "{^ao}": "ᶛ",
  "{^ae}": "ᵆ",
  "{^aa}": "ᵄ",
  "{^A}": "ᶺ",
  "{^b}": "ᵇ",
  "{^-b}": "ᵝ",
  "{^c}": "ᶜ",
  "{^cs}": "ᶝ",
  "{^d}": "ᵈ",
  "{^-d}": "ᶞ",
  "{^dr}": "ɖ",
  "{^e}": "ᵉ",
  "{^-e}": "ᵋ",
  "{^ee}": "ᵊ",
  "{^ea}": "ᵌ",
  "{^f}": "ᶠ",
  "{^-f}": "ᶲ",
  "{^g}": "ᵍ",
  "{^-g}": "ˠ",
  "{^h}": "ʱ",
  "{^-h}": "ʰ",
  "{^hy}": "ᶣ",
  "{^i}": "ⁱ",
  "{^-i}": "ᶤ",
  "{^-I}": "ᶦ",
  "{^I}": "ᶧ",
  "{^j}": "ʲ",
  "{^-j}": "ᶨ",
  "{^J}": "ᶡ",
  "{^k}": "ᵏ",
  "{^l}": "ˡ",
  "{^-lr}": "ᶩ",
  "{^L}": "ᶫ",
  "{^m}": "ᵐ",
  "{^-m}": "ᶬ",
  "{^n}": "ⁿ",
  "{^-n}": "ᵑ",
  "{^nj}": "ᶮ",
  "{^nr}": "ᶯ",
  "{^N}": "ᶰ",
  "{^o}": "ᵒ",
  "{^-o}": "ᵓ",
  "{^oe}": "ꟹ",
  "{^o-}": "ᶱ",
  "{^p}": "ᵖ",
  "{^r}": "ʳ",
  "{^-r}": "ʴ",
  "{^rr}": "ʵ",
  "{^r_}": "˞",
  "{^Rh}": "ʶ",
  "{^s}": "ˢ",
  "{^-s}": "ᶴ",
  "{^sr}": "ᶳ",
  "{^t}": "ᵗ",
  "{^-t}": "ᶿ",
  "{^u}": "ᵘ",
  "{^-u}": "ᵚ",
  "{^u-}": "ᶶ",
  "{^U}": "ᶷ",
  "{^v}": "ᵛ",
  "{^vw}": "ᶹ",
  "{^w}": "ʷ",
  "{^-w}": "ᶭ",
  "{^x}": "ˣ",
  "{^-x}": "ᵡ",
  "{^y}": "ʸ",
  "{^z}": "ᶻ",
  "{^-z}": "ᶾ",
  "{^zr}": "ᶼ",
  "{^zc}": "ᶽ",
  "{^?}": "ˀ",
  "{^??}": "ˤ"
};
var fromIpaTable = {
  "∅": "{0}",
  "˩": "{1}",
  "˨": "{2}",
  "˧": "{3}",
  "˦": "{4}",
  "˥": "{5}",
  "ɑ": "{a}",
  "ɒ": "{ao}",
  "æ": "{ae}",
  "ɐ": "{aa}",
  "ʌ": "{A}",
  "β": "{b}",
  "ɓ": "{b'}",
  "ʙ": "{B}",
  "ç": "{c}",
  "ɕ": "{cs}",
  "ð": "{d}",
  "ɖ": "{^dr}",
  "ɗ": "{d'}",
  "ᶑ": "{dr'}",
  "ɛ": "{e}",
  "ə": "{ee}",
  "ɚ": "{er}",
  "ɜ": "{ea}",
  "ɝ": "{ear}",
  "ɞ": "{eo}",
  "ɸ": "{f}",
  "ɣ": "{g}",
  "ɠ": "{g'}",
  "ɢ": "{G}",
  "ʛ": "{G'}",
  "ɦ": "{h}",
  "ħ": "{ha}",
  "ɧ": "{hs}",
  "ɥ": "{hy}",
  "ʜ": "{H}",
  "ɨ": "{i}",
  "ɪ": "{I}",
  "ᵻ": "{I-}",
  "ʝ": "{j}",
  "ʄ": "{J'}",
  "ɟ": "{J}",
  "ʡ": "{k}",
  "ʎ": "{l}",
  "ɭ": "{lr}",
  "ɬ": "{ls}",
  "ɫ": "{l~}",
  "ɮ": "{lz}",
  "ʟ": "{L}",
  "ɱ": "{m}",
  "ŋ": "{n}",
  "ɲ": "{nj}",
  "ɳ": "{nr}",
  "ɴ": "{N}",
  "ɔ": "{o}",
  "œ": "{oe}",
  "ø": "{oi}",
  "ɵ": "{o-}",
  "ɤ": "{og}",
  "ɶ": "{oE}",
  "ɹ": "{r}",
  "ɾ": "{rd}",
  "ɽ": "{rD}",
  "ɻ": "{rr}",
  "ɺ": "{rl}",
  "˞": "{^r_}",
  "ʢ": "{r?}",
  "ʀ": "{R}",
  "ʁ": "{Rh}",
  "ʃ": "{s}",
  "ʂ": "{sr}",
  "θ": "{t}",
  "ʈ": "{tr}",
  "ɯ": "{u}",
  "ʉ": "{u-}",
  "ʊ": "{U}",
  "ᵿ": "{U-}",
  "ʋ": "{vw}",
  "ⱱ": "{vr}",
  "ɰ": "{w}",
  "ʍ": "{wh}",
  "χ": "{x}",
  "ʏ": "{y}",
  "ʒ": "{z}",
  "ʐ": "{zr}",
  "ʑ": "{zc}",
  "ʔ": "{?}",
  "ʕ": "{??}",
  "ʘ": "{!b}",
  "ǀ": "{!t}",
  "ǃ": "{!s}",
  "‼": "{!r}",
  "ǁ": "{!l}",
  "ǂ": "{!c}",
  "ʞ": "{!k}",
  "‿": "{_}",
  "ː": "{:}",
  "˭": "{=}",
  "ʼ": "{`}",
  "ˈ": "{'}",
  "ˌ": "{\"}",
  "̃": "{~}",
  "̚": "{-.}",
  "̤": "{\"h}",
  "‖": "{||}",
  "̊": "{#^0}",
  "̥": "{#0}",
  "ꜛ": "{#^}",
  "̪": "{#t=}",
  "̻": "{#t>}",
  "̺": "{#t|}",
  "̼": "{#t~}",
  "̝": "{#|_}",
  "̞": "{#T}",
  "˕": "{T}",
  "˔": "{|_}",
  "̴": "{#~}",
  "̹": "{O+}",
  "̜": "{O-}",
  "̘": "{Q+}",
  "̙": "{Q-}",
  "̽": "{#x}",
  "ˑ": "{*}",
  "͡": "{#^_}",
  "͜": "{#_}",
  "̑": "{#^.}",
  "̯": "{#.}",
  "˖": "{+}",
  "˗": "{-}",
  "̟": "{#+}",
  "̠": "{#-}",
  "ꜜ": "{#V}",
  "̈": "{#:}",
  "̏": "{#1}",
  "̀": "{#2}",
  "̄": "{#3}",
  "́": "{#4}",
  "̋": "{#5}",
  "̂": "{#52}",
  "̌": "{#34}",
  "᷅": "{#13}",
  "᷄": "{#55}",
  "᷈": "{#524}",
  "ᵃ": "{^a}",
  "ᵅ": "{^-a}",
  "ᶛ": "{^ao}",
  "ᵆ": "{^ae}",
  "ᵄ": "{^aa}",
  "ᶺ": "{^A}",
  "ᵇ": "{^b}",
  "ᵝ": "{^-b}",
  "ᶜ": "{^c}",
  "ᶝ": "{^cs}",
  "ᵈ": "{^d}",
  "ᶞ": "{^-d}",
  "ᵉ": "{^e}",
  "ᵋ": "{^-e}",
  "ᵊ": "{^ee}",
  "ᵌ": "{^ea}",
  "ᶠ": "{^f}",
  "ᶲ": "{^-f}",
  "ᵍ": "{^g}",
  "ˠ": "{^-g}",
  "ʱ": "{^h}",
  "ʰ": "{^-h}",
  "ᶣ": "{^hy}",
  "ⁱ": "{^i}",
  "ᶤ": "{^-i}",
  "ᶦ": "{^-I}",
  "ᶧ": "{^I}",
  "ʲ": "{^j}",
  "ᶨ": "{^-j}",
  "ᶡ": "{^J}",
  "ᵏ": "{^k}",
  "ˡ": "{^l}",
  "ᶩ": "{^-lr}",
  "ᶫ": "{^L}",
  "ᵐ": "{^m}",
  "ᶬ": "{^-m}",
  "ⁿ": "{^n}",
  "ᵑ": "{^-n}",
  "ᶮ": "{^nj}",
  "ᶯ": "{^nr}",
  "ᶰ": "{^N}",
  "ᵒ": "{^o}",
  "ᵓ": "{^-o}",
  "ꟹ": "{^oe}",
  "ᶱ": "{^o-}",
  "ᵖ": "{^p}",
  "ʳ": "{^r}",
  "ʴ": "{^-r}",
  "ʵ": "{^rr}",
  "ʶ": "{^Rh}",
  "ˢ": "{^s}",
  "ᶴ": "{^-s}",
  "ᶳ": "{^sr}",
  "ᵗ": "{^t}",
  "ᶿ": "{^-t}",
  "ᵘ": "{^u}",
  "ᵚ": "{^-u}",
  "ᶶ": "{^u-}",
  "ᶷ": "{^U}",
  "ᵛ": "{^v}",
  "ᶹ": "{^vw}",
  "ʷ": "{^w}",
  "ᶭ": "{^-w}",
  "ˣ": "{^x}",
  "ᵡ": "{^-x}",
  "ʸ": "{^y}",
  "ᶻ": "{^z}",
  "ᶾ": "{^-z}",
  "ᶼ": "{^zr}",
  "ᶽ": "{^zc}",
  "ˀ": "{^?}",
  "ˤ": "{^??}"
};
function toIpa(input) {
  return convert(input, toIpaTable);
}

function fromIpa(input) {
  return convert(input, fromIpaTable);
}

function convert(input, table) {
  var output = '';
  var back = 0;
  var front;
  var sub;

  while (back < input.length) {
    front = back;
    sub = '';
    while (!(sub in table) && front < input.length) {
      sub += input[front];
      front += 1;
    }
    if (sub in table) {
      output += table[sub];
      back = front;
    } else {
      output += input[back];
      back += 1;
    }
  }

  return output;
}
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
