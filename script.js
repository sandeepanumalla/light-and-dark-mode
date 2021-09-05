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

function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIconFirstChildren.textContent = "Dark Mode";
  toggleIconSecondChildren.classList.replace("fa-sun", "fa-moon");
  image1.src = `${baseUrl[0]}_dark.svg`;
  image2.src = `${baseUrl[1]}_dark.svg`;
  image3.src = `${baseUrl[2]}_dark.svg`;
}

function light() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIconFirstChildren.textContent = "Light Mode";
  toggleIconSecondChildren.classList.replace("fa-moon", "fa-sun");
  image1.src = `${baseUrl[0]}_light.svg`;
  image2.src = `${baseUrl[1]}_light.svg`;
  image3.src = `${baseUrl[2]}_light.svg`;
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    light();
    document.documentElement.removeAttribute("data-theme", "dark");
  }
  console.log(e.target.checked);
}

toggleSwitch.addEventListener("change", switchTheme);
