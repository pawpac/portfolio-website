const starField = document.getElementById('star-field');
const elementForListener = document.querySelector('body');

for (let i = 0; i < 30; i += 1) {
  let starRow = document.createElement('div');
  // star.textContent = ".";
  starRow.classList.add('star-row');
  starField.appendChild(starRow);
}

const starRows = document.querySelectorAll('.star-row');

starRows.forEach((row) => {
  for (let i = 0; i < 30; i += 1) {
    let star = document.createElement('div');
    star.textContent = generateRandomNum();
    star.classList.add('star');
    // star.style.padding = generateRandomNum();
    row.appendChild(star);
  }
})

elementForListener.addEventListener('mouseover', (e) => {
 if (e.target.classList.contains('star')) {
    e.target.classList.add('bright');
 }
})

function generateRandomNum() {
  let num =  Math.random();
  if (num > .5) {
    num = 1;
  } else {
    num = 0;
  }
  return num;
}





