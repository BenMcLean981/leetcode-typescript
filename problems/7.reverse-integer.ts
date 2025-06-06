function reverse(x: number): number {
  const reversed = reverseDigits(Math.abs(x));

  if (reversed > MAX_SIGNED_32) {
    return 0;
  }

  return Math.sign(x) * Math.abs(reversed);
}

function reverseDigits(x: number): number {
  let result = 0;

  const numDigits = Math.floor(Math.log10(x)) + 1;

  for (let i = 0; i < numDigits; i++) {
    const n = getDigit(x, i);
    const newIndex = numDigits - i - 1;

    result += n * Math.pow(10, newIndex);
  }

  return result;
}

function getDigit(x: number, placeIndex: number): number {
  const base = Math.pow(10, placeIndex);

  return Math.floor(x / base) % 10;
}

const MAX_SIGNED_32 = Math.pow(2, 31) - 1;
