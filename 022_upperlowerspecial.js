const checkUpperLowerSpecial = (value) => {
  if (value >= "A" && value <= "Z") {
    return "upper case";
  }
  if (value >= "a" && value <= "z") {
    return "lower case";
  } else {
    return "special charactor";
  }
};
console.log(checkUpperLowerSpecial("9"));
console.log(checkUpperLowerSpecial("u"));
console.log(checkUpperLowerSpecial("A"));
