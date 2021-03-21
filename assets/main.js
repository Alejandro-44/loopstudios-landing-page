const navToggle = document.getElementById('nav-toggle');
const menu = document.querySelector('.nav__menu');
const menuLink = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', toggleMenu);
menuLink.forEach(n => n.addEventListener('click', linkAction))

function toggleMenu() {
  menu.classList.toggle('active')
}
function linkAction() {
  menuLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active')
  menu.classList.remove('active');
}