const greatestOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
console.log(greatestOfThree(1, 2, 3));
