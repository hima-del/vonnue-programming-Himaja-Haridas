const fibonacciSeries = (n) => {
  let a = 0,
    b = 1,
    f = 1;
  arr = [];
  for (let i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
    arr.push(b);
  }
  return arr;
};
console.log(fibonacciSeries(50));
