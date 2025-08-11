const menuToggle = document.querySelector(".menu__toggle");
const menuLinks = document.querySelector(".nav__links-container");
const menuOverlay = document.querySelector(".menu__overlay");
const headerNav = document.querySelector(".header__nav");
const navLogo = document.querySelector(".nav__logo");
const navLinks = document.querySelectorAll(".nav__links");
const mediaQuery = window.matchMedia("(max-width: 915px)");

function toggleMenu() {
  menuLinks.classList.toggle("menu__links--active");
  menuToggle.classList.toggle("menu__toggle--active");
  menuOverlay.classList.toggle("menu__overlay--active");
  headerNav.classList.toggle("header__nav--inactive");
  navLogo.classList.toggle("nav__logo--inactive");
  document.body.classList.toggle("menu-open");
}

function handleMenuEventListeners(e) {
  if (e.matches) {
    // screen is 915px or less
    navLinks.forEach((link) => {
      link.addEventListener("click", toggleMenu);
    });
  } else {
    navLinks.forEach((link) => {
      link.removeEventListener("click", toggleMenu);
    });
  }
}

mediaQuery.addEventListener("change", handleMenuEventListeners);

handleMenuEventListeners(mediaQuery);

menuToggle.addEventListener("click", toggleMenu);

menuOverlay.addEventListener("click", toggleMenu);
