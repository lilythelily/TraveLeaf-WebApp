"use strict";

// location map

const btnCreate = document.getElementById("create");

btnCreate.addEventListener("click", function (e) {
  const inputCountry = document.querySelector("#country").value;
  const inputCity = document.querySelector("#city").value;
  const inputDateMap = document.querySelector("#date").value;
  const inputDescription = document.querySelector("#memo").value;
  const newDate = document.getElementById("new-list-date");
  const newCountry = document.getElementById("new-list-country");
  const newCity = document.getElementById("new-list-city");
  const newDescription = document.getElementById("new-list-description");
  const newList = document.querySelector("#new-list");

  newList.style.display = "flex";

  newCountry.innerHTML = inputCountry;
  newCity.innerHTML = inputCity;
  newDate.innerHTML = inputDateMap;
  newDescription.innerHTML = inputDescription;

  inputCountry == "" ? alert("Please enter Country!") : "";
});

// leaflet-map

const map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  maxZoom: 15,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);

marker
  .bindPopup("<b>Discover the world!</b><br>Waiting to be explored")
  .openPopup();

const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)

    .setContent(`📍I visited here!`)

    .openOn(map);
}

map.on("click", onMapClick);

// maptiler
const key = "ba5oNHtCoqSYJ3hwxyjl";
L.control.maptilerGeocoding({ apiKey: key }).addTo(map);

// menu-dropdown

const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const dropdown = document.querySelector(".dropdown-modal");
const mobileDropdown = document.querySelector(".mobile-dropdown-modal");

menuBtn.addEventListener("click", function (e) {
  dropdown.classList.remove("hide");
});

mobileMenu.addEventListener("click", function (e) {
  mobileDropdown.classList.remove("hide");
});

document.addEventListener("click", function (e) {
  e.target != menuBtn ? dropdown.classList.add("hide") : "";
  e.target != mobileMenu ? mobileDropdown.classList.add("hide") : "";
});
