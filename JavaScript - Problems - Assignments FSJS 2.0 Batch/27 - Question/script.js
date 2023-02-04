// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function printPrimes(start, end) {
  for (let i = start; i <= end; i++) {
    let isPrime = true;
    if (i === 0 || i === 1) {
      isPrime = false;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

console.log(printPrimes(0, 100));
