/* 12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
*/

const todayDate = new Date();
let year = todayDate.getFullYear();
let month = todayDate.getMonth() + 1;
let day = todayDate.getDate();
let hour = todayDate.getHours();
let minute = todayDate.getMinutes();

if (day < 10) day = '0' + day;
if (month < 10) month = '0' + month;

// YYYY-MM-DD HH:mm :ss
const formattedDate1 =
  year + '-' + month + '-' + day + ' ' + hour + ':' + minute;

console.log(formattedDate1);

// DD-MM-YYYY HH:mm : ss
const formattedDate2 =
  day + '-' + month + '-' + year + ' ' + hour + ':' + minute;

console.log(formattedDate2);

//  DD/MM/YYYY HH:mm
const formattedDate3 =
  day + '/' + month + '/' + year + ' ' + hour + ':' + minute;

console.log(formattedDate3);
