// Task 1
// Changing header logo
let logoHeader = document.querySelector('.logo');
logoHeader.src = './assets/ineuron-logo.png';

// Chaging app-price from $4 to $10
let appPrice = document.querySelector('.app_price span');
appPrice.innerText = '$10';

// Adding linkedIn Social Icon
let socialLinkedIn = document.createElement('div');
socialLinkedIn.classList.add('footer_social_ico');
socialLinkedIn.innerHTML = '<i class="fa-brands fa-linkedin"></i>';

let socialParent = document.querySelector('.footer_social');
socialParent.appendChild(socialLinkedIn);
