const menuToggle = document.querySelector(".menu__toggle");
const menuLinks = document.querySelector(".nav__links-container");
const menuOverlay = document.querySelector(".menu__overlay");
const headerNav = document.querySelector(".header__nav");
const navLogo = document.querySelector(".nav__logo");
const navLinks = document.querySelectorAll(".nav__links");

function toggleMenu() {
  menuLinks.classList.toggle("menu__links--active");
  menuToggle.classList.toggle("menu__toggle--active");
  menuOverlay.classList.toggle("menu__overlay--active");
  headerNav.classList.toggle("header__nav--inactive");
  navLogo.classList.toggle("nav__logo--inactive");
  document.body.classList.toggle("menu-open");
}

// Open/close on menu click
menuToggle.addEventListener("click", toggleMenu);

// Close when overlay is clicked
menuOverlay.addEventListener("click", toggleMenu);

// Close when nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
