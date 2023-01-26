//17. Write a program which tells the number of days in a month

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February

// Here January is 1 based
//Day 0 is the last day in the previous month

let getDaysInMonth = function (year, month) {
  return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
};

// January 2017
console.log(getDaysInMonth(2017, 1));

// April 2023
console.log(getDaysInMonth(2023, 4));

// February 2022
console.log(getDaysInMonth(2022, 2));
