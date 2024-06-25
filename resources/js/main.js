document.addEventListener("DOMContentLoaded", () => {
  const menuToggleBtn = document.getElementById("menu-toggle-button");
  const navMenu = document.querySelector(".nav-menu");

  menuToggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("extended");
  });

  const themeToggleBtn = document.getElementById("theme-toggle-button");
  const body = document.querySelector("body");

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
  })
});
