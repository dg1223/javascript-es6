const users = [{ id: 1, name: "abul", job: "doctor" }];
// console.log(users[0].name);

const data = {
  count: 500,
  data: [
    { id: 1, name: "babul", job: "leader" },
    { id: 2, name: "dabul", job: "leader" },
  ],
};

// console.log(data.data[0].name);

const user = {
  id: 5001,
  name: "Thomas Alva Edison",
  address: {
    street: {
      first: "35/A kochukhet lane",
      second: "third floor",
      third: "right side",
    },
    postoffice: "cantonment",
    city: "Dhaka",
  },
};

const userSide = user.address?.stret;
console.log(userSide);
