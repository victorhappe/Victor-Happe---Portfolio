const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll(".menu a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
