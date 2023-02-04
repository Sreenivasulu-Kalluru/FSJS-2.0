// -------------------------------------------------------------------------------------------

// Project 1

// task 1
let element1 = document.createElement('li');
element1.innerHTML = '<a>Hire me</a>';
let parent = document.querySelector('header nav ul');
parent.appendChild(element1);

//Hiding Social Media Icons
const socialMediaIcons = document.getElementsByTagName('ul')[1];
socialMediaIcons.style.display = 'none';

// task 2
document.querySelector('header nav div input').placeholder =
  'Search My Project';

// task 3
parent.removeChild(element1);

// task 4
let avtar = document.querySelector('section div img');
avtar.src =
  'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg';

// task 5
let newBtn = document.createElement('button');
newBtn.innerText = 'Support Me';
let parantBtn = document.querySelector('section div div');
parantBtn.appendChild(newBtn);

// --------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------
