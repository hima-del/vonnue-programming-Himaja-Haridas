const countDigit = (number) => {
  let count = 0;
  while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
};
console.log(countDigit(123));
