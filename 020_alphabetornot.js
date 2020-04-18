const checkAlphabet = (value) => {
  if ((value >= "a" && value <= "z") || (value >= "A" && value <= "Z")) {
    return true;
  } else {
    return false;
  }
};
console.log(checkAlphabet("o"));
console.log(checkAlphabet("9"));
