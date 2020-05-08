const removeBracket = (str) => {
  newarray = str.split("");
  for (let i = 0; i < newarray.length; i++) {
    if (newarray[i] === "(" || newarray[i] === ")") {
      delete newarray[i];
    }
  }
  return newarray.join("");
};
console.log(removeBracket("(a + b ) + c"));
