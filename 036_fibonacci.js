const fibonacciSeries = (n) => {
  let a = 0,
    b = 1,
    f = 1;
  for (let i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
};
console.log(fibonacciSeries(50));
