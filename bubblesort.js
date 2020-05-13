const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const bubbleSort = (arr) => {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
let myArray = [3, 0, 2, 5, -1, 4, 1];
console.log(bubbleSort(myArray));
