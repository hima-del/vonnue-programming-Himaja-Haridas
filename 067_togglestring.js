const toggleString = (str) => {
  for (let i = 0; str.length !== 0; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      str[i] = str[i] + "a" - "A";
    } else if (str[i] >= "a" && str[i] <= "z") {
      str[i] = str[i] + "A" - "a";
    }
  }
  return str;
};
console.log(toggleString("heLLo"));
