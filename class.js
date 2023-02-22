// `
class Instructor {
  name;
  designation = "Web Course Instructor";
  team = "Web team";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSupportSession(time) {
    console.log(`Start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
}

const aamir = new Instructor("aamir", "mumbai");
console.log(aamir);
aamir.startSupportSession("9:00 pm");
aamir.createQuiz(60);

const solaiman = new Instructor("solaiman", "dhaka");
console.log(solaiman);
