const reverseList = (input) => {
  let reverse = [];
  for (let i = input.length - 1; i >= 0; i--) {
    reverse.push(input[i]);
  }
  return reverse;
};
let array = [1, 4, 6, 7, 8, 9];
console.log(reverseList(array));
