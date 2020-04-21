const binTodec = (str) => {
  const binary = String(str);
  let dec = 0;
  for (let i = 0; i < binary.length; i++) {
    dec += Number(binary[i]) * Math.pow(2, binary.length - 1 - i);
  }
  return dec;
};

const decToOctal = (dec) => {
  let oct = [];
  for (let i = dec; i > 0; i = parseInt(i / 8)) {
    oct.push(i % 8);
  }
  return oct.reverse().join("");
};

const binToOctal = (number) => {
  const decimal = binTodec(number);
  const octal = decToOctal(decimal);
  return octal ;
};
console.log(binToOctal(100));
