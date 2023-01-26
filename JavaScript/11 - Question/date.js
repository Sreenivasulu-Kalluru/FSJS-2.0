/* 11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const currentDate = new Date();
console.log(currentDate);

// Current Year
let currentYear = currentDate.getFullYear();
console.log(currentYear);

// Current Month
let currentMonth = currentDate.getMonth() + 1;
console.log(currentMonth);

// Today Date
let todayDate = currentDate.getDate();
console.log(todayDate);

// Toddy Day
let todayDay = currentDate.getDay() + 1;
console.log(todayDay);

// Current Hours
let currentHour = currentDate.getHours();
console.log(currentHour);

// Current Minute
let currentMinute = currentDate.getMinutes();
console.log(currentMinute);

// To find Elapsed seconds since January 1, 1970
let prevTime = new Date(1970, 01, 01); // 1970 January 01
let thisTime = new Date(); // now
let elapsedTime = thisTime.getTime() - prevTime.getTime();
console.log(elapsedTime / 1000);
