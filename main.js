window.onload = function () {
  var toIpaButton = document.getElementById("to-ipa-button");
  var fromIpaButton = document.getElementById("from-ipa-button");
  var abtipaInput = document.getElementById("textarea-abtipa");
  var ipaInput = document.getElementById("textarea-ipa");
  var table = document.getElementById("conversion-table-body");

  toIpaButton.onclick = function () {
    ipaInput.value = toIpa(abtipaInput.value);
  };

  fromIpaButton.onclick = function () {
    abtipaInput.value = fromIpa(ipaInput.value);
  };

  for (var abtipa in toIpaTable) {
    var ipa = toIpaTable[abtipa];
    var desc;
    var row = document.createElement("tr");
    var abtipaCol = document.createElement("td");
    var ipaCol = document.createElement("td");
    var descCol = document.createElement("td");
    if (ipa in phones) {
      if ('link' in phones[ipa]) {
        desc = document.createElement("a");
        desc.textContent = phones[ipa].name;
        desc.href = phones[ipa].link;
        descCol.appendChild(desc);
      } else {
        desc = phones[ipa].name;
        descCol.textContent = desc;
      }
      if (phones[ipa].needsCircle) {
        ipa = "◌" + ipa;
      }
    }
    abtipaCol.textContent = abtipa;
    row.appendChild(abtipaCol);
    ipaCol.textContent = ipa;
    row.appendChild(ipaCol);
    row.appendChild(descCol);
    table.appendChild(row);
  }
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

  while (back < input.length) {
    front = back;
    while (!(input.substring(back, front) in table) && front < input.length) {
      front += 1;
    }
    if (input.substring(back, front) in table) {
      output += table[input.substring(back, front)];
      back = front;
    } else {
      output += input[back];
      back += 1;
    }
  }

  return output;
}

