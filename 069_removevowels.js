const removeVowels = (string) => {
  return string.replace(/[aeiou]/gi, "");
};
console.log(removeVowels("hello world"));
