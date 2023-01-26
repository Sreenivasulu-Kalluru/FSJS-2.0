// 18. Write a program which tells the number of days in a month, now consider leap year.

// We can use the same code used in the previous example

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

// The complete list of leap years in the first half of the 21st century are 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, and 2048.

// February 2024
console.log(getDaysInMonth(2024, 2));

//  February 2020
console.log(getDaysInMonth(2020, 2));

// February 2016
console.log(getDaysInMonth(2016, 2));
