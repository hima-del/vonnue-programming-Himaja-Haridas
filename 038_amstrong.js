const amstrongCheck = (number) => {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    let rem = temp % 10;
    sum = sum + rem * rem * rem;
    temp = Math.floor(temp / 10);
  }
  if (number === sum) {
    console.log("the number is amstrong");
  } else {
    console.log("number is not amstrong");
  }
};
console.log(amstrongCheck(153));
