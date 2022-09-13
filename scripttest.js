const starField = document.getElementById('star-field');
const elementForListener = document.querySelector('body');
const aboutSpan = document.getElementById('about-span');
const aboutA = document.getElementById('about-a');
const workSpan = document.getElementById('work-span');
const workA = document.getElementById('work-a');
const contactSpan = document.getElementById('contact-span');
const contactA = document.getElementById('contact-a');
const satAbout = document.getElementById('sat-about');
const satWork = document.getElementById('sat-work');
const satContact = document.getElementById('sat-contact');
const settingBtn = document.getElementById('setting');
const settingMenu = document.getElementById('setting-menu');

// const landingPageFlash = document.getElementById('landing-page');
// const flashOnLandingPage = document.getElementById('fire-flash-landing');

// const rpsPageFlash = document.getElementById('rps-page');
// const flashOnRpsPage = document.getElementById('fire-flash-rps');

// const libraryPageFlash = document.getElementById('library-page');
// const flashOnLibraryPage = document.getElementById('fire-flash-library');

// const recipesPageFlash = document.getElementById('recipes-page');
// const flashOnRecipesPage = document.getElementById('fire-flash-recipes');

const introPage = document.querySelector('.intro-page');
const aboutPage = document.querySelector('.about-page');
const workPage = document.querySelector('.work-page');
const contactPage = document.querySelector('.contact-page');

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

// flashSwipe(landingPageFlash, flashOnLandingPage);
// flashSwipe(rpsPageFlash, flashOnRpsPage);
// flashSwipe(libraryPageFlash, flashOnLibraryPage);
// flashSwipe(recipesPageFlash, flashOnRecipesPage);

// landingPageFlash.addEventListener('mouseover', () => {
//   flashOnLandingPage.classList.add('flash');
// })

// landingPageFlash.addEventListener('mouseout', () => {
//   setTimeout(removeFlash, 500);
// })



elementForListener.addEventListener('mouseover', (e) => {
 if (e.target.classList.contains('star')) {
    e.target.classList.add('bright');
  }
})

flipNavbarBtn(aboutA, aboutSpan, 'account_circle', 'About');
flipNavbarBtn(workA, workSpan, 'code', 'Work');
flipNavbarBtn(contactA, contactSpan, 'alternate_email', 'Contact');

// aboutA.addEventListener('click', () => {
//   hideAllExcept(aboutPage);
// });

// workA.addEventListener('click', () => {
//   hideAllExcept(workPage);
// });

// contactA.addEventListener('click', () => {
//   hideAllExcept(contactPage);
// });

// satAbout.addEventListener('click', () => {
//   hideAllExcept(aboutPage);
// });

// satWork.addEventListener('click', () => {
//   hideAllExcept(workPage);
// });

// satContact.addEventListener('click', () => {
//   hideAllExcept(contactPage);
// });

settingBtn.addEventListener('click', () => {
  if (settingMenu.classList.contains('hide')) {
  settingMenu.classList.remove('hide');
  } else {
    settingMenu.classList.add('hide');
  }
})

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('stay-up')) {
    settingMenu.classList.add('hide');
  }
})


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


// function hideAllExcept(omit) {
//   introPage.classList.add('hide');
//   aboutPage.classList.add('hide');
//   workPage.classList.add('hide');
//   contactPage.classList.add('hide');

//   omit.classList.remove('hide');
// }

// function flashSwipe(pageFlash, flashOnPage) {
//   pageFlash.addEventListener('mouseover', () => {
//     flashOnPage.classList.add('flash');
//   })
  
//   pageFlash.addEventListener('mouseout', () => {
//     setTimeout(removeFlash(flashOnPage), 500);
//   })
// }

// function removeFlash(flashOnPage) {
//   flashOnPage.classList.remove('flash');
// }

document.addEventListener('wheel', () => {
  addColor(satAbout);
  setTimeout(workColor, 100);
  setTimeout(contactColor, 200);

  setTimeout(removeAboutColor, 100);
  setTimeout(removeWorkColor, 200);
  setTimeout(removeContactColor, 300);
})

// aboutA.addEventListener('mouseover', () => {
//   addColor(satAbout);
// })

// aboutA.addEventListener('mouseout', () => {
//   removeColor(satAbout);
// })

redHover(aboutA, satAbout);
redHover(workA, satWork);
redHover(contactA, satContact);

redHover(satAbout, aboutA);
redHover(satWork, workA);
redHover(satContact, contactA);

function redHover(barBtn, satBtn) {
  barBtn.addEventListener('mouseover', () => {
    addColor(satBtn);
  })
  
  barBtn.addEventListener('mouseout', () => {
    removeColor(satBtn);
  })
}

function addColor(btn) {
  btn.classList.add('scroll');
}

function removeColor(btn) {
  btn.classList.remove('scroll');
}

function workColor() {
  satWork.classList.add('scroll')
}

function contactColor() {
  satContact.classList.add('scroll')
}

function removeAboutColor() {
  satAbout.classList.remove('scroll')
}

function removeWorkColor() {
  satWork.classList.remove('scroll')
}

function removeContactColor() {
  satContact.classList.remove('scroll')
}