var toIpaTable = {
  'a': 'a',
  'b': 'b',
  'c': 'c',
  'd': 'd',
  'e': 'e',
  'f': 'f',
  'g': 'g',
  'h': 'h',
  'i': 'i',
  'j': 'j',
  'k': 'k',
  'l': 'l',
  'm': 'm',
  'n': 'n',
  'o': 'o',
  'p': 'p',
  'q': 'q',
  'r': 'r',
  's': 's',
  't': 't',
  'u': 'u',
  'v': 'v',
  'w': 'w',
  'x': 'x',
  'y': 'y',
  'z': 'z',
  'A': 'ɑ',
  'B': 'β',
  'C': 'ç',
  'D': 'ð',
  'E': 'ɛ',
  'F': 'ɱ',
  'G': 'ɣ',
  'H': 'ɥ',
  'I': 'ɪ',
  'J': 'ɲ',
  'K': 'ɬ',
  'L': 'ʎ',
  'M': 'ɯ',
  'N': 'ŋ',
  'O': 'ɔ',
  'P': 'ʋ',
  'Q': 'ɒ',
  'R': 'ʁ',
  'S': 'ʃ',
  'T': 'θ',
  'U': 'ʊ',
  'V': 'ʌ',
  'W': 'ʍ',
  'X': 'χ',
  'Y': 'ʏ',
  'Z': 'ʒ',
  '!b': 'ʘ',
  '!t': 'ǀ',
  '!s': 'ǃ',
  '!r': '‼',
  '!l': 'ǁ',
  '!c': 'ǂ',
  '!k': 'ʞ',
  '?': 'ʔ',
  '.': '.',
  '^': '‿',
  ':': 'ː',
  ';': 'ˈ',
  ',': 'ˌ',
  '|': '|',
  '`': '\u031a',
  '"h': '\u0324',
  '"?': '\u0330',
  '\\a': 'æ',
  '\\A': 'ɐ',
  '\\br': 'ʙ',
  '\\b\'': 'ɓ',
  '\\c': 'ɕ',
  '\\dr': 'ɾ',
  '\\dR': 'ɽ',
  '\\d\'': 'ɗ',
  '\\d-': '\u032a',
  '\\d=': '\u033b',
  '\\d_': '\u033a',
  '\\d~': '\u033c',
  '\\ea': 'ə',
  '\\er': 'ɚ',
  '\\ee': 'ɘ',
  '\\Ea': 'ɜ',
  '\\Er': 'ɝ',
  '\\Eo': 'ɞ',
  '\\f': 'ɸ',
  '\\G\'': 'ʛ',
  '\\g\'': 'ɠ',
  '\\ha': 'ħ',
  '\\hh': 'ɦ',
  '\\hs': 'ɧ',
  '\\H': 'ʜ',
  '\\i': 'ɨ',
  '\\I': 'ᵻ',
  '\\jh': 'ʝ',
  '\\j\'': 'ʄ',
  '\\J': 'ɟ',
  '\\k?': 'ʡ',
  '\\lg': 'ɫ',
  '\\lz': 'ɮ',
  '\\L': 'ʟ',
  '\\N': 'ɴ',
  '\\oy': 'ɤ',
  '\\oe': 'œ',
  '\\oi': 'ø',
  '\\o_': 'ɵ',
  '\\o+': '\u0339',
  '\\o-': '\u031c',
  '\\OE': 'ɶ',
  '\\q': 'ɢ',
  '\\Q+': '\u0318',
  '\\Q-': '\u0319',
  '\\rd': 'ɖ',
  '\\r?': 'ʢ',
  '\\rl': 'ɭ',
  '\\rL': 'ɺ',
  '\\rn': 'ɳ',
  '\\rr': 'ɹ',
  '\\rR': 'ɻ',
  '\\rs': 'ʂ',
  '\\rt': 'ʈ',
  '\\rz': 'ʐ',
  '\\r_': '˞',
  '\\R': 'ʀ',
  '\\T': '\u031d',
  '\\u': 'ʉ',
  '\\U': 'ᵿ',
  '\\v': 'ⱱ',
  '\\V|' : 'ꜜ',
  '\\w': 'ɰ',
  '\\x': '\u033d',
  '\\z': 'ʑ',
  '\\*': 'ˑ',
  '\'': 'ʼ',
  '\\?': 'ʕ',
  '\\^_': '\u0361',
  '\\^.': '\u0311',
  '\\^T': '˕',
  '\\^|_': '˔',
  '\\^+': '˖',
  '\\^-': '˗',
  '\\^,': '\u030d',
  '\\|_': '\u031e',
  '\\^+': '\u031f',
  '\\^-': '\u0320',
  '\\_': '\u035c',
  '\\~': '\u0334',
  '\\=': '˭',
  '\\;': '\u0306',
  '\\,': '\u0329',
  '\\.': '\u032f',
  '\\~': '\u0303',
  '\\:': '\u0308',
  '\\1': '\u030f',
  '\\2': '\u0300',
  '\\3': '\u0304',
  '\\4': '\u0301',
  '\\5': '\u030b',
  '\\92': '\u0302',
  '\\74': '\u030c',
  '\\63': '\u1dc5',
  '\\95': '\u1dc4',
  '\\924': '\u1dc8',
  '\\^|' : 'ꜛ',
  '\\|' : '‖',
  '\\^0': '\u030a',
  '\\0': '\u0325',
  '\\^^': '\u032c',
  '0': '∅',
  '1': '˩',
  '2': '˨',
  '3': '˧',
  '4': '˦',
  '5': '˥',
  '_a': 'ᵃ',
  '_b': 'ᵇ',
  '_c': 'ᶜ',
  '_d': 'ᵈ',
  '_e': 'ᵉ',
  '_f': 'ᶠ',
  '_g': 'ᵍ',
  '_h': 'ʰ',
  '_i': 'ⁱ',
  '_j': 'ʲ',
  '_k': 'ᵏ',
  '_l': 'ˡ',
  '_m': 'ᵐ',
  '_n': 'ⁿ',
  '_o': 'ᵒ',
  '_p': 'ᵖ',
  //'_q': 'q',
  '_r': 'ʳ',
  '_s': 'ˢ',
  '_t': 'ᵗ',
  '_u': 'ᵘ',
  '_v': 'ᵛ',
  '_w': 'ʷ',
  '_x': 'ˣ',
  '_y': 'ʸ',
  '_z': 'ᶻ',
  '_A': 'ᵅ',
  '_B': 'ᵝ',
  //'_C': 'ç',
  '_D': 'ᶞ',
  '_E': 'ᵋ',
  '_F': 'ᶬ',
  '_G': 'ˠ',
  '_H': 'ᶣ',
  '_I': 'ᶦ',
  '_J': 'ᶮ',
  //'_K': 'ɬ',
  //'_L': 'ʎ',
  '_M': 'ᵚ',
  '_N': 'ᵑ',
  '_O': 'ᵓ',
  '_P': 'ᶹ',
  '_Q': 'ᶛ',
  '_R': 'ʶ',
  '_S': 'ᶴ',
  '_T': 'ᶿ',
  '_U': 'ᶷ',
  '_V': 'ᶺ',
  //'_W': 'ʍ',
  '_X': 'ᵡ',
  //'_Y': 'ʏ',
  '_Z': 'ᶾ',
  //'_!b': 'ʘ',
  //'_!t': 'ǀ',
  //'_!s': 'ǃ',
  //'_!r': '‼',
  //'_!l': 'ǁ',
  //'_!c': 'ǂ',
  //'_!k': 'ʞ',
  '_\\a': 'ᵆ',
  '_\\A': 'ᵄ',
  //'_\\br': 'ʙ',
  //'_\\b\'': 'ɓ',
  '_\\c': 'ᶝ',
  //'_\\dr': 'ɾ',
  //'_\\dR': 'ɽ',
  //'_\\d\'': 'ɗ',
  '_\\ea': 'ᵊ',
  '_\\er': 'ɚ',
  //'_\\ee': 'ɘ',
  '_\\Ea': 'ᵌ',
  //'_\\Er': 'ɝ',
  //'_\\Eo': 'ɞ',
  '_\\f': 'ᶲ',
  //'_\\G\'': 'ʛ',
  //'_\\g\'': 'ɠ',
  //'_\\ha': 'ħ',
  '_\\hh': 'ʱ',
  //'_\\hs': 'ɧ',
  //'_\\H': 'ʜ',
  '_\\i': 'ᶤ',
  '_\\I': 'ᶧ',
  '_\\jh': 'ᶨ',
  //'_\\j\'': 'ʄ',
  '_\\J': 'ᶡ',
  //'_\\k?': 'ʡ',
  //'_\\lg': 'ɫ',
  //'_\\lz': 'ɮ',
  '_\\L': 'ᶫ',
  '_\\N': 'ᶰ',
  //'_\\oy': 'ɤ',
  '_\\oe': 'ꟹ',
  //'_\\oi': 'ø',
  '_\\o_': 'ᶱ',
  //'_\\OE': 'ɶ',
  //'_\\q': 'ɢ',
  //'_\\rd': 'ɖ',
  //'_\\r?': 'ʢ',
  '_\\rl': 'ᶩ',
  //'_\\rL': 'ɺ',
  '_\\rn': 'ᶯ',
  '_\\rr': 'ʴ',
  '_\\rR': 'ʵ',
  '_\\rs': 'ᶳ',
  //'_\\rt': 'ʈ',
  '_\\rz': 'ᶼ',
  '_\\r_': '˞',
  //'_\\R': 'ʀ',
  '_\\u': 'ᶶ',
  //'_\\U': 'ᵿ',
  //'_\\v': 'ⱱ',
  '_\\w': 'ᶭ',
  '_\\z': 'ᶽ',
  '_\\?': 'ˤ'
};

