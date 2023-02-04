# Project 6

## Original Output Image

![Original Output Image](./original%20output%20image.png)

## Task 1: Achieve the following Output using JavaScript DOM Manipulation

![Task 1 Image](./Output/DOM%20P3%20SS-1.png)

## JavaScript Code:

```js
// Change header logo
let logoHeader = document.querySelector('.logo');
logoHeader.src = './assets/ineuron-logo.png';
```

---

## Task 2: Achieve the following Output using JavaScript DOM Manipulation

![Task 2 Image](./Output/DOM%20P3%20SS-2.png)

## JavaScript Code:

```js
// Change app-price from $4 to $10
let appPrice = document.querySelector('.app_price span');
appPrice.innerText = '$10';

// Add linkedIn Social Icon
let socialLinkedIn = document.createElement('div');
socialLinkedIn.classList.add('footer_social_ico');
socialLinkedIn.innerHTML = '<i class="fa-brands fa-linkedin"></i>';

let socialParent = document.querySelector('.footer_social');
socialParent.appendChild(socialLinkedIn);
```
