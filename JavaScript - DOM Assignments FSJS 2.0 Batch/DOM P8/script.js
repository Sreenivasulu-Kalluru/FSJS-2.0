// task 1

let newH2 = document.createElement('h2');
newH2.classList.add('new-head');
newH2.innerHTML = 'Custom Heading';
console.log(newH2);

let newPara = document.createElement('p');
newPara.classList.add('new-p');
newPara.innerHTML =
  'This is a custom paragraph added by me! Although its a sample paragraph';

let newHr = document.createElement('hr');

let asideEl = document.querySelector('aside');
asideEl.style.overflowY = 'scroll';
let asideParent = document.querySelector('aside p:nth-child(3');

asideEl.appendChild(newHr);
asideEl.appendChild(newH2);
asideEl.appendChild(newPara);

// task 2

// task 3
let btnToggle = document.querySelector('.navbar-toggler');

let navBar = document.querySelector('#navbarTogglerDemo01');

btnToggle.addEventListener('click', function () {
  navBar.style.display = 'block';
});
