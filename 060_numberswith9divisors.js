const noOfDivisor = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count += 1;
    }
  }
  return count;
};

const countNumber = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (noOfDivisor(i) === 9) {
      count += 1;
    }
  }
  return count;
};
console.log(countNumber(1000));
