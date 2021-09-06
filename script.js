const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");

let toggleIconFirstChildren = toggleIcon.children[0];
let toggleIconSecondChildren = toggleIcon.children[1];
let baseUrl = [
  "img/undraw_proud_coder",
  "img/undraw_feeling_proud",
  "img/undraw_conceptual_idea",
];
if (localStorage && localStorage.getItem("theme") == "dark") {
  console.log("tell me running");
  toggleSwitch.checked = true;
  switchTheme();
} else {
  toggleIcon.checked = false;
  switchTheme();
}

function toggle(isLight) {
  nav.style.backgroundColor = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIconFirstChildren.textContent = isLight ? "Light Mode" : "Dark Mode";
  isLight
    ? toggleIconSecondChildren.classList.replace("fa-moon", "fa-sun")
    : toggleIconSecondChildren.classList.replace("fa-sun", "fa-moon");
  image1.src = isLight ? `${baseUrl[0]}_light.svg` : `${baseUrl[0]}_dark.svg`;
  image2.src = isLight ? `${baseUrl[1]}_light.svg` : `${baseUrl[1]}_dark.svg`;
  image3.src = isLight ? `${baseUrl[2]}_light.svg` : `${baseUrl[2]}_dark.svg`;
}

function switchTheme(e) {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggle(false);
  } else {
    toggle(true);
    document.documentElement.removeAttribute("data-theme", "dark");
    localStorage.setItem("theme", "light");
  }
  //console.log(toggleSwitch.checked, localStorage);
}

toggleSwitch.addEventListener("change", switchTheme);
