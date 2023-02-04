let accordian = document.querySelectorAll('.accordian h3');

accordian.forEach((element) => {
  element.addEventListener('click', () => {
    let para = element.nextElementSibling;
    if (para.style.display === 'block') {
      para.style.display = 'none';
    } else {
      para.style.display = 'block';
    }
  });
});

// task 1
accordian.forEach((h3) => {
  h3.style.backgroundColor = '#dadaf8';
});

// task 2
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
  let elementHeading = accordian[i];
  elementHeading.style.backgroundColor = '#dadaf8';
}

let headingColor = newAccordian.getElementsByTagName('h3');
headingColor[0].style.backgroundColor = '#dadaf8';

// let newPara = document.createElement('p');
// newPara.innerText =
//   'I passes a very good command over Full Stack Development technologies like MERN which can seen in my work over the GitHub';
// newAccordian.appendChild(newPara);

// wrapperAccordian.appendChild(newAccordian);

// ----------------------------------------------------------------------------------------------------------------

// ('use strict');
// let ulList = document.querySelector('ul');
// console.log(ulList);
// let listInside = ulList.getElementsByTagName('li');
// console.log(listInside);
// listInside[2].textContent = 'Projects';

// let main = document.querySelector('.accordian-wrapper');
// let divAdded = document.createElement('div');
// divAdded.classList.add('accordian');
// // divAdded.getElementsByTagName('h3').style.backgroundColor = "#dadaf8"
// divAdded.innerHTML = `<h3>Skills</h3><p>I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the github.</p>`;
// main.appendChild(divAdded);

// divAdded.addEventListener('click', function () {
//   let para = divAdded.getElementsByTagName('p');
//   if (para[0].style.display === 'block') {
//     para[0].style.display = 'none';
//   } else {
//     para[0].style.display = 'block';
//   }
// });

// // color change
// for (let i = 0; i < accordian.length; i++) {
//   let elementHeading = accordian[i];
//   elementHeading.style.backgroundColor = '#dadaf8';
// }

// let headingColor = divAdded.getElementsByTagName('h3');
// headingColor[0].style.backgroundColor = '#dadaf8';
