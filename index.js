// getting the dom
const input = document.querySelector(".demo_email_input");
const support_widget = document.querySelector("#support_widget");
const nav_buttons = document.querySelectorAll(".nav_button");
const page_content = document.querySelectorAll(".nav_content .content");
const menu_button = document.querySelector(".menu_button");
const side_nav = document.querySelector(".side_nav");

// remounts widget js file when the input value (email) is changed
const reLoad = function () {
  support_widget.setAttribute("data-email", input.value);
  const source_file = document.querySelector("#source_file");
  source_file.innerHTML = "";
  let script = document.createElement("script");
  script.src = "https://supportwidget.vercel.app/";
  script.id = "myscript";
  source_file.appendChild(script);
};

menu_button.addEventListener("click", () => toggleNav());

const toggleNav = () => {
  menu_button.classList.toggle("close");
  if (menu_button.classList.value.includes("close")) {
    side_nav.classList.remove("close");
  } else {
    side_nav.classList.add("close");
  }
};

// removes active from all button
const clearActiveButtonAndPage = () => {
  nav_buttons.forEach((buttons) => buttons.classList.remove("active"));
  page_content.forEach((buttons) => buttons.classList.add("hidden"));
};

const setActivePage = (idx) => {
  page_content[idx].classList.remove("hidden");
};

//  fuction called when a button is clicked
const buttonOnClick = (e, idx) => {
  clearActiveButtonAndPage();
  e.target.classList.add("active");
  setActivePage(idx);
  toggleNav();
};

//  adding eventlisteners to each button
nav_buttons.forEach((button, idx) => {
  button.addEventListener("click", (e) => buttonOnClick(e, idx));
});
