const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " ",
};

function decode(expr) {
  c = "";
  for (let i = 0; i < expr.length / 10; i++) {
    a = expr.substring(i * 10, (i + 1) * 10);
    while (a[0] !== "1" && a[0] !== "*") {
      a = a.substring(1);
    }
    b = "";
    for (let j = 0; j < a.length / 2; j++) {
      if (a.substring(2 * j, 2 * j + 2) === "10") b = b + ".";
      if (a.substring(2 * j, 2 * j + 2) === "11") b = b + "-";
      if (a[0] === "*") {
        b = b + " ";
        break;
      }
    }
    c = c + MORSE_TABLE[b];
  }
  return c;
}

module.exports = {
  decode,
};
