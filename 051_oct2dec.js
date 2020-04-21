const octToDec = (str) => {
  const octal = String(str);
  let result = 0;
  for (let i = 0; i < octal.length; i++) {
    result += Number(octal[i]) * Math.pow(8, octal.length - 1 - i);
  }
  return result;
};
console.log(octToDec(20));
