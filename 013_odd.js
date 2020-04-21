let readline = require("readline-sync");
let number = parseInt(readline.question("enter the Number :"));
const oddCheck = (number) => {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};
console.log(oddCheck(number));
