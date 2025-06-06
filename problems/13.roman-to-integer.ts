function romanToInt(s: string): number {
    let result = 0;
    let i = 0;

    while (i < s.length) {
        const twoChar = `${s.charAt(i)}${s.charAt(i + 1)}`;
        const char = s.charAt(i);

        const twoCharValue = map[twoChar];
        const v = twoCharValue ?? map[char];

        if (!v) {
            throw new Error(s);
        }

        result += v;

        i += twoCharValue !== undefined ? 2 : 1;
    }

    return result;
}

type Value = { symbol: string; value: number };

const map: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

const values: ReadonlyArray<Value> = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 },
];

console.log(romanToInt("MCMXCIV"));
