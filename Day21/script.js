// Event Delegation on a List

// Create a <ul> with many <li> items.
// Task:

// DON'T add click listener to each <li>
// Add only ONE listener to <ul>
// Print text of clicked <li>
// Should work even if new <li> is added dynamically.

// Example Output:
// You clicked on → "Banana"

const fruitList = document.getElementById("fruit-list");
const addFruitBtn = document.getElementById("add-fruit");

fruitList.addEventListener("click", function(event){
    if (event.target.tagName === "LI"){
        console.log("You clicked on " + event.target.textContext)
        alert("You clicked on -> " + event.target.textContent);
    }
})

addFruitBtn.addEventListener("click", function() {
    const newFruit = document.createElement("li");
    newFruit.textContent = "Mango";
    fruitList.appendChild(newFruit);
});


// Dynamic Delete Buttons

// Create a list like:
// Item 1  [Delete]
// Item 2  [Delete]
// Item 3  [Delete]

// Task:
// Using event delegation, clicking delete should remove its parent item.
// No querySelectorAll().
// No individual listeners.

const itemLists = document.getElementById("items");

itemLists.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement; 
        li.remove();
        console.log("Deleted:", li.textContent.replace("Delete", "").trim());
    }
});


// Form Validation with Events

// Create a form:
// username input
// email input
// password input
// submit button

// Task:
// Prevent form submission using preventDefault()
// Validate:
// Username ≥ 3 chars
// Email contains @
// Password ≥ 6 chars
// Show error message live while typing (using input event)

const form = document.getElementById("signup-form");

form.addEventListener("submit", function(event){
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(username.length < 3){
    alert("Username must be at least 3 characters");
    return;
  }
  if(!email.includes("@")){
    alert("Email must contain @");
    return;
  }
  if(password.length < 6){
    alert("Password must be at least 6 characters");
    return;
  }

  alert("Form submitted successfully!");
});


// Shopping Cart with Delegation

// Create HTML:

// <div id="products">
//    <button data-product="Laptop">Add Laptop</button>
//    <button data-product="Phone">Add Phone</button>
//    <button data-product="Watch">Add Watch</button>
// </div>

// <ul id="cart"></ul>

// Task:
// Use event delegation on #products
// Clicking a button adds item to cart
// Each cart item includes a delete button
// Use event delegation to remove cart items too

// Example:
// Laptop added to cart
// Phone added to cart

const productsDiv = document.getElementById("products");
const cartList = document.getElementById("cart");

productsDiv.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        const productName = event.target.dataset.product;

        const li = document.createElement("li");
        li.textContent = productName + " ";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);

        cartList.appendChild(li);

        console.log(productName + " added to cart");
    }
});

cartList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement;
        li.remove();
        console.log("Deleted:", li.textContent.replace("Delete", "").trim());
    }
});


// Live Search Filter

// Given a list of items:
// Apple
// Banana
// Grapes
// Mango
// Orange

// Task:
// Create an input box
// As user types (use input event):

// Filter list live
// Typing “ap” → shows Apple, Grapes
// No page reload
// No button press

const searchBox = document.getElementById("search-box");
const fruitLists = document.getElementById("fruits");
const fruitItems = fruitList.getElementsByTagName("li");

searchBox.addEventListener("input", function() {
    const query = searchBox.value.toLowerCase(); 

    for (let i = 0; i < fruitItems.length; i++) {
        const fruitName = fruitItems[i].textContent.toLowerCase();

        if (fruitName.includes(query)) {
            fruitItems[i].style.display = ""; 
        } else {
            fruitItems[i].style.display = "none"; 
        }
    }
});
