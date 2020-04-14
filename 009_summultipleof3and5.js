let readline = require("readline-sync");
function sum(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || (i % 3 === 0 && i % 5 === 0)) {
      total += i;
    }
  }
  return total;
}
let number1 = parseInt(readline.question("enter the Number :"));
console.log("\n sum :");
console.log(sum(number1));
