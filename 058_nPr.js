const findFactorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

const findnPr = (n, r) => {
  let numerator = findFactorial(n);
  let denominator = findFactorial(n - r);
  let p = Math.floor(numerator / denominator);
  return p;
};
console.log(findnPr(5, 3));
