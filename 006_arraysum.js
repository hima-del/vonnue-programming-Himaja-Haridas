let readline = require("readline-sync");
let inputArray = [];
let size = 5;
for (let i = 0; i < size; i++) {
  inputArray[i] = parseInt(readline.question("enter the array :"));
}
console.log(inputArray);
function sum(input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += input[i];
  }
  return total;
}
console.log(sum(inputArray));
