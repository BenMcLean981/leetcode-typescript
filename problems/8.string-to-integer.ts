function myAtoi(s: string): number {
  let digitString = "";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (!NUMBERS.has(c) && c !== " ") {
      break;
    } else if (NUMBERS.has(c)) {
      digitString += c;
    }
  }

  console.log(digitString);

  return parseInt(digitString);
}

const NUMBERS = new Set([
  "-",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
]);
