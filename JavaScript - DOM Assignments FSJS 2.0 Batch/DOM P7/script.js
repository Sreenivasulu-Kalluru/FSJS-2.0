// Task 1
const languages = document.querySelectorAll('.main__languages a');

languages.forEach((language) => {
  if (language.innerText.includes('2.0')) {
    let storedValues = language;
    console.log(storedValues);
    storedValues.style.display = 'none';
  }
});

// Task 2
let targetPlaceholder = document.querySelector('input.main__form-input');
console.log(targetPlaceholder);
targetPlaceholder.placeholder = 'iNeuron';

//first need target form tag
let form = document.querySelector('form');
// enable input take the value
let input = document.querySelector('input');
input.removeAttribute('disabled');
// enable button for submitting the form
let submitButton = document.querySelector('button.main__form-btn');
submitButton.removeAttribute('disabled');
// add event listener for submit button
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // add value into input tag
  let inputValue = input.value;
  console.log(inputValue);
  // for pushing input value we target the left language section
  let languageSection = document.querySelector('.main__languages');
  //create anchor tag inside language div
  let createAnchorTag = document.createElement('a');
  // create href attribute for anchor tag
  let createAttribute = document.createAttribute('href');
  // pass the value inside href attribute
  createAttribute.value = 'https://www.ineuron.ai';
  // set the href attribute inside the anchor tag
  createAnchorTag.setAttributeNode(createAttribute);
  // we put value inside anchor tag which get from form input tag
  createAnchorTag.innerText = inputValue;
  // for showing the form value inside left section language we append the and anchor tag inside language div.
  languageSection.appendChild(createAnchorTag);
});
