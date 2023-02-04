# Project 5

## Original Output Image

![Original Ouptput Image](./original%20output%20image.png)

## Task 1: Achieve the following Output using JavaScript DOM Manipulation

![Task 1 Image](./Output/DOM%20P2%20SS.png)

## JavaScript Code:

```js
// Adding a new Pro Subscription Button
let newBtn = document.createElement('a');
newBtn.href = 'index.html';
newBtn.classList.add('btn');
newBtn.innerHTML = 'Pro Subscription';

let btnParent = document.querySelector('.nav-center div:last-child ');
btnParent.appendChild(newBtn);

// Changing recipe-text from black to #551a8b
let recipeText = document.querySelectorAll('.recipe-text');

recipeText.forEach((recipeText) => {
  recipeText.style.color = '#551a8b';
});

// Adding a new Card at the end i.e, 6th card
let newCard = document.createElement('div');
newCard.classList.add('card');
newCard.innerHTML = 'Card 6';

let cardParent = document.querySelector('.recipe-gallery');
cardParent.appendChild(newCard);
```
