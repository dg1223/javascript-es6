function sum(a, b, c) {
  const args = [...arguments];
  console.log(args);
  const result = a + b + c;
  return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 34, 5, 6);
// console.log(total);

console.log(sum.length);
