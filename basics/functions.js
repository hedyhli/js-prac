function myFunc() {
  console.log("I'm in the function!");
}

myFunc();

// ---

function getSquare(x) {
  return x * x; // return is a keyword
}

console.log(getSquare(3));

// ---

// Function with optional arguments
function add(x = 0, y = 0) {
  // Optional args
  return x + y;
}

console.log(add()); // => 0
