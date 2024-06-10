const hamburgerNavbar = document.getElementsByClassName("navbar-hamburger")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

hamburgerNavbar.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
})