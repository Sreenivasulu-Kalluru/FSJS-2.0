// To start, set a flag to true
let isPrime = true;

const number = prompt('Enter a number Greater than 1');

// We will use a for loop to loop through numbers from 2 to the number we are testing
// We can start at 2 because all numbers are divisible by 1

for (let i = 2; i < number; i++) {
  // If the number is divisible by any other number (besides 1 and itself)
  // then it is not a prime number
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

// Finally, output the result
if (number === 1) {
  alert(`${number} is not a prime number`);
  console.log(`${number} is not a prime number`);
} else if (isPrime) {
  alert(`${number} is a prime number`);
  console.log(`${number} is a prime number`);
} else {
  alert(`${number} is not a prime number`);
  console.log(`${number} is not a prime number`);
}
