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
