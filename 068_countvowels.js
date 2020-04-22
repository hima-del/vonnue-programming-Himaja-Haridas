const countVowel = (string) => {
  let count = 0;
  for (i = 0; i < string.length - 1; i++) {
    if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
      count += 1;
    }
  }
  return count;
};
console.log(countVowel("hello world"));
console.log(countVowel("aeroplane"));
