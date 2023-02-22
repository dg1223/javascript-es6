// `
const person = "Adam Sandler";
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine =
  "First line text \n" +
  "second line of code \n" +
  "third line of text \n" +
  "fourth line of text \n";

// console.log(multiLine);

const newMultiline = `
first line of text
second line of text
third line of text
`;

// console.log(newMultiline);

const a = 20;
const b = 30;
const summary = "sum of " + a + "and" + b + "is:" + (a + b);
console.log(summary);

const newSummary = `sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);

const nums = [78, 95, 12, 6, 444];
const arraySummary = `sum of ${a} and ${nums.length} is: ${a + nums.length}`;
console.log(arraySummary);
