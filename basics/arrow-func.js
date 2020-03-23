var addOne = (x) => {
  // declaring an arrow function
  return x + 1;
};

console.log(addOne(1)); // calling an arrow function

console.log("---")

var addAOne = (x) => x + 1; // "{}" can be removed in this case.

console.log(addAOne(1)); // same result (2)

console.log("---")

var addAnotherOne = x => x + 1; // "()" can be removed with only one or no params

console.log(addAnotherOne(1)); // same result (2)
