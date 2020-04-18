const readline = require("readline-sync");
reverseString = (string) => {
  return string.split("").reverse().join("");
};
mixLetters = (string1, string2) => {
  let len = 
  str1.length > str2.length ? str1.length : str2.length;
  let combine = "";
  for (let i = 0; len > i; i++) {
    if (str1[i] === undefined) {
      combine = combine + str2[i];
    } else if (str2[i] === undefined) {
      combine = combine + str1[i];
    } else {
      combine = combine + str1[i] + str2[i];
    }
  }
  return combine;
};
splitIntoTwo = (str) => {
  let len = str.length;
  let mid = len / 2;
  let half1, half2;
  half1 = str.slice(0, mid);
  half2 = str.slice(mid, len);
  return half1 + "," + half2;
};
removeWhiteSpace = (val) => {
  let result = "";
  for (let i = 0; val.length > i; i++) {
    if (val[i] !== " ") {
      result = result + val[i];
    }
  }
  return result;
};
concatString = (str1, str2) => {
  return str1.concat(str2);
};
let firstString = readline.question("enter first string :");
let secondString = readline.question("enter second string :");
console.log("\nconcatenate : " + concatString(firstString, secondString));
console.log("\nreverse first string: " + reverseStr(firstString));
console.log("\nreverse second string : " + reverseStr(secondString));
console.log(
  "\nreverse concatenate : " +
    concatString(reverseStr(firstString), reverseStr(secondString))
);
console.log("\nmixletters : " + mixLetters(firstString, secondString));
console.log("\n1st one :split into two : " + splitIntoTwo(firstString));
console.log("\n2st one :split into two : " + splitIntoTwo(secondString));
console.log("\nremove whitespaces 1st: " + removeWhiteSpace(firstString));
console.log("\nremove whitespaces 2nd: " + removeWhiteSpace(secondString));
