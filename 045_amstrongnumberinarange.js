let array = [];
const amstrongRange = (arr) => {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  for (let i = min; i <= max; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
      let rem = num % 10;
      sum = sum + rem * rem * rem;
      num = Math.floor(num / 10);
    }
    if (sum === i) {
      array.push(i);
    }
  }
  return array;
};
console.log(amstrongRange([1, 500]));
