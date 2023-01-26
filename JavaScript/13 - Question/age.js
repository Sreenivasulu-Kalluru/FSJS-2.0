// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const enteredAge = parseInt(prompt('Enter your age:'));
if (enteredAge >= 18) {
  alert('You are old enough to drive');
} else {
  alert(`Please wait for another ${18 - enteredAge} years to start driving`);
}

console.log(enteredAge);
