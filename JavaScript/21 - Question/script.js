// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ['INDIA', 'GERMANY', 'DUBAI', 'U.K', 'FRANCE'];

if (countries.includes('ETHOPIA')) {
  console.log('ETHOPIA');
} else {
  countries.push('ETHOPIA');
}
