const capitalizeString = (str) => {
  let newArray = str.split("");
  for (let i = 0; i < newArray.length; i++) {
    if (i === 0) {
      newArray[i] =
        newArray[i].charAt(0).toUpperCase() + newArray[i].substring(1);
    }
  }
  return newArray.join("");
};
console.log(capitalizeString("hello"));
