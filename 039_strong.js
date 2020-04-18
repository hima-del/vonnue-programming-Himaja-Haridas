const strongCheck = (number) => {
  let temp = number;
  let sum = 0;
  let fact = 1;
  let i = 1;
  while (temp) {
    let rem = temp % 10;
    while (i <= rem) {
      fact *= i;
      i++;
    }
    sum += fact;
    temp = Math.floor(temp / 10);
    if (number === sum) {
      return "strong number";
    } else {
      return "not a strong number";
    }
  }
};
console.log(strongCheck(153));
console.log(strongCheck(145));
