console.log("--For in--");

// Create an object with some properties
var obj = {
  one: 1,
  two: 2,
  three: 3
};

// iterates over the object, and logs the properties
for (key in obj) {
  console.log(key);
}


console.log("\n--For Each--");

// iterating over an array
a = [1, 2, 3];
a.forEach(element => {
  console.log(element);
});
