let array = [];
const primeInRange = (arr) => {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  for (let i = min; i <= max; i++) {
    if (max % i !== 0) {
      array.push(i);
    }
  }

  return array;
};

console.log(primeInRange([10, 90]));
