let array = [1, 3, 8, 12, 17, 26, 37, 44, 50];
const checkElementInList = (element) => {
  let flag = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      flag = 1;
    }
  }
  if (flag === 1) {
    console.log("element present");
  } else {
    console.log("element absent");
  }
};
console.log(checkElementInList(12));
