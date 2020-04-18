let readline = require("readline-sync");
let counter = 20;
let year = parseInt(readline.question("enter the year :"));
const leapYear = (counter, year) => {
  while (counter >= 0) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year);
      year++;
      counter--;
    } else {
      year++;
    }
  }
};
console.log(leapYear(counter, year));
