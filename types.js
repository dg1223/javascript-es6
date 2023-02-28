/*
Truthy:
1. true
2. any number (+ve, -ve) except 0
3. any char / string except empty string
4. any object, even if empty
5. any array, even if empty

Falsy:
1. false
2. 0
3. '' empty string
4. undefined
5. null

*/
let x = [];
// if (x) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// check falsy
const y = null;
if (!y) {
  console.log("truthy");
} else {
  console.log("falsy");
}
