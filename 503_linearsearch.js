const linearSearch = (value, arr) => {
  let i = 0;
  let position = -1;
  let found = false;
  while (!found && i < arr.length) {
    if (arr[i] === value) {
      found = true;
      position = i;
    } else {
      i++;
    }
  }
  return position;
};

let arr = [5, 4, 6, 8, 9];
console.log(linearSearch(0, arr));
console.log(linearSearch(5,arr))
