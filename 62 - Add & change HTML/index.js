// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
/*
document.body.append(newListItem);
document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);
*/

/*
const banana = document.getElementById("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[4]);
*/

//REMOVE HTML ELEMENT
/*
document.body.removeChild(newLink);
document.getElementById("fruits").removeChild(newListItem);
*/
