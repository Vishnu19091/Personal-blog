// TIME
function UpdateDate() {
  let time = new Date();
  let formatedTime = time.toLocaleTimeString();

  document.getElementById("time").textContent = formatedTime;
}
setInterval(UpdateDate, 1000);

// MODE FUNCTION
let darkmode = document.querySelector(".mode--dark");
let lightmode = document.querySelector(".mode--white");
const bodyElement = document.body;

lightmode.classList.add("hidden");

darkmode.addEventListener("click", () => {
  bodyElement.classList.replace("bgb", "bgw");
  darkmode.classList.add("hidden");
  lightmode.classList.remove("hidden");
});

lightmode.addEventListener("click", () => {
  bodyElement.classList.replace("bgw", "bgb");
  lightmode.classList.add("hidden");
  darkmode.classList.remove("hidden");
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
