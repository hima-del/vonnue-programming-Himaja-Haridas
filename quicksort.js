const quickSort = (originalArray) => {
  if (originalArray.length <= 1) {
    return originalArray;
  } else {
    let newArray = [];
    let left = [];
    let right = [];
    let originalArray = [];
    let pivot = originalArray.pop();
    let length = originalArray.length;
    for (let i = 0; i < length; i++) {
      if (originalArray[i] <= pivot) {
        left.push(originalArray[i]);
      } else {
        right.push(originalArray[i]);
      }
    }
  }
  return newArray.concat(quickSort(left), pivot, quickSort(right));
};
let myArray = [12, 45, 13, 1, 16, 56, 51, 4];
console.log(quickSort(myArray));
