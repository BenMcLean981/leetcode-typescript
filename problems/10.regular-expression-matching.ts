function isMatch(s: string, p: string): boolean {
  const tokens = tokenize(p);

  let s_i = 0;
  let t_i = 0;
  let lastChance = false;

  while (s_i < s.length && t_i < tokens.length) {
    const c = s[s_i];
    const token = tokens[t_i];

    if (isWildcard(token.symbol)) {
      if (!token.many) {
        t_i++;
      }

      s_i++;
      lastChance = false;
      continue;
    }

    if (c === token.symbol) {
      if (token.many) {
        lastChance = false;

        s_i++;
        continue;
      } else {
        lastChance = false;

        s_i++;
        t_i++;
        continue;
      }
    } else {
      if (token.many && !lastChance) {
        lastChance = true;

        t_i++;
        continue;
      } else if (lastChance) {
        return false;
      }
    }

    return false;
  }

  return (
    s_i === s.length &&
    (t_i === tokens.length ||
      tokens.slice(t_i).every((t) => t.many || isWildcard(t.symbol)))
  );
}

function tokenize(p: string): ReadonlyArray<Token> {
  if (p === "") {
    return [];
  } else if (!isSymbol(p[0])) {
    throw new Error(`Not a symbol (${p[0]}).`);
  } else if (p[1] === "*") {
    const token: Token = { symbol: p[0], many: true };

    return [token, ...tokenize(p.slice(2))];
  } else {
    return [{ symbol: p[0], many: false }, ...tokenize(p.slice(1))];
  }
}

type Token = { symbol: Symbol; many: boolean };

type Symbol = Character | Wildcard;

type Wildcard = ".";

function isWildcard(symbol: Symbol): symbol is Wildcard {
  return symbol === ".";
}

export const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;

export type Character = (typeof characters)[number];

function isCharacter(c: string): c is Character {
  return characters.some((s) => s === c);
}

function isSymbol(c: string): c is Symbol {
  return isCharacter(c) || c === ".";
}

console.log(isMatch("aa", "a")); // false;
console.log(isMatch("aa", "a*")); // true;
console.log(isMatch("aa", ".*")); // true;
console.log(isMatch("aab", "c*a*b")); // true;
console.log(isMatch("mississippi", "mis*is*p*.")); // false;
console.log(isMatch("ab", ".*c")); // false;
console.log(isMatch("mississippi", "mis*is*ip*.")); // true;
console.log(isMatch("aaa", "a.a")); // true
console.log(isMatch("aaa", "a*a")); // true
