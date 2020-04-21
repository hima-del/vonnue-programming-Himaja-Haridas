const decToBinary = (number) => {
  let binary = "";
  while (number > 0) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }
  return binary;
};
console.log(decToBinary(2));
