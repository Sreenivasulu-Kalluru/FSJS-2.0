/*16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */

let enteredMonth = prompt('Enter a month');

switch (enteredMonth) {
  case 'December':
  case 'January':
  case 'February':
    alert('Season is Winter');
    break;

  case 'September':
  case 'October':
  case 'November':
    alert('Season is Autumn');
    break;

  case 'March':
  case 'April':
  case 'May':
    alert('Season is Spring');
    break;

  case 'June':
  case 'July':
  case 'August':
    alert('Season is Summer');
    break;

  default:
    alert('Please check entered month again!');
    break;
}
