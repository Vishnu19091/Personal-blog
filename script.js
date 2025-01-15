// TIME
function UpdateDate() {
  let time = new Date();
  let formatedTime = time.toLocaleTimeString();

  document.getElementById("time").textContent = formatedTime;
}
setInterval(UpdateDate, 1000);

// MODE FUNCTION
const darkmode = document.querySelector(".mode--dark");
const lightmode = document.querySelector(".mode--white");
const bodyElement = document.body;

const modebtn = document.querySelector(".mode");
let mode = localStorage.getItem("DarkMode");

const enableDark = () => {
  bodyElement.classList.replace("bgw", "bgb");
  lightmode.classList.add("hidden");
  darkmode.classList.remove("hidden");
  localStorage.setItem("DarkMode", "active");
};

const disableDark = () => {
  bodyElement.classList.replace("bgb", "bgw");
  darkmode.classList.add("hidden");
  lightmode.classList.remove("hidden");
  localStorage.setItem("DarkMode", null);
};

lightmode.classList.add("hidden");
if (mode === "active") enableDark();
else disableDark();
modebtn.addEventListener("click", () => {
  mode = localStorage.getItem("DarkMode");
  mode !== "active" ? enableDark() : disableDark();
});

// MOBILE NAVIGATION FUNCTION
let header = document.querySelector(".header");
let btn = document.querySelector(".btn-mobile-nav");

btn.addEventListener("click", function () {
  header.classList.toggle("nav--open");
});

// Year
let date = new Date();
let year = date.getFullYear();
document.getElementById("year").textContent = year;
