// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

//ADD HTML/CSS PROPERTIES
buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += "😊";
});

// CLICK event listener
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "tomato";
  });
});

//MOUSEOVER + MOUSEOUT event listener
buttons.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "darkgreen";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "green";
  });
});

//ADD AN ELEMENT
const newBtn = document.createElement("button");
newBtn.textContent = "Button 5";
newBtn.classList = "myButtons";
document.body.appendChild(newBtn);

buttons = document.querySelectorAll(".myButtons");

//REMOVE AN ELEMENT
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.remove();
    buttons = document.querySelectorAll(".myButtons");
  });
});
