## Task 1

```js
accordian.forEach((h3) => {
  h3.style.backgroundColor = '#dadaf8';
});
```

## Task 2

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
