let readline = require("readline-sync");
let number = parseInt(readline.question("enter the Number :"));
if (number % 2 != 0) {
  console.log("number is odd");
} else {
  console.log("number is not odd");
}
