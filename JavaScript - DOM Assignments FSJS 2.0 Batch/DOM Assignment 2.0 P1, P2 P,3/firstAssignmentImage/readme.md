# Task 1

```js
let listEl = document.querySelector('ul');
listEl.innerHTML = `<li><a href="./index.html">Home</a></li>
<li> <a href="./about/about.html">About</a> </li>
<li><a href="./contact/contact.html">Projects</a></li>
<li><a href="./contact/contact.html">Hire Me</a></li>`;

let list2 = document.querySelectorAll('ul');
list2[1].innerHTML = '';
```

# Task 2

```js
let list = document.querySelector('ul');
list.innerHTML = `<li><a href="./index.html">Home</a></li>
 <li> <a href="./about/about.html">About</a> </li>
<li><a href="./contact/contact.html">Projects</a></li>`;

let list2 = document.querySelectorAll('ul');
list2[1].innerHTML = '';

let input = document.querySelector('.search-field');
input.innerHTML = ` <input type="text" placeholder="Search My Projects" />
<button>Search</button>`;
```

# Task 3

```js
let list = document.querySelector('ul');
let listInside = list.getElementsByTagName('li');
console.log(listInside);
listInside[2].innerText = 'Projects';

let section = document.querySelector('.hero-left-section');
let para1 = section.getElementsByTagName('p');
let spanAll = para1[0].getElementsByTagName('span');
spanAll[1].innerText = 'an employee';
spanAll[2].innerText = 'iNeuron Intelligence Pvt Ltd';
```

# Task 4

```js
let list = document.querySelector('ul');
let listItem = list.getElementsByTagName('li');
listItem[2].innerText = 'Projects';
let heroSection = document.querySelector('.hero-right-section');
let image = heroSection.getElementsByTagName('img');
image[0].src =
  'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg';
```

# Task 5

```js
let newBtn = document.createElement('button');
newBtn.innerText = 'Support Me';
let parantBtn = document.querySelector('section div div');
parantBtn.appendChild(newBtn);
let list = document.querySelector('ul');
let listInsiede = list.getElementsByTagName('li');
listInsiede[2].innerText = 'Projects';
```
