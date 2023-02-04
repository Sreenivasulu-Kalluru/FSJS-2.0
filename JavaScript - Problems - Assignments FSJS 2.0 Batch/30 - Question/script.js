// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

// program for a simple calculator
let result;

// take the operand input
const number1 = 8;
const number2 = 4;
const operator = '/';

switch (operator) {
  case '+':
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

  case '-':
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

  case '*':
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

  case '/':
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log('Invalid operator');
    break;
}
