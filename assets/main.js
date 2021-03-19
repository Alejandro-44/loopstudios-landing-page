const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', toggle);

function toggle() {
  navMenu.classList.toggle('active')
}
