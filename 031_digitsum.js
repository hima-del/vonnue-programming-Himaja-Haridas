let sum = 0;
const digitSum = (number) => {
  while (number > 0) {
    sum += (number % 10);
    number = Math.floor(number / 10);
    return sum;
  }
};
console.log(digitSum(123));
