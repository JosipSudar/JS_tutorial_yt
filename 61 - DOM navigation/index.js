// DOM Navigation = The process of navigation through the structure
//                  of an HTML document using JS.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const element = document.getElementById("fruits");
const children = element.children;

children[1].style.backgroundColor = "yellow";
