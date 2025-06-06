function intToRoman(num: number): string {
    let result = "";

    while (num > 0) {
        const leadingDigit = getLeadingDigit(num);

        let value: Value | undefined;

        if (leadingDigit === "9") {
            value = subtractiveNines.find(
                (_, i, arr) =>
                    arr[i + 1] === undefined || arr[i + 1].value > num
            );
        } else if (leadingDigit === "4") {
            value = subtractiveFours.find(
                (_, i, arr) =>
                    arr[i + 1] === undefined || arr[i + 1].value > num
            );
        } else {
            value = values.find((v) => v.value <= num);
        }

        if (value === undefined) {
            throw new Error(leadingDigit);
        }

        result += value.symbol;
        num -= value.value;
    }

    return result;
}

function getLeadingDigit(num: number): string {
    return num.toString()[0];
}

type Value = { symbol: string; value: number };

const values: ReadonlyArray<Value> = [
    { symbol: "M", value: 1000 },
    { symbol: "D", value: 500 },
    { symbol: "C", value: 100 },
    { symbol: "L", value: 50 },
    { symbol: "X", value: 10 },
    { symbol: "V", value: 5 },
    { symbol: "I", value: 1 },
];

const subtractiveFours: ReadonlyArray<Value> = [
    { symbol: "IV", value: 4 },
    { symbol: "XL", value: 40 },
    { symbol: "CD", value: 400 },
];

const subtractiveNines: ReadonlyArray<Value> = [
    { symbol: "IX", value: 9 },
    { symbol: "XC", value: 90 },
    { symbol: "CM", value: 900 },
];

console.log(intToRoman(3749));
console.log(intToRoman(40));
