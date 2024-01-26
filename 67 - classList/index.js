// classList = ELement property in JS used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.remove("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    e.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (e) => {
    e.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("disabled")) {
      e.target.textContent += "😒";
    } else {
      e.target.classList.replace("enabled", "disabled");
    }
  });
});
