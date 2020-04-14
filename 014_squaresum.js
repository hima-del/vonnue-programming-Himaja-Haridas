let readline = require("readline-sync");
let number = readline.question("enter the Number :");
function sumSquare(num) {
  for (let i = 1; i * i <= num; i++) {
    for (let j = 1; j * j <= num; j++) {
      if (i * i + j * j == num) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(sumSquare(number));
