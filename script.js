const starField = document.getElementById('star-field');
const elementForListener = document.querySelector('body');
const aboutSpan = document.getElementById('about-span');
const aboutA = document.getElementById('about-a');
const workSpan = document.getElementById('work-span');
const workA = document.getElementById('work-a');
const contactSpan = document.getElementById('contact-span');
const contactA = document.getElementById('contact-a');

for (let i = 0; i < 30; i += 1) {
  let starRow = document.createElement('div');
  starRow.classList.add('star-row');
  starField.appendChild(starRow);
}

const starRows = document.querySelectorAll('.star-row');

starRows.forEach((row) => {
  for (let i = 0; i < 30; i += 1) {
    let star = document.createElement('div');
    star.textContent = generateRandomNum();
    star.classList.add('star');
    row.appendChild(star);
  }
})



elementForListener.addEventListener('mouseover', (e) => {
 if (e.target.classList.contains('star')) {
    e.target.classList.add('bright');
  }
})

flipNavbarBtn(aboutA, aboutSpan, 'account_circle', 'About');
flipNavbarBtn(workA, workSpan, 'code', 'Work');
flipNavbarBtn(contactA, contactSpan, 'alternate_email', 'Contact');

// aboutA.addEventListener('mouseover', () => {
//   aboutA.textContent = 'account_circle';
//   aboutSpan.classList.add('material-symbols-outlined');
// })

// aboutA.addEventListener('mouseout', () => {
//   aboutA.textContent = 'About';
//   aboutSpan.classList.remove('material-symbols-outlined');
// })

function flipNavbarBtn(pointerA, pointerSpan, txtCont, originalTxt) {

  pointerA.addEventListener('mouseover', () => {
    pointerA.textContent = txtCont;
    pointerSpan.classList.add('material-symbols-outlined');
  })
  
  pointerA.addEventListener('mouseout', () => {
    pointerA.textContent = originalTxt;
    pointerSpan.classList.remove('material-symbols-outlined');
  })
}

function generateRandomNum() {
  let num =  Math.random();
  if (num > .5) {
    num = 1;
  } else {
    num = 0;
  }
  return num;
}







