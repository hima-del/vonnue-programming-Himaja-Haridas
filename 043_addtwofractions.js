const lcm = (number1, number2) => {
  for (let i = 1; i <= number1 * number2; i++) {
    if (i % number1 === 0 && i % number2 === 0) {
      return i;
    }
  }
};

const gcd = (number1, number2) => {
  let min = Math.min(number1, number2);
  for (let i = min; i > 0; i--) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
};

addTwoFraction = (numerator1, denominator1, numerator2, denominator2) => {
  let denominator = lcm(denominator1, denominator2);

  let [factor1, factor2] = [
    denominator / denominator1,
    denominator / denominator2,
  ];
  numerator1 = numerator1 * factor1;
  numerator2 = numerator2 * factor2;
  let numerator = numerator1 + numerator2;
  let gcdOfFraction = gcd(numerator, denominator);
  numerator = numerator / gcdOfFraction;
  denominator = denominator / gcdOfFraction;
  return [numerator, denominator];
};
console.log(addTwoFraction(5, 7, 4, 21));
