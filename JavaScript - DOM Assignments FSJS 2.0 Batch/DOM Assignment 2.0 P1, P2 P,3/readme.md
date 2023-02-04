# Project 1

## Original Output Image

![Original Image](./firstAssignmentImage/output%20-%20original.png)

## Task 1: Achieve the following Output using JavaScript DOM Manipulation

![Task 1 Output Image](./firstAssignmentImage/task1Output.png)

## JavaScript Code:

```js
let listEl = document.querySelector('ul');
listEl.innerHTML = `<li><a href="./index.html">Home</a></li>
<li> <a href="./about/about.html">About</a> </li>
<li><a href="./contact/contact.html">Projects</a></li>
<li><a href="./contact/contact.html">Hire Me</a></li>`;

let list2 = document.querySelectorAll('ul');
list2[1].innerHTML = '';

//Hiding Social Media Icons
let socialMediaIcons = document.getElementsByTagName('ul')[1];
socialMediaIcons.style.display = 'none';
```

## Task 2: Achieve the following Output using JavaScript DOM Manipulation

![Task 2 Output Image](./firstAssignmentImage/task2Output.png)

## JavaScript Code:

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

## Task 3: Achieve the following Output using JavaScript DOM Manipulation

![Task 3 Output Image](./firstAssignmentImage/task3Output.png)

## JavaScript Code:

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

## Task 4: Achieve the following Output using JavaScript DOM Manipulation

![Task 4 Output Image](./firstAssignmentImage/task4Output.png)

## JavaScript Code:

```js
let list = document.querySelector('ul');
let listItem = list.getElementsByTagName('li');
listItem[2].innerText = 'Projects';
let heroSection = document.querySelector('.hero-right-section');
let image = heroSection.getElementsByTagName('img');
image[0].src =
  'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg';
```

## Task 5: Achieve the following Output using JavaScript DOM Manipulation

![Task 5 Output Image](./firstAssignmentImage/task5Output.png)

## JavaScript Code:

```js
let newBtn = document.createElement('button');
newBtn.innerText = 'Support Me';
let parantBtn = document.querySelector('section div div');
parantBtn.appendChild(newBtn);
let list = document.querySelector('ul');
let listInsiede = list.getElementsByTagName('li');
listInsiede[2].innerText = 'Projects';
```

---

---

# Project 2

## Original Image

![Original Image](./secondAssignmentImage/original%20output%20image.png)

## Task 1: Achieve the following Output using JavaScript DOM Manipulation

![Task 1 Output Image](./secondAssignmentImage/task1Output.png)

## JavaScript Code:

```js
accordian.forEach((h3) => {
  h3.style.backgroundColor = '#dadaf8';
});
```

## Task 2: Achieve the following Output using JavaScript DOM Manipulation

![Task 2 Output Image](./secondAssignmentImage/task2Output.png)

## JavaScript Code:

```js
let wrapperAccordian = document.querySelector('.accordian-wrapper');

let newAccordian = document.createElement('div');

newAccordian.classList.add('accordian');

newAccordian.innerHTML = `<h3>Skills</h3><p>I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the github.</p>`;
wrapperAccordian.appendChild(newAccordian);

newAccordian.addEventListener('click', function () {
  let para = newAccordian.getElementsByTagName('p');
  if (para[0].style.display === 'block') {
    para[0].style.display = 'none';
  } else {
    para[0].style.display = 'block';
  }
});

for (let i = 0; i < accordian.length; i++) {
  let headingAcc = accordian[i];
  headingAcc.style.backgroundColor = '#dadaf8';
}

let headingColor = newAccordian.getElementsByTagName('h3');
headingColor[0].style.backgroundColor = '#dadaf8';
```

---

---

# Project 3

## Original Image

![Original Image](./thirdAssignmentImage/original%20output%20image.png)

## Task 1: Achieve the following Output using JavaScript DOM Manipulation

![Task 1 Output Image](./thirdAssignmentImage/task1Output.png)

`## JavaScript Code:`

```js
let formLeft = document.querySelector('.mainLeftDetails');
formLeft[0].value = 'FSJS 2.0';
formLeft[1].value = 'fsjs@ineuron.ai';
formLeft[2].value = 'Hello World';

let formRight = document.querySelector('.mainRight');
let headingRight = formRight.firstElementChild;
let inputRight = headingRight.nextElementSibling;
inputRight[0].value = 'FSJS 2.0';
inputRight[1].value = 'fsjs@ineuron.ai';
inputRight[2].value = 'Hello World';
```
