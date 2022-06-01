const input = document.querySelector(".demo_email_input");
const support_widget = document.querySelector("#support_widget");

const reLoad = function () {
  support_widget.setAttribute("data-email", input.value);
  const source_file = document.querySelector("#source_file");
  source_file.innerHTML = "";
  let script = document.createElement("script");
  script.src = "https://supportwidget.vercel.app/";
  script.id = "myscript";
  source_file.appendChild(script);
};
