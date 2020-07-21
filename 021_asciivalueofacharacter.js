const asciiValueOfCharacter = (character) => {
  let asciivalue = character.charCodeAt(0);
  return asciivalue;
};
console.log(asciiValueOfCharacter("HELLO WORLD"));
console.log(asciiValueOfCharacter("hello world"));
