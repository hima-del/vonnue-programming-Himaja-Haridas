const lcm = (number1, number2) => {
  for (let i = 1; i <= number1 * number2; i++) {
    if (i % number1 === 0 && i % number2 === 0) {
      return i;
    }
  }
};
console.log(lcm(5, 7));
