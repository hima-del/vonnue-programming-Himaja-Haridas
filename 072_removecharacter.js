const removeCharacter = (str) => {
  let newarray = str.split("");
  for (let i = 0; i < newarray.length; i++) {
    if (
      !(newarray[i] >= "a" && newarray[i] <= "z") ||
      (newarray[i] >= "A" && newarray[i] <= "Z")
    ) {
      delete newarray[i];
    }
  }
  return newarray.join("");
};
console.log(removeCharacter("a+b"));
