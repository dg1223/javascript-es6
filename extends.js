// `
class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "Web team";
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`Start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

class Developer extends TeamMember {
  designation = "Developer";
  team = "Development team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`Please develop the feature ${feature}`);
  }
  release(version) {
    console.log(`Please release the version ${version}`);
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

class JobPlacement extends TeamMember {
  designation = "Job Placement Commandos";
  team = "Job placement team";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideResume(feature) {
    console.log(`Please develop the feature ${feature}`);
  }
  release(version) {
    console.log(`Please release the version ${version}`);
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

const alia = new Developer("Alia Bhatt", "Dhaka", "React");
// console.log(alia);
// alia.provideFeedback();

const bipasha = new JobPlacement("bipasha", "khulna", "Asia");
// console.log(bipasha);
// bipasha.provideResume("SEA");

const product = {
  name: "Laptop",
  model: "Yoga 3",
  price: 49000,
  dusk: "512SSD",
};
const { price } = product;
console.log(price);
