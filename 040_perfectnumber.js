const perfectNumber = (number) => {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum === number) {
    console.log("perfect number");
  } else {
    console.log("not perfect number");
  }
};
console.log(perfectNumber(145));
console.log(perfectNumber(28));
