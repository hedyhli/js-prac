/* eslint-disable no-new-object */
// A basic object:
var myObj = {
  name: "myObj"
};
console.log("Name of myObj: ", myObj.name);

// is equivalent to:
var myObj2 = new Object(); // notice the 'new' keyword
myObj2.name = "myObj2";
console.log("Name of myObj2: ", myObj2.name);

// User-defined function:
function UserDefined(name) {
  // class declaration
  this.name = name; // 'this' refers to the current object
}
var myObj3 = new UserDefined("myObj3"); // instantiating an object off a class
console.log("Name of myObj3: ", myObj3.name);

// Output:
// Name of myObj:  myObj
// Name of myObj2:  myObj2
// Name of myObj3:  myObj3
