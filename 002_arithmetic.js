let readline = require("readline-sync");

const substract = (num1, num2) => {
  return num1 - num2;
};

const add = (num1, num2) => {
  return num1 + num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const modulas = (num1, num2) => {
  return num1 % num2;
};

const greaterthan = (num1, num2) => {
  return num1 > num2;
};

const lessthan = (num1, num2) => {
  return num1 < num2;
};

const isEqual = (num1, num2) => {
  return num1 === num2;
};

let number1 = parseInt(readline.question("enter first Number :"));
let number2 = parseInt(readline.question("Enter second Number :"));

console.log("\n sum :");
console.log(add(number1, number2));
console.log("\n divide :");
console.log(divide(number1, number2));
console.log("\n multiplication :");
console.log(multiply(number1, number2));
console.log("\n substract :");
console.log(substract(number1, number2));
console.log("\n modulas :");
console.log(modulas(number1, number2));
console.log("\n check first number is graterthan second number :");
console.log(greaterthan(number1, number2));
console.log("\n check first number is lessthan second number :");
console.log(lessthan(number1, number2));
console.log("\n check first number is equal to second number :");
console.log(isEqual(number1, number2));
