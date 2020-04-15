let readline = require("readline-sync");
const checkVowel = (x) => {
  if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U") {
    return true;
  } else {
    return false;
  }
};
input = readline.question("enter the letter :");
input = input.toUpperCase();
console.log(checkVowel(input));
