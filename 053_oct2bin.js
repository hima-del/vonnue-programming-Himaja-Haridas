const octToDec = (str) => {
  const octal = String(str);
  let dec = 0;
  for (let i = 0; i < octal.length; i++) {
    dec += Number(octal[i]) * Math.pow(8, octal.length - 1 - i);
  }
  return dec;
};

const decToBinary = (dec) => {
  let binary = "";
  while (dec > 0) {
    binary = (dec % 2) + binary;
    dec = Math.floor(dec / 2);
  }
  return binary;
};

const octToBinary = (number) => {
  const decimal = octToDec(number);
  const bin = decToBinary(decimal);
  return bin;
};
console.log(octToBinary(4));
