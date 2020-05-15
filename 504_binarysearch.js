const binarySearch = (value, arr) => {
  let found = false;
  let first = 0;
  let last = arr.length - 1;
  let position = -1;
  let middle;
  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] === value) {
      found = true;
      position = middle;
    } else if (arr[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
};

let arr = [5, 4, 3, 6, 1, 7];
console.log(binarySearch(0, arr));
console.log(binarySearch(7, arr));
