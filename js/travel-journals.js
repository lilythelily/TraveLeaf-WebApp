"use strict";

const btnDelete = document.querySelector("#btn-delete");
const deleteModal = document.querySelector(".delete-modal");

const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const dropdown = document.querySelector(".dropdown-modal");
const mobileDropdown = document.querySelector(".mobile-dropdown-modal");

const igBtn = document.querySelector("#ig");
const fbBtn = document.querySelector("#fb");
const xBtn = document.querySelector("#x");
const shareCardIg = document.querySelector("#share-card-ig");
const shareCardFb = document.querySelector("#share-card-fb");
const shareCardX = document.querySelector("#share-card-x");
const gallery = document.querySelector(".gallery");
const slide = document.querySelector(".image-slide");
const closeBtn = document.querySelector("#close-btn");

gallery.addEventListener("click", function (e) {
  slide.classList.remove("hide");
});

btnDelete.addEventListener("click", function (e) {
  deleteModal.classList.remove("hide");
});

document.addEventListener("click", function (e) {
  if (
    ![igBtn, fbBtn, xBtn, btnDelete, menuBtn, mobileMenu].includes(e.target)
  ) {
    deleteModal.classList.add("hide");
    dropdown.classList.add("hide");
    mobileDropdown.classList.add("hide");
    shareCardIg.classList.add("hide");
    shareCardFb.classList.add("hide");
    shareCardX.classList.add("hide");
  }
});

menuBtn.addEventListener("click", function (e) {
  dropdown.classList.remove("hide");
});

mobileMenu.addEventListener("click", function (e) {
  mobileDropdown.classList.remove("hide");
});

igBtn.addEventListener("click", function () {
  shareCardIg.classList.remove("hide");
});

fbBtn.addEventListener("click", function () {
  shareCardFb.classList.remove("hide");
});

xBtn.addEventListener("click", function () {
  shareCardX.classList.remove("hide");
});

closeBtn.addEventListener("click", function () {
  slide.classList.add("hide");
});
