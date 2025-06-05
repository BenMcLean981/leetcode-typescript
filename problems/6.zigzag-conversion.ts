function convert(s: string, numRows: number): string {
  let rows: Array<string> = makeEmptyRows(numRows);

  populateRows(s, rows);

  return readRows(rows);
}

function makeEmptyRows(numRows: number) {
  let rows: Array<string> = [];

  for (let i = 0; i < numRows; i++) {
    rows.push("");
  }

  return rows;
}

function populateRows(s: string, rows: Array<string>) {
  if (rows.length === 1) {
    rows[0] = s;

    return;
  }

  let goingDown = true;
  let row = 0;

  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];

    if (row === rows.length - 1) {
      goingDown = false;
    } else if (row === 0) {
      goingDown = true;
    }

    if (goingDown) {
      row++;
    } else {
      row--;
    }
  }
}

function readRows(rows: ReadonlyArray<string>): string {
  return rows.join("");
}

console.log(convert("AB", 1));
