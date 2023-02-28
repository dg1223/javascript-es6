// closure gives you scope to outer fucntion's scope
// from the inner function
// closures are created every time a funciton
// is created

function kitchen() {
  let roast = 0;

  return function () {
    roast++;
    return roast;
  };
}

const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());

function stopwatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const watch1 = stopwatch();
console.log(watch1());
const watch2 = stopwatch();
console.log(watch2());
console.log(watch2());
const watch3 = stopwatch();
console.log(watch3());
console.log(watch3());
console.log(watch3());
