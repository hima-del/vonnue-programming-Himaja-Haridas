const reverseNumber = (number) => {
  let rev = 0;
  while (number > 0) {
    let rem = number % 10;
    rev = rev * 10 + rem;
    number = Math.floor(number / 10);
  }
  return rev;
};
console.log(reverseNumber(123));
