let readline = require("readline-sync");
const sum1ton = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
const product1ton = (n) => {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
};
let number1 = parseInt(readline.question("enter the Number :"));
let option = readline.question(
  "enter the your choice : s for sum and p for product"
);
if (option === "s") {
  console.log("\n sum :");
  console.log(sum1ton(number1));
} else if (option === "p") {
  console.log("\n product :");
  console.log(product1ton(number1));
}
