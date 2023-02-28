function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("Good morning", name);
}

const name = "Halim mama";

greeting(greetingHandler, name);
greeting(greetingHandler, "Tom Brady");
greeting(greetingHandler, "Tom Cruise");

function greetEvening(name) {
  console.log("Good evening", name);
}

greeting(greetEvening, "Tom Solaiman");
