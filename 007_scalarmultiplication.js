let numbers = [1, 2, 3, 4, 5];
const scalarMultiplication=(numbers)=>{
for (let i = 0; i < numbers.length; i++) {
   numbers[i] *=  2;
  return numbers[i];
}
}
console.log(scalarMultiplication(numbers));
