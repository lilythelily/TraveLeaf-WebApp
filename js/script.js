"use strict";

const btnDelete = document.querySelector("#btn-delete");
const deleteModal = document.querySelector(".delete-modal");
const dateToday = document.querySelector(".date");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let dWeek = date.getDay();

const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const dropdown = document.querySelector(".dropdown-modal");
const mobileDropdown = document.querySelector(".mobile-dropdown-modal");

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDate = `${year}.${month}.${day}. ${weekday[dWeek]}`;

btnDelete.addEventListener("click", function (e) {
  deleteModal.classList.remove("hide");
});

// close modal

document.addEventListener("click", function (e) {
  if (
    ![btnIg, btnFb, btnX, btnDelete, menuBtn, mobileMenu, mobileIg, mobileFb, mobileX].includes(e.target)
  ) {
    cardIg.classList.add("hide");
    cardFb.classList.add("hide");
    cardX.classList.add("hide");
    mobileCardIg.classList.add("hide");
    mobileCardFb.classList.add("hide");
    mobileCardX.classList.add("hide");
    deleteModal.classList.add("hide");
    dropdown.classList.add("hide");
    mobileDropdown.classList.add("hide");
  }
  // e.target != btnDelete ? deleteModal.classList.add("hide") : "";
  // e.target != menuBtn ? dropdown.classList.add("hide") : "";
  // e.target != mobileMenu ? mobileDropdown.classList.add("hide") : "";
});

// current date

dateToday.innerHTML = currentDate;

// popup

menuBtn.addEventListener("click", function (e) {
  dropdown.classList.remove("hide");
});

mobileMenu.addEventListener("click", function (e) {
  mobileDropdown.classList.remove("hide");
});

// flags

const random1 = document.querySelector("#random1");
const random2 = document.querySelector("#random2");
const random3 = document.querySelector("#random3");

const inspireBtn = document.querySelector(".inspire");

inspireBtn.addEventListener("click", function (e) {
  const randomIndex = Math.floor(Math.random() * 3) + 1;

  random1.classList.add("none");
  random2.classList.add("none");
  random3.classList.add("none");

  switch (randomIndex) {
    case 1:
      random1.classList.remove("none");
      break;
    case 2:
      random2.classList.remove("none");
      break;
    case 3:
      random3.classList.remove("none");
      break;
  }
});

const mobileRandom1 = document.querySelector("#mobile-random1");
const mobileRandom2 = document.querySelector("#mobile-random2");
const mobileRandom3 = document.querySelector("#mobile-random3");

const mobileInspireBtn = document.querySelector(".mobile-inspire");

mobileInspireBtn.addEventListener("click", function (e) {
  const randomIndex2 = Math.floor(Math.random() * 3) + 1;

  mobileRandom1.classList.add("none");
  mobileRandom2.classList.add("none");
  mobileRandom3.classList.add("none");

  switch (randomIndex2) {
    case 1:
      mobileRandom1.classList.remove("none");
      break;
    case 2:
      mobileRandom2.classList.remove("none");
      break;
    case 3:
      mobileRandom3.classList.remove("none");
      break;
  }
});

// wish list

const wishInput = document.querySelector("#wish-input");
const wishList = document.querySelector("ul");
const wishBtn = document.querySelector("#wish-btn");

const wishInputMobile = document.querySelector("#wish-input-mobile");
const wishListMobile = document.querySelector(".mobile-ul");
const wishBtnMobile = document.querySelector("#wish-btn-mobile");

let checkboxId = 10;

wishBtn.addEventListener("click", function (e) {
  const wishText = wishInput.value;
  const newId = `wish-list${checkboxId++}`;

  const html = `
    <li>
      <input type="checkbox" id="${newId}" name="wish-list1" class="unchecked" />
      <label for="${newId}">${wishText}</label>
    </li>
  `;

  wishList.insertAdjacentHTML("beforeend", html);
  wishInput.value = "";
});

let checkboxIdMobile = 10;

wishBtnMobile.addEventListener("click", function (e) {
  const wishText2 = wishInputMobile.value;
  const newId = `wish-list-mobile${checkboxIdMobile++}`;

  const html = `
    <li>
      <input type="checkbox" id="${newId}" name="wish-list1" class="unchecked" />
      <label for="${newId}">${wishText2}</label>
    </li>
  `;

  wishListMobile.insertAdjacentHTML("beforeend", html);
  wishInputMobile.value = "";
});

const wishPlus = document.querySelector("#wish-plus");
const wishModal = document.querySelector(".wish-modal");
const wishPlusMobile = document.querySelector("#wish-plus-mobile");
const wishModalMobile = document.querySelector(".wish-modal-mobile");
const closeWishMobile = document.querySelector("#close-wish-mobile");
const closeWish = document.querySelector("#close-wish");

wishPlusMobile.addEventListener("click", function () {
  wishModalMobile.classList.remove("hide");
  console.log("clicked");
});

closeWishMobile.addEventListener("click", function () {
  wishModalMobile.classList.add("hide");
  console.log("clicked");
});

wishPlus.addEventListener("click", function () {
  wishModal.classList.remove("hide");
  console.log("clicked");
});

closeWish.addEventListener("click", function () {
  wishModal.classList.add("hide");
  console.log("clicked");
});

// social share

const btnIg = document.querySelector("#btn-ig");
const btnFb = document.querySelector("#btn-fb");
const btnX = document.querySelector("#btn-x");
const cardX = document.querySelector("#share-card-x");
const cardFb = document.querySelector("#share-card-fb");
const cardIg = document.querySelector("#share-card-ig");
const mobileIg = document.querySelector("#mobile-ig");
const mobileFb = document.querySelector("#mobile-fb");
const mobileX = document.querySelector("#mobile-x");
const mobileCardX = document.querySelector("#mobile-share-card-x");
const mobileCardFb = document.querySelector("#mobile-share-card-fb");
const mobileCardIg = document.querySelector("#mobile-share-card-ig");

btnIg.addEventListener("click", function () {
  cardIg.classList.remove("hide");
});
btnFb.addEventListener("click", function () {
  cardFb.classList.remove("hide");
});
btnX.addEventListener("click", function () {
  cardX.classList.remove("hide");
});

mobileIg.addEventListener("click", function () {
  mobileCardIg.classList.remove("hide");
  console.log('clicked');
});
mobileFb.addEventListener("click", function () {
  mobileCardFb.classList.remove("hide");
  console.log("clicked");
});
mobileX.addEventListener("click", function () {
  mobileCardX.classList.remove("hide");
  console.log("clicked");
});

