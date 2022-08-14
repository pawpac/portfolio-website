const starField = document.getElementById('star-field');

for (let i = 0; i < 10; i += 1) {
  let starRow = document.createElement('div');
  // star.textContent = ".";
  starRow.classList.add('star-row');
  starField.appendChild(starRow);
}

const starRows = document.querySelectorAll('.star-row');

starRows.forEach((row) => {
  for (let i = 0; i < 10; i += 1) {
    let star = document.createElement('div');
    star.textContent = "*";
    star.classList.add('star');
    row.appendChild(star);
  }
})

