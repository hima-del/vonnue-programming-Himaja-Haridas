const factorial = (number) => {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
};
console.log(factorial(5));
