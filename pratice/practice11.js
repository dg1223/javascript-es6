// You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

array1 = [1, 9, 17, 22];

// for loop
let resultForLoop = 0;
for (let elem of array1) {
  resultForLoop += elem;
}
console.log(resultForLoop);

// reduce()
const initialValue = 0;
const resultReduce = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(resultReduce);
