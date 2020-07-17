const countSumOfNumbers = (str) => {
  let sum = 0;
  let newArray = str.split("");
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    let exp = /^[0-9]*$/;
    let val = newArray[i];
    if (val.match(exp)) {
      sum += parseInt(newArray[i]);
    }
  }
  return sum;
};
console.log(countSumOfNumbers("alpha123"));
