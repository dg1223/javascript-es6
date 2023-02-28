// In the array shown below, you have 3 objects as
// array elements. Can you find out the total sum of
// ages from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

const people = [
  { name: "Meena", age: 20 },
  { name: "Reena", age: 15 },
  { name: "Suchorita", age: 22 },
];

// for loop
let age = 0;

// for (let i = 0; i < people.length; i++) {
//   age += people[i].age;
// }

for (let object of people) {
  age += object.age;
}
console.log(age);

// reduce
const initialValue = 0;
const ageReduced = people.reduce(
  (accumulator, currentValue) => accumulator + currentValue.age,
  initialValue
);
console.log(ageReduced);
