let array = [];
const factorsOfNumber = (number) => {
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      array.push(i);
    }
  }
  return array;
};
console.log(factorsOfNumber(100));
