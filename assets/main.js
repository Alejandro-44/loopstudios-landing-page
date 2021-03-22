const navToggle = document.getElementById('nav-toggle');
const burgerIcon = document.getElementById('burguer-icon');
const menu = document.querySelector('.nav__menu');
const menuLink = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', toggleMenu);
menuLink.forEach(n => n.addEventListener('click', linkAction))

function toggleMenu() {
  menu.classList.toggle('active');
  if(menu.classList.contains('active')){
    burgerIcon.setAttribute('src', './images/icon-close.svg')
  } else {
    burgerIcon.setAttribute('src', './images/icon-hamburger.svg')
  }
  
}

function linkAction() {
  menuLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active')
  menu.classList.remove('active');
}