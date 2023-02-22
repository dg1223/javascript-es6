// function add(first, second) {
//   second = second || 0;
//   console.log(first, second);
//   const total = first + second;
//   return total;
// }

function add(first = 0, second = 36) {
  const total = first + second;
  return total;
}

const result = add(10, 0);
console.log(result);

const result2 = add(10);
console.log(result2);

const result3 = add();
console.log(result3);

function fullName(first, last = "Chowdhury") {
  const name = first + " " + last;
  return name;
}

const name = fullName("Gelam");
console.log(name);
