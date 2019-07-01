console.log("\n/////////////// CALLBACKS ///////////////");

// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(long) {
  console.log(long);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items, last => {
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(3, 4, add => console.log(add));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(3, 4, mult => console.log(mult));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }
}
contains("Gum", items, present => console.log(present));

console.log("\n///// callbacks stretch");
/* STRETCH PROBLEM */
const numbers = [0, 0, 1, 1, 2, 2, 4, 16, 23, 8, 12, 4, 16];
const foods = [
  "cheese",
  "bean",
  "tomato",
  "bean",
  "tortilla",
  "sour cream",
  "cheese",
  "green chile"
];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let uniqueArray = [];
  uniqueArray = array.sort().filter(function(value, position, array) {
    return !position || value != array[position - 1];
  });
  return cb(uniqueArray);
}

removeDuplicates(numbers, remove => console.log(remove));
removeDuplicates(foods, remove => console.log(remove));
