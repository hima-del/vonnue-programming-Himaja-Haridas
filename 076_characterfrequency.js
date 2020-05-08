const characterFrequency = (str) => {
  let count = 0;
  let newArray = str.split("");
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "a") count++;
  }
  return count;
};
console.log(characterFrequency("aeroplane"));
console.log(characterFrequency("river"));
