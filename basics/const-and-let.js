/* eslint-disable no-const-assign */
const x = 1; // value of x cannot be changed
x = 0; // causes error

var a = 10
if (a === 10) {
  let b = 0; // b is only available in the "if" block
  b = 1;
}
b = 1 // b is not defined in this scope
