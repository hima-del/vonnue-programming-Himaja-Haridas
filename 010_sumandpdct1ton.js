let readline = require("readline-sync");
const sum1ton = (n) => {
  let total1 = 0;
  for (let i = 1; i <= n; i++) {
    total1 += i;
  }
  return total1;
};
const product1ton = (n) => {
  let total2 = 1;
  for (let i = 1; i <= n; i++) {
    total2 *= i;
  }
  return total2;
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
