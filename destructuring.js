const fish = {
  name: "King Hilsha",
  address: "Chandpur",
  color: "silver",
  phone: "01717658899",
  price: 4000,
};

// const phone = fish.phone
const { phone } = fish;
// console.log(phone);
// console.log(fish.address);
// console.log(fish.color);
// console.log(fish.phone);
// console.log(fish.price);

const { address } = fish;
// console.log(address);

// array destructuring
const [first, another] = [44, 99, 88, 456];
// console.log(first, another);

const nayoks = ["sakib", "bappi", "raj"];
const [king, lost, notun] = nayoks;
// console.log(notun);

function getNames() {
  return ["Alim", "Halim"];
}

const [baba, chacha] = getNames();
// console.log(chacha, baba);
