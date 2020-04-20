let array = [];
const amstrongRange = (arr) => {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    while (max > 0) {
      let rem = max % 10;
      sum = sum + rem * rem * rem;
      max = Math.floor(max / 10);
    }
    if (sum === max) {
      array.push(max);
    }
  }
  return array;
};
console.log(amstrongRange([1, 200]));
