const binaryToDecimal = (str) => {
  const binary = String(str);
  let result = 0;
  for (let i = 0; i < binary.length; i++) {
    result += Number(binary[i]) * Math.pow(2, binary.length - 1 - i);
  }
  return result;
};
console.log(binaryToDecimal(10));
