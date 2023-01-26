/*22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method 
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
ages.sort(function compareAges(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

// Sorted ages array
console.log(ages);

const minAge = ages[0];
console.log(minAge);
const maxAge = ages[ages.length - 1];
console.log(maxAge);

//  Find the median age(one middle item or two middle items divided by two)
const meadianAge = (ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2;
console.log(`The meadian age is ${meadianAge}`);

// Find the average age(all items divided by number of items)
let sumOfAges = 0;
ages.forEach((item) => {
  sumOfAges = sumOfAges + item;
});

const averageAge = sumOfAges / ages.length;
console.log(`The average age is: ${averageAge}`);

// Find the range of the ages(max minus min)
const ageRange = ages[ages.length - 1] - ages[0];
console.log(`The Range is ${ageRange}`);

//Compare the value of (min - average) and (max - average), use abs() method
const minMinusAverage = Math.abs(ages[0] - averageAge);
const maxMinusAverage = Math.abs(ages[ages.length - 1] - averageAge);
console.log(minMinusAverage, maxMinusAverage);

if (minMinusAverage > maxMinusAverage) {
  console.log('minMinusaverage is greater than maxMinusAverage');
} else if (minMinusAverage < maxMinusAverage) {
  console.log('minMinusaverage is less than maxMinusAverage');
} else {
  console.log('Either Both are equal or Not equal');
}
