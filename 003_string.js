let string1 = "hello";
let string2 = "world";
let string3 = string1.concat(" ", string2);
console.log(string3);

function reverseString(str) {
  let splitstring = str.split("");
  let rev = splitstring.reverse();
  let joinstring = rev.join("");
  return joinstring;
}
let string4 = reverseString("hello");
console.log(string4);

let string5 = reverseString(string1);
let string6 = reverseString(string2);
let string7 = string5.concat(" ", string6);
console.log(string7);

let string8 = "         hello world      ";
console.log(string8.trim());
