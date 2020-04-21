let readline = require("readline-sync");
const checkPositive = (n) => {
  if (n > 0) {
    return true;
  } else {
    return false;
  }
};
let number = parseInt(readline.question("enter the Number :"));
console.log(checkPositive(number));
