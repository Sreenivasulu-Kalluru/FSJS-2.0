# Project 8

## Original Output Image

![Original Output Image](./original%20output%20image.png)

![Task 1 Image](./ass8.1-before.png)

## Task 1: Achieve the following Output using JavaScript DOM Manipulation

![Task 1 Image](./ass8.1-after.png)

## JavaScript Code:

```js
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
```

---

![Task 2 Image](./ass8.2-before.png)

## Task2: Achieve the following Output using JavaScript DOM Manipulation

![Task 2 Image](./ass8.2-after.png)

## JavaScript Code:

```js
// I didn't able find any differences between the two images here, So i'm going to leave it as it is atleat for now😉. If I would be able to find the differencec in futiure, then I will update the code here😀
```

---

![Task 3 Image](./ass8.3-before.png)

## Task3: Achieve the following Output using JavaScript DOM Manipulation

![Task 3 Image](./ass8.3-after.png)

## JavaScript Code:

```js
let btnToggle = document.querySelector('.navbar-toggler');

let navBar = document.querySelector('#navbarTogglerDemo01');

btnToggle.addEventListener('click', function () {
  navBar.style.display = 'block';
});
```
