const removeSpace = (str) => {
  let newArray = str.split("");
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === " ") {
      delete newArray[i];
    }
  }
  return newArray.join("");
};
console.log(removeSpace("hello       world"));
