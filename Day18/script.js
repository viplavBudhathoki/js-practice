// DAY 18 - DOM Manipulation: Create, Add, Remove Elements Dynamically

// DOM - Document Object Model is a programming interface (because JS can communicate with the webpage, we can use code to change text, images, styles, structure,etc.)
// which is provided by the browser that represents a webpage (HTML or XML document) as a tree structure of objects for JS level/ elements for HTML level.
// It allows programming languge especially JS to access, read, modify, add, delete and react to elements on the webpage.

// DOM Represents the Page as a Tree Structure
// Even though our HTML file is text, the browser converts it into a tree of objects:
// <html> is the root
// Inside it, <head> and <body> are branches
// Inside them are other elements
// Text inside elements becomes leaf nodes. 
// A node is any single point in the DOM hierarchy which can represent:
// An element (<div>, <p>)
// An attribute (id, class)
// A text inside an element
// A comment (<!-- comment -->)
// The document itself
// Element → Only HTML tags (<div>, <p>)
// Node → Can be element, text, comment, or document
// So all elements are nodes, but not all nodes are elements.
// (Hierarchical = arranged in levels or layers / Hierarchical in JavaScript means data or structures arranged in levels with parent-child relationships)
// This structure is called the DOM Tree.


// DOM lets JS change the webpage dynamically
// Using the DOM, JS can change the content, change css style, add new elements, remove elements, handle user events.

// Change content
element.innerHTML = "updated";

// Change CSS style
element.style.color = "red";

// Add new elements
document.body.appendChild(newDiv);

// Remove elements
element.remove();

// Handle user events
button.addEventListener("click", fn);

// DOM Updates Instantly & Dynamically
// The DOM is live.
// When something changes in the DOM, the changes appear instantly on the webpage without reloading.
// Example: Typing in a search bar -> suggestions appear immediately.
// That’s DOM manipulation.

// Creating elements
const div = document.createElement("div"); //Creating the element
div.textContent = "<b>Bold text</b>"; //Adding text/content
div.innerHTML = "<b>Bold text</b>"; //Adding text/content
div.classList.add("box"); //Add classes or attributes
div.setAttribute("id", "uniqueDiv");
//Adding element to the page
//append() adds at bottom
document.body.append(div);

// prepend() adds at top
document.body.prepend(div);

// appendChild() -> old method but still common
document.body.appendChild(div);


// Adding Elements Relative to Another Element

// insertBefore() - insert before a specific element
const parent = document.querySelector('#container');
const firstChild = parent.firstElementChild;

parent.insertBefore(div, firstChild);


// insertAdjacentHTML (Very powerful!)

element.insertAdjacentHTML("beforebegin", "<p>Before element</p>");
element.insertAdjacentHTML("afterbegin", "<p>Inside at top</p>");
element.insertAdjacentHTML("beforeend", "<p>Inside at bottom</p>");
element.insertAdjacentHTML("afterend", "<p>After element</p>");


// Removing Elements

// remove()
div.remove();

// removeChild()
parent.removeChild(ChildElement);


// Creating Elements Using Loops

const ul = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    ul.append(li);
}

document.body.append(ul);


// Replace Elements

const old = document.getElementById("oldText");
const newElem = document.createElement("p");
newElem.textContent = "This is new content.";

old.replaceWith(newElem);


// Clone Elements
const copy = element.cloneNode(true); // true = deep clone (with children)
document.body.append(copy);
