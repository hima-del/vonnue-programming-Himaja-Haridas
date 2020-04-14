let readline = require("readline-sync");
let number = readline.question("enter the Number :");
function powerOfThree(num) {
  for (let i = 0; i < num; i++) {
    if (i * i * i == num) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(powerOfThree(number));
