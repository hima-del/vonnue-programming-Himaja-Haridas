let array = [];
let arr = [];
const primeInRange = (n) => {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  for (let i = min; i <= max; i++) {
    if (n % i == 0) {
      array.push(x);
    }
  }

  return array;
};
console.log(primeInRange(10));
