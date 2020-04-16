const lcm = (number1, number2) => {
  let gcd = gcd(number1, number2);
  return (number1 * number2) / gcd;
};
console.log(lcm(5, 7));
