const constelation = document.getElementById('constelations');

for (let i = 0; i < 50; i += 1) {
  let starsRow = document.createElement('div');
  starsRow.classList.add('stars-row');
  constelation.appendChild(starsRow);
}

const starsRows = document.querySelectorAll('.stars-row');

starsRows.forEach((cell) => {
  for (let i = 0; i < parseFloat(randomNum() * 100); i += 1) {
    let speck = document.createElement('div');
    speck.textContent = '.';
    speck.classList.add('speck');
    speck.style.fontSize = (parseFloat(randomNum()) * 2) + 'rem';
    speck.style.padding = parseFloat(randomNum() * 30) + 'px';
    speck.style.animation = 'starLife ' + (parseFloat(randomNum()) * 10) + 's infinite linear';
    cell.appendChild(speck);
  }
})

function randomNum() {
  let num =  Math.random();
  return num;
}
