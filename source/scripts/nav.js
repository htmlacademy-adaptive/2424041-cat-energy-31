const nav = document.querySelector('.nav');
const navBurger = document.querySelector('.nav__burger');

nav.classList.remove('nav--no-js');

function navOpener() {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
    navBurger.classList.add('nav__burger--active');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
    navBurger.classList.remove('nav__burger--active');
  }
}

navBurger.addEventListener('click', navOpener);
