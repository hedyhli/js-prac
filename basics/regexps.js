var pattern1 = new RegExp();
// or:
var pattern2 = / /;

// Brackets:
/[a]/; // matches: "a"
/[0-9]/; // 0 to 9
/[a-z]/; // a to z
/[A-Z]/; // A to Z
/[A-z]/; // A to Z + a to z

// more:
// https://www.tutorialspoint.com/javascript/javascript_regexp_object.htm

// check phone number (simple):
var phoneNumRE = /[0-9]{11}/;
var phoneNumber = "12345678910"; // change this number and run
var isNum = phoneNumRE.test(phoneNumber);
isNum ? console.log("Is a phone number") : console.log("Is not a phone number");
