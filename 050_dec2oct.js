const decToOctal = (number) => {
  let result = [];
  for (let i = number; i > 0; i = parseInt(i / 8)) {
    result.push(i % 8);
  }
  return result.reverse().join("");
};
console.log(decToOctal(17));
