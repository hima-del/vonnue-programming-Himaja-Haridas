const countThree = (number) => {
  let count = 0;
  while (number > 0) {
    if (number % 10 === 3) {
      count++;
    }
    number = Math.floor(number / 10);
  }
  return count;
};

const countOf3InRange = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += countThree(i);
  }
  return count;
};
console.log(countOf3InRange(100));