let readline = require("readline-sync");
const checkPositive = (n) => {
  if (n > 0) {
    return true;
  } else {
    return false;
  }
};
let Number = parseInt(readline.question("enter the Number :"));
console.log(checkPositive(Number));
