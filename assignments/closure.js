console.log("\n/////////////// CLOSURE ///////////////");
// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const name = "Ruth";
let favList = () => {
  let favFood = "green chile";
  let favHobby = "camping";
  let favAuthor = "Nnedi Okorafor";
  return `Hi my name is ${name}. My favorite food is ${favFood}, my favorite hobby is ${favHobby}, and my favorite author is ${favAuthor}.`;
};
console.log(favList());

console.log("\n///// closure stretch");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

console.log("\n// closure stretch challenge 2");
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let startNum = 0;

  return function() {
    return startNum++;
  };
};

const newCounter = counter();

console.log(newCounter()); // 0
console.log(newCounter()); // 1
console.log(newCounter()); // 2
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

console.log("\n// closure stretch challenge 3");
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let startNum = 0;

  return function(method) {
    if (method === "increment") {
      return startNum++;
    } else if (method === "decrement") {
      return startNum--;
    } else {
      return startNum;
    }
  };
};

const newCounterFactory = counterFactory();

console.log(newCounterFactory("increment"));
console.log(newCounterFactory("increment"));
console.log(newCounterFactory("increment"));
console.log(newCounterFactory("decrement"));
console.log(newCounterFactory("decrement"));
