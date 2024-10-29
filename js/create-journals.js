"use strict";

const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const dropdown = document.querySelector(".dropdown-modal");
const mobileDropdown = document.querySelector(".mobile-dropdown-modal");

menuBtn.addEventListener("click", function (e) {
  dropdown.classList.remove("hide");
  console.log("clicked");
});

mobileMenu.addEventListener("click", function (e) {
  mobileDropdown.classList.remove("hide");
  console.log("clicked");
});

document.addEventListener("click", function (e) {
  e.target != menuBtn ? dropdown.classList.add("hide") : "";
  e.target != mobileMenu ? mobileDropdown.classList.add("hide") : "";
});
