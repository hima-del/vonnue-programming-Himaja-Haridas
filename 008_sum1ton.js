let readline = require("readline-sync");
function sum(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
//console.log(sum(5));
let number1 = parseInt(readline.question("enter the Number :"));
console.log("\n sum :");
console.log(sum(number1));
