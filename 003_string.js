// let string1 = "hello";
// let string2 = "world";
// let string3 = string1.concat(" ", string2);
// console.log(string3);
const concatenateString = (string1, string2) => {
  let string3 = string1.concat(" ", string2);
  return string3;
};
let string10 = concatenateString("hello", "world");
console.log(string10);
const reverseString = (str) => {
  let splitstring = str.split("");
  let rev = splitstring.reverse();
  let joinstring = rev.join("");
  return joinstring;
};
let string4 = reverseString("hello");
console.log(string4);

let string5 = reverseString("hello");
let string6 = reverseString("world");
let string7 = string5.concat(" ", string6);
console.log(string7);

let string8 = "         hello world      ";
console.log(string8.trim());
