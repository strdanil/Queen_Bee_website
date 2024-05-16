document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.querySelector(".burger-menu-container");
  const headerContainer = document.querySelector(".header-container");
  const navbarLinks = document.querySelectorAll(".header-navbar a");

  // function for closing burger-menu
  function closeBurgerMenu() {
    headerContainer.classList.remove("active");
  }

  // burger-menu click handler
  burgerMenu.addEventListener("click", function() {
    headerContainer.classList.toggle("active");
  });

  // burger-menu hash links click handler 
  navbarLinks.forEach(function(navLink) {
    navLink.addEventListener("click", closeBurgerMenu);
  });
});
