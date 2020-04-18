concatenateString = (string1, string2) => {
  return string1.concat(string2);
};
reverseString = (string) => {
  return string.split("").reverse().join("");
};
splitIntoTwo = (string) => {
  let len = string.length;
  let mid = len / 2;
  let half1, half2;
  half1 = string.slice(0, mid);
  half2 = string.slice(mid, len);
  return half1 + "," + half2;
};
removeWhiteSpace = (number) => {
  let result = "";
  for (let i = 0; number.length > i; i++) {
    if (number[i] !== " ") {
      result = result + number[i];
    }
  }
  return result;
};

console.log(concatenateString("hello", "world"));
console.log(reverseString("hello"));
console.log(concatenateString(reverseString("hello"), reverseString("world")));
console.log(splitIntoTwo("world"));
console.log(removeWhiteSpace("     hello    "));
