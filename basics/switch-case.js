var x = 1; // new var
switch (
  x // checks the value of x
) {
case 1:
  console.log("X is 1"); // does this if x=1
  break; // breaks out of the 'switch' statement

case 0:
  console.log("X is 0"); // does this if x=0
  break;

default:
  console.log("X is something else"); // does this if x is neither
  break;
}
