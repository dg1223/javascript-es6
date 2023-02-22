const max = Math.max(12, 85, 999, 78);
// console.log(max);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = numbers;
// numbers.push(55);
// numbers2.push(777);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [numbers];
// numbers.push(55);
// numbers3.push(777);
// console.log(numbers);
// console.log(numbers3);

const numbers4 = [...numbers];
// numbers.push(100);
// numbers4.push(777);
// console.log(numbers);
// console.log(numbers4);

const numbers5 = [444, 78, ...numbers, 111];
console.log(numbers5);