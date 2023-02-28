// You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

array1 = [33, 50, 79, 78, 90, 101, 30];
const arrayDiv10 = array1.filter((num) => num % 10 === 0);
console.log(arrayDiv10);
