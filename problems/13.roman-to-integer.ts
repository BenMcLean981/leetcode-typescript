function romanToInt(s: string): number {
    let result = 0;
    let i = 0;

    while (i < s.length) {
        const v = values.find((v) => s.slice(i).startsWith(v.symbol));

        if (!v) {
            throw new Error(s);
        }

        result += v.value;

        i += v.symbol.length;
    }

    return result;
}

type Value = { symbol: string; value: number };

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
