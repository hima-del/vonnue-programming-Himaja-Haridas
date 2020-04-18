const gcd = (number1, number2) => {
  let min = Math.min(number1, number2);
  for (let i = min; i > 0; i--) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
};
console.log(gcd(100, 80));
