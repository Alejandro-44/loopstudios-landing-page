const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav__menu');
const menuLink = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', toggleMenu);
menuLink.forEach(n => n.addEventListener('click', linkAction))

function toggleMenu() {
  navMenu.classList.toggle('active')
}
function linkAction() {
  menuLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active')
  navMenu.classList.remove('active');
}