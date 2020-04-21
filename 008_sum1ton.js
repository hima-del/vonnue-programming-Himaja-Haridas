let readline = require("readline-sync");
const sum = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

let number1 = parseInt(readline.question("enter the Number :"));
console.log("\n sum :");
console.log(sum(number1));