var fromIpaTable = {};

for (var key in toIpaTable) {
  fromIpaTable[toIpaTable[key]] = key;
}

var phones = {
  '∅': {
    name: 'nothing'
  },
  'a': {
    name: 'open front unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open_front_unrounded_vowel'
  },
  'b': {
    name: 'voiced bilabial stop',
    link: 'https://en.wikipedia.org/wiki/Voiced_bilabial_stop'
  },
  'c': {
    name: 'voiceless palatal stop',
    link: 'https://en.wikipedia.org/wiki/Voiceless_palatal_stop'
  },
  'd': {
    name: 'voiced alveolar stop',
    link: 'https://en.wikipedia.org/wiki/Voiced_alveolar_stop'
  },
  'e': {
    name: 'close-mid front unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close-mid_front_unrounded_vowel'
  },
  'f': {
    name: 'voiceless labiodental fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_labiodental_fricative'
  },
  'g': {
    name: 'voiced velar stop',
    link: 'https://en.wikipedia.org/wiki/Voiced_velar_stop'
  },
  'h': {
    name: 'voiceless glottal transition',
    link: 'https://en.wikipedia.org/wiki/Voiceless_glottal_transition'
  },
  'i': {
    name: 'close front unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close_front_unrounded_vowel'
  },
  'j': {
    name: 'voiced palatal approximant',
    link: 'https://en.wikipedia.org/wiki/Palatal_approximant'
  },
  'k': {
    name: 'voiceless velar stop',
    link: 'https://en.wikipedia.org/wiki/Voiceless_velar_stop'
  },
  'l': {
    name: 'voiced alveolar lateral approximant',
    link: 'https://en.wikipedia.org/wiki/Dental,_alveolar_and_postalveolar_lateral_approximants'
  },
  'm': {
    name: 'bilabial nasal',
    link: 'https://en.wikipedia.org/wiki/Bilabial_nasal'
  },
  'n': {
    name: 'alveolar nasal',
    link: 'https://en.wikipedia.org/wiki/Alveolar_nasal'
  },
  'o': {
    name: 'close-mid back rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close-mid_back_rounded_vowel'
  },
  'p': {
    name: 'voiceless bilabial stop',
    link: 'https://en.wikipedia.org/wiki/Voiceless_bilabial_stop'
  },
  'q': {
    name: 'voiceless uvular stop',
    link: 'https://en.wikipedia.org/wiki/Voiceless_uvular_stop'
  },
  'r': {
    name: 'alveolar trill',
    link: 'https://en.wikipedia.org/wiki/Alveolar_trill'
  },
  's': {
    name: 'voiceless alveolar fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_alveolar_fricative'
  },
  't': {
    name: 'voiceless alveolar stop',
    link: 'https://en.wikipedia.org/wiki/Voiceless_alveolar_stop'
  },
  'u': {
    name: 'close back rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close_back_rounded_vowel'
  },
  'v': {
    name: 'voiced labiodental fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_labiodental_fricative'
  },
  'w': {
    name: 'voiced labio-velar approximant',
    link: 'https://en.wikipedia.org/wiki/Voiced_labio-velar_approximant'
  },
  'x': {
    name: 'voiceless velar fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_velar_fricative'
  },
  'y': {
    name: 'close front rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close_front_rounded_vowel'
  },
  'z': {
    name: 'voiced alveolar fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_alveolar_fricative'
  },
  'ɑ': {
    name: 'open back unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open_back_unrounded_vowel'
  },
  'ᵅ': {
    name: 'superscript (secondary) open back unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Open_back_unrounded_vowel'
  },
  'æ': {
    name: 'near-open front unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Near-open_front_unrounded_vowel'
  },
  'ᵆ': {
    name: 'superscript (secondary) near-open front unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Near-open_front_unrounded_vowel'
  },
  'ɐ': {
    name: 'near-open central unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Near-open_central_unrounded_vowel'
  },
  'ᵄ': {
    name: 'superscript (secondary) near-open central unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Near-open_central_unrounded_vowel'
  },
  'ɒ': {
    name: 'open back rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open_back_rounded_vowel'
  },
  'ᶛ': {
    name: 'superscript (secondary) open back rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Open_back_rounded_vowel'
  },
  'ɓ': {
    name: 'voiced bilabial implosive',
    link: 'https://en.wikipedia.org/wiki/Voiced_bilabial_implosive'
  },
  'β': {
    name: 'voiced bilabial fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_bilabial_fricative'
  },
  'ʙ': {
    name: 'voiced bilabial trill',
    link: 'https://en.wikipedia.org/wiki/Voiced_bilabial_trill'
  },
  'ç': {
    name: 'voiceless palatal fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_palatal_fricative'
  },
  'ɕ': {
    name: 'voiceless alveolo-palatal fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_alveolo-palatal_fricative'
  },
  'ᶝ': {
    name: 'superscript (secondary) voiceless alveolo-palatal fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_alveolo-palatal_fricative'
  },
  'ɗ': {
    name: 'voiced alveolar implosive',
    link: 'https://en.wikipedia.org/wiki/Voiced_alveolar_implosive'
  },
  'ð': {
    name: 'voiced dental fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_dental_fricative'
  },
  'ᶞ': {
    name: 'superscript (secondary) voiced dental fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_dental_fricative'
  },
  'ɖ': {
    name: 'voiced retroflex stop',
    link: 'https://en.wikipedia.org/wiki/Voiced_retroflex_stop'
  },
  'ə': {
    name: 'mid central vowel',
    link: 'https://en.wikipedia.org/wiki/Mid_central_vowel'
  },
  'ᵊ': {
    name: 'superscript (secondary) mid central vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Mid_central_vowel'
  },
  'ɚ': {
    name: 'R-colored mid central vowel',
    link: 'https://en.wikipedia.org/wiki/R-colored_vowel'
  },
  'ɘ': {
    name: 'close-mid central unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close-mid_central_unrounded_vowel'
  },
  'ɛ': {
    name: 'open-mid front unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open-mid_front_unrounded_vowel'
  },
  'ᵋ': {
    name: 'superscript (secondary) open-mid front unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Open-mid_front_unrounded_vowel'
  },
  'ɜ': {
    name: 'open-mid central unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open-mid_central_unrounded_vowel'
  },
  'ᵌ': {
    name: 'superscript (secondary) open-mid central unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Open-mid_central_unrounded_vowel'
  },
  'ɝ': {
    name: 'R-colored open-mid central unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/R-colored_vowel'
  },
  'ɞ': {
    name: 'open-mid central rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open-mid_central_rounded_vowel'
  },
  'ɸ': {
    name: 'voiceless bilabial fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_bilabial_fricative'
  },
  'ᶲ': {
    name: 'superscript (secondary) voiceless bilabial fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_bilabial_fricative'
  },
  'ɣ': {
    name: 'voiced velar fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_velar_fricative'
  },
  'ɠ': {
    name: 'voiced velar implosive',
    link: 'https://en.wikipedia.org/wiki/Voiced_velar_implosive'
  },
  'ɢ': {
    name: 'voiced uvular stop',
    link: 'https://en.wikipedia.org/wiki/Voiced_uvular_stop'
  },
  'ʛ': {
    name: 'voiced uvular implosive',
    link: 'https://en.wikipedia.org/wiki/Voiced_uvular_implosive'
  },
  'ɤ': {
    name: 'close-mid back unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close-mid_back_unrounded_vowel'
  },
  'ɦ': {
    name: 'breathy-voiced glottal transition',
    link: 'https://en.wikipedia.org/wiki/Breathy-voiced_glottal_transition'
  },
  'ħ': {
    name: 'voiceless pharyngeal fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_pharyngeal_fricative'
  },
  'ɧ': {
    name: 'sj-sound',
    link: 'https://en.wikipedia.org/wiki/Sj-sound'
  },
  'ʜ': {
    name: 'voiceless epiglottal fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_epiglottal_fricative'
  },
  'ɥ': {
    name: 'voiced labio-palatal approximant',
    link: 'https://en.wikipedia.org/wiki/Voiced_labio-velar_approximant'
  },
  'ᶣ': {
    name: 'superscript (secondary) voiced labio-palatal approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_labio-velar_approximant'
  },
  'ɨ': {
    name: 'close central unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close_central_unrounded_vowel'
  },
  'ᶤ': {
    name: 'superscript (secondary) close central unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close_central_unrounded_vowel'
  },
  'ɪ': {
    name: 'near-close front unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Near-close_front_unrounded_vowel'
  },
  'ᶦ': {
    name: 'superscript (secondary) near-close front unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Near-close_front_unrounded_vowel'
  },
  'ᵻ': {
    name: 'near-close central unrounded vowel (extra-IPA)'
  },
  'ᶧ': {
    name: 'superscript (secondary) near-close central unrounded vowel (extra-IPA)',
    needsCircle: true
  },
  'ʄ': {
    name: 'voiced palatal implosive',
    link: 'https://en.wikipedia.org/wiki/Voiced_palatal_implosive'
  },
  'ʝ': {
    name: 'voiced palatal fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_palatal_fricative'
  },
  'ᶨ': {
    name: 'superscript (secondary) voiced palatal fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_palatal_fricative'
  },
  'ɟ': {
    name: 'voiced palatal stop',
    link: 'https://en.wikipedia.org/wiki/Voiced_palatal_stop'
  },
  'ᶡ': {
    name: 'superscript (secondary) voiced palatal stop',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_palatal_stop'
  },
  'ʞ': {
    name: 'back-released velar click',
    link: 'https://en.wikipedia.org/wiki/Back-released_velar_click',
  },
  'ɫ': {
    name: 'velarized voiced alveolar lateral approximant',
    link: 'https://en.wikipedia.org/wiki/Dental,_alveolar_and_postalveolar_lateral_approximants#Velarized_alveolar_lateral_approximant'
  },
  'ɭ': {
    name: 'retroflex lateral approximant',
    link: 'https://en.wikipedia.org/wiki/Retroflex_lateral_approximant'
  },
  'ᶩ': {
    name: 'superscript (secondary) retroflex lateral approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Retroflex_lateral_approximant'
  },
  'ɬ': {
    name: 'voiceless alveolar lateral fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_dental_and_alveolar_lateral_fricatives'
  },
  'ɮ': {
    name: 'voiced alveolar lateral fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_dental_and_alveolar_lateral_fricatives'
  },
  'ʟ': {
    name: 'voiced velar lateral approximant',
    link: 'https://en.wikipedia.org/wiki/Velar_lateral_approximant'
  },
  'ᶫ': {
    name: 'superscript (secondary) voiced velar lateral approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Velar_lateral_approximant'
  },
  'ɱ': {
    name: 'labiodental nasal',
    link: 'https://en.wikipedia.org/wiki/Labiodental_nasal'
  },
  'ᶬ': {
    name: 'superscript (secondary) labiodental nasal',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Labiodental_nasal'
  },
  'ɲ': {
    name: 'palatal nasal',
    link: 'https://en.wikipedia.org/wiki/Palatal_nasal'
  },
  'ᶮ': {
    name: 'superscript (secondary) palatal nasal',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Palatal_nasal'
  },
  'ŋ': {
    name: 'velar nasal',
    link: 'https://en.wikipedia.org/wiki/Velar_nasal'
  },
  'ᵑ': {
    name: 'superscript (secondary) velar nasal',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Velar_nasal'
  },
  'ɳ': {
    name: 'retroflex nasal',
    link: 'https://en.wikipedia.org/wiki/Retroflex_nasal'
  },
  'ᶯ': {
    name: 'superscript (secondary) retroflex nasal',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Retroflex_nasal'
  },
  'ɴ': {
    name: 'uvular nasal',
    link: 'https://en.wikipedia.org/wiki/Uvular_nasal'
  },
  'ᶰ': {
    name: 'superscript (secondary) uvular nasal',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Uvular_nasal'
  },
  'ɔ': {
    name: 'open-mid back rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open-mid_back_rounded_vowel'
  },
  'ᵓ': {
    name: 'superscript (secondary) open-mid back rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Open-mid_back_rounded_vowel'
  },
  'œ': {
    name: 'open-mid front rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open-mid_front_rounded_vowel'
  },
  'ꟹ': {
    name: 'open-labialization (extra-IPA) or superscript (secondary) open-mid front rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Labialization#Types',
  },
  'ø': {
    name: 'close-mid front rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close-mid_front_rounded_vowel'
  },
  'ɶ': {
    name: 'open front rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Open_front_rounded_vowel'
  },
  'ɵ': {
    name: 'close-mid central rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close-mid_central_rounded_vowel'
  },
  'ᶱ': {
    name: 'superscript (secondary) close-mid central rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close-mid_central_rounded_vowel'
  },
  'ɹ': {
    name: 'voiced alveolar approximant',
    link: 'https://en.wikipedia.org/wiki/Alveolar_and_postalveolar_approximants'
  },
  'ʴ': {
    name: 'superscript (secondary) voiced alveolar approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Alveolar_and_postalveolar_approximants'
  },
  'ɾ': {
    name: 'alveolar tap',
    link: 'https://en.wikipedia.org/wiki/Dental_and_alveolar_taps_and_flaps'
  },
  'ʀ': {
    name: 'uvular trill',
    link: 'https://en.wikipedia.org/wiki/Uvular_trill'
  },
  'ʁ': {
    name: 'voiced uvular fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_vular_fricative'
  },
  'ʶ': {
    name: 'superscript (secondary) voiced uvular fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_vular_fricative'
  },
  'ɻ': {
    name: 'voiced retroflex approximant',
    link: 'https://en.wikipedia.org/wiki/Retroflex_approximant'
  },
  'ʵ': {
    name: 'superscript (secondary) voiced retroflex approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Retroflex_approximant'
  },
  'ɽ': {
    name: 'retroflex flap',
    link: 'https://en.wikipedia.org/wiki/Retroflex_flap'
  },
  'ɺ': {
    name: 'alveolar lateral flap',
    link: 'https://en.wikipedia.org/wiki/Dental_and_alveolar_lateral_flaps'
  },
  'ʃ': {
    name: 'voiceless palato-alveolar fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_postalveolar_fricative'
  },
  'ᶴ': {
    name: 'superscript (secondary) voiceless palato-alveolar fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_postalveolar_fricative'
  },
  'ʂ': {
    name: 'voiceless retroflex fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_retroflex_fricative'
  },
  'ᶳ': {
    name: 'superscript (secondary) voiceless retroflex fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_retroflex_fricative'
  },
  'θ': {
    name: 'voiceless dental fricative',
    link: 'https://en.wikipedia.org/wiki/Voicess_dentral_fricative'
  },
  'ᶿ': {
    name: 'superscript (secondary) voiceless dental fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voicess_dentral_fricative'
  },
  'ʈ': {
    name: 'voiceless retroflex stop',
    link: 'https://en.wikipedia.org/wiki/Voiceless_dentral_stop'
  },
  'ʊ': {
    name: 'near-close back rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Near-close_back_rounded_vowel'
  },
  'ᶷ': {
    name: 'superscript (secondary) near-close back rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Near-close_back_rounded_vowel'
  },
  'ᶶ': {
    name: 'close central rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close_central_rounded_vowel'
  },
  'ʉ': {
    name: 'superscript (secondary) close central rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close_central_rounded_vowel'
  },
  'ᵿ': {
    name: 'near-close central rounded vowel (extra-IPA)',
  },
  'ⱱ': {
    name: 'labiodental flap',
    link: 'https://en.wikipedia.org/wiki/Labiodental_flap'
  },
  'ʋ': {
    name: 'voiced labiodental approximant',
    link: 'https://en.wikipedia.org/wiki/Labiodental_approximant'
  },
  'ᶹ': {
    name: 'compressed rounding (extra-IPA) or superscript (secondary) voiced labiodental approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Labiodental_approximant'
  },
  'ʌ': {
    name: 'open-mid back unrounded vowel',
    link: 'httpś://en.wikipedia.org/wiki/Open-mid_back_unrounded_vowel'
  },
  'ᶺ': {
    name: 'superscript (secondary) open-mid back unrounded vowel',
    needsCircle: true,
    link: 'httpś://en.wikipedia.org/wiki/Open-mid_back_unrounded_vowel'
  },
  'ɰ': {
    name: 'voiced velar approximant',
    link: 'https://en.wikipedia.org/wiki/Velar_approximant'
  },
  'ᶭ': {
    name: 'superscript (secondary) voiced velar approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Velar_approximant'
  },
  'ɯ': {
    name: 'close back unrounded vowel',
    link: 'https://en.wikipedia.org/wiki/Close_back_unrounded_vowel'
  },
  'ᵚ': {
    name: 'superscript (secondary) close back unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close_back_unrounded_vowel'
  },
  'ʍ': {
    name: 'voiceless labio-velar approximant',
    link: 'https://en.wikipedia.org/wiki/Voiceless_labialized_velar_approximant'
  },
  'χ': {
    name: 'voiceless uvular fricative',
    link: 'https://en.wikipedia.org/wiki/Voiceless_uvular_fricative'
  },
  'ᵡ': {
    name: 'superscript (secondary) voiceless uvular fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_uvular_fricative'
  },
  'ʎ': {
    name: 'palatal lateral approximant',
    link: 'https://en.wikipedia.org/wiki/Palatal_lateral_approximant'
  },
  'ʏ': {
    name: 'near-close front rounded vowel',
    link: 'https://en.wikipedia.org/wiki/Near-close_front_rounded_vowel'
  },
  'ʒ': {
    name: 'voiced palato-alveolar fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_postalveolar_fricative'
  },
  'ᶾ': {
    name: 'superscript (secondary) voiced palato-alveolar fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_postalveolar_fricative'
  },
  'ʐ': {
    name: 'voiced retroflex fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_retroflex_fricative'
  },
  'ᶼ': {
    name: 'superscript (secondary) voiced retroflex fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_retroflex_fricative'
  },
  'ʑ': {
    name: 'voiced alveolo-palatal fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_alveolo-palatal_fricative'
  },
  'ᶽ': {
    name: 'superscript (secondary) voiced alveolo-palatal fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_alveolo-palatal_fricative'
  },
  'ʔ': {
    name: 'glottal stop',
    link: 'https://en.wikipedia.org/wiki/Glottal_stop'
  },
  'ʕ': {
    name: 'voiced pharyngeal fricative',
    link: 'https://en.wikipedia.org/wiki/Voiced_pharyngeal_fricative'
  },
  'ʡ': {
    name: 'epiglottal stop',
    link: 'https://en.wikipedia.org/wiki/Epiglottal_stop'
  },
  'ʢ': {
    name: 'voiced epiglottal trill',
    link: 'https://en.wikipedia.org/wiki/Voiced_epiglottal_trill'
  },
  'ˈ': {
    name: 'primary stress',
    link: 'https://en.wikipedia.org/wiki/Stress_(linguistics)'
  },
  'ˌ': {
    name: 'secondary stress',
    link: 'https://en.wikipedia.org/wiki/Stress_(linguistics)'
  },
  'ː': {
    name: 'long',
    link: 'https://en.wikipedia.org/wiki/Length_(phonetics)'
  },
  'ˑ': {
    name: 'half-long',
    link: 'https://en.wikipedia.org/wiki/Length_(phonetics)'
  },
  '\u0306': {
    name: 'extra short diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Length_(phonetics)'
  },
  '\u0329': {
    name: 'syllabic lower diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Syllabic_consonant'
  },
  '\u030d': {
    name: 'syllabic upper diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Syllabic_consonant'
  },
  '\u032f': {
    name: 'non-syllabic lower diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Semivowel'
  },
  '\u0311': {
    name: 'non-syllabic upper diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Semivowel'
  },
  '\u0303': {
    name: 'nasalized diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Nasal_vowel'
  },
  '\u0308': {
    name: 'centralized diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Central_vowel'
  },
  '\u0325': {
    name: 'voiceless lower diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voicelessness'
  },
  '\u030a': {
    name: 'voiceless upper diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voicelessness'
  },
  '\u032c': {
    name: 'voiced diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voice_(phonetics)'
  },
  '\u0361': {
    name: 'upper tie bar (affricate or coarticulation) diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tie_(typography)#International_Phonetic_Alphabet'
  },
  '\u035c': {
    name: 'lower tie bar (affricate or coarticulation) diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tie_(typography)#International_Phonetic_Alphabet'
  },
  '\u031a': {
    name: 'no audible release diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Unreleased_stop'
  },
  '\u032a': {
    name: 'dental diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Dental_consonant'
  },
  '\u033b': {
    name: 'laminal diacritic (extra-IPA)',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Laminal_consonant'
  },
  '\u033a': {
    name: 'apical diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Apical_consonant'
  },
  '\u031d': {
    name: 'raised diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Raised'
  },
  '\u031e': {
    name: 'lowered diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Lowered'
  },
  '˔': {
    name: 'raised',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Raised'
  },
  '˕': {
    name: 'lowered',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Lowered'
  },
  '\u031f': {
    name: 'advanced diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Advanced'
  },
  '\u0320': {
    name: 'retracted diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Retracted'
  },
  '˖': {
    name: 'advanced',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Advanced'
  },
  '˗': {
    name: 'retracted',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Retracted'
  },
  '‿': {
    name: 'connected speech',
    link: 'https://en.wikipedia.org/wiki/Connected_speech'
  },
  '\u0339': {
    name: 'more rounded diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#More_and_less_rounded'
  },
  '\u031c': {
    name: 'less rounded diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#More_and_less_rounded'
  },
  '\u0324': {
    name: 'breathy-voiced diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Breathy_voice'
  },
  '\u0330': {
    name: 'creaky-voiced diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Creaky_voice'
  },
  '\u033c': {
    name: 'linguolabial diacritic (extra-IPA)',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Linguolabial_consonant'
  },
  '\u0318': {
    name: 'advanced tongue root diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Advanced_and_retracted_tongue_root'
  },
  '\u0319': {
    name: 'retracted tongue root diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Advanced_and_retracted_tongue_root'
  },
  '\u033d': {
    name: 'mid centralized diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Relative_articulation#Mid-centralized_vowels'
  },
  'ʼ': {
    name: 'ejective',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Ejective_consonant'
  },
  '\u030f': {
    name: 'extra low diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u0300': {
    name: 'low diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u0304': {
    name: 'mid diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u0301': {
    name: 'high diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u030b': {
    name: 'very high diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u0302': {
    name: 'falling diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u030c': {
    name: 'rising diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u1dc5': {
    name: 'low rising diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u1dc4': {
    name: 'high rising diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '\u1dc8': {
    name: 'rising-falling diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '˩': {
    name: 'extra low tone',
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '˨': {
    name: 'low tone',
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '˧': {
    name: 'mid tone',
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '˦': {
    name: 'high tone',
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  '˥': {
    name: 'extra high tone',
    link: 'https://en.wikipedia.org/wiki/Tone_(linguistics)'
  },
  'ꜜ': {
    name: 'downstep',
    link: 'https://en.wikipedia.org/wiki/Downstep'
  },
  'ꜛ': {
    name: 'upstep',
    link: 'https://en.wikipedia.org/wiki/Upstep'
  },
  '↘︎': {
    name: 'global fall',
    link: 'https://en.wikipedia.org/wiki/Intonation_(linguistics)'
  },
  '↗︎': {
    name: 'global rise',
    link: 'https://en.wikipedia.org/wiki/Intonation_(linguistics)'
  },
  '|': {
    name: 'minor group (foot)',
    link: 'https://en.wikipedia.org/wiki/Prosodic_unit'
  },
  '‖': {
    name: 'major group (intonation)',
    link: 'https://en.wikipedia.org/wiki/Prosodic_unit'
  },
  'ʘ': {
    name: 'bilabial click',
    link: 'https://en.wikipedia.org/wiki/Bilabial_click'
  },
  'ǀ': {
    name: 'dental click',
    link: 'https://en.wikipedia.org/wiki/Dental_click'
  },
  'ǃ': {
    name: 'alveolar click',
    link: 'https://en.wikipedia.org/wiki/Alveolar_click'
  },
  '‼': {
    name: 'retroflex click',
    link: 'https://en.wikipedia.org/wiki/Retroflex_click'
  },
  'ǁ': {
    name: 'lateral click',
    link: 'https://en.wikipedia.org/wiki/Lateral_click'
  },
  'ǂ': {
    name: 'palatal click',
    link: 'https://en.wikipedia.org/wiki/Palatal_click'
  },
  'ʰ': {
    name: 'aspirated',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Aspirated_consonant',
  },
  'ʱ': {
    name: 'breathy-voiced',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Breathy_voice',
  },
  'ˀ': {
    name: 'glottalized',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Glottalization',
  },
  'ˤ': {
    name: 'pharyngealized',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Pharyngealization',
  },
  '\u0334': {
    name: 'velarized or pharyngealized diacritic',
    diacritic: true,
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Velarization'
  },
  'ˠ': {
    name: 'velarized or secondary voiced velar fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Velarization'
  },
  'ʲ': {
    name: 'palatalized or secondary voiced palatal approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Palatalization_(phonetics)'
  },
  'ʷ': {
    name: 'labialized, protruded rounding or secondary voiced labio-velar approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Labialization'
  },
  'ᵝ': {
    name: 'compressed rounding (extra-IPA) or secondary voiced bilabial fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Roundedness#Types_of_rounding'
  },
  'ˡ': {
    name: 'lateral release or secondary voiced alveolar lateral approximant',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Lateral_release_(phonetics)'
  },
  'ⁿ': {
    name: 'nasal release or secondary alveolar nasal',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Nasal_release'
  },
  '˞': {
    name: 'R-colored',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/R-colored_vowel'
  },
  '˭': {
    name: 'tenuis',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Tenuis_consonant'
  },
  '.': {
    name: 'syllable break',
  },
  'ᵃ': {
    name: 'superscript (secondary) open front unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Open_front_unrounded_vowel'
  },
  'ᵇ': {
    name: 'superscript (secondary) voiced bilabial stop',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_bilabial_stop'
  },
  'ᶜ': {
    name: 'superscript (secondary) voiceless palatal stop',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_palatal_stop'
  },
  'ᵈ': {
    name: 'superscript (secondary) voiced alveolar stop',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_alveolar_stop'
  },
  'ᵉ': {
    name: 'superscript (secondary) close-mid front unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close-mid_front_unrounded_vowel'
  },
  'ᶠ': {
    name: 'superscript (secondary) voiceless labiodental fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_labiodental_fricative'
  },
  'ᵍ': {
    name: 'superscript (secondary) voiced velar stop',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_velar_stop'
  },
  'ⁱ': {
    name: 'superscript (secondary) close front unrounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close_front_unrounded_vowel'
  },
  'ᵏ': {
    name: 'superscript (secondary) voiceless velar stop',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_velar_stop'
  },
  'ᵐ': {
    name: 'superscript (secondary) bilabial nasal',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Bilabial_nasal'
  },
  'ᵒ': {
    name: 'superscript (secondary) close-mid back rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close-mid_back_rounded_vowel'
  },
  'ᵖ': {
    name: 'superscript (secondary) voiceless bilabial stop',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_bilabial_stop'
  },
  'ʳ': {
    name: 'superscript (secondary) alveolar trill',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Alveolar_trill'
  },
  'ˢ': {
    name: 'superscript (secondary) voiceless alveolar fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_alveolar_fricative'
  },
  'ᵗ': {
    name: 'superscript (secondary) voiceless alveolar stop',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_alveolar_stop'
  },
  'ᵘ': {
    name: 'superscript (secondary) close back rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close_back_rounded_vowel'
  },
  'ᵛ': {
    name: 'superscript (secondary) voiced labiodental fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_labiodental_fricative'
  },
  'ˣ': {
    name: 'superscript (secondary) voiceless velar fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiceless_velar_fricative'
  },
  'ʸ': {
    name: 'superscript (secondary) close front rounded vowel',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Close_front_rounded_vowel'
  },
  'ᶻ': {
    name: 'superscript (secondary) voiced alveolar fricative',
    needsCircle: true,
    link: 'https://en.wikipedia.org/wiki/Voiced_alveolar_fricative'
  }
};
