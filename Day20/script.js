// Day 20 - Events Advanced -> Event bubbling, delegation, input handling

// EVENT FLOW (CAPTURING -> TARGET -> BUBBLING)
// Whenever we click something, the event does not happen only on that element.

// The browser follows 3 steps:

// 1. Capturing Phase (Top -> Target)
// Event starts from:
// window -> document -> html -> body -> parent -> child -> target

// 2. Target Phase
// Event reaches the actual clicked element ("target").

// 3. Bubbling Phase (Target → Top)
// Event goes back upwards:
// target -> parent -> body -> html -> document -> window
// Default phase = Bubbling


// EVENT BUBBLING (MOST IMPORTANT)

// Event bubbling means:
// When you click a child element ->
// Parent events also fire automatically.


// EVENT DELEGATION (VERY POWERFUL - real projects use this)
// Problem:
// If you have 100 items or dynamic items created with JS,
// you cannot add event listener to each one.

// Solution -> Add listener ONCE to parent
// Then detect which child was clicked.


// INPUT HANDLING (Live typing, validation, events)
// 1. Input Event (runs on every keystroke)
const nameInputField = document.getElementById("live-text");

nameInputField.addEventListener("input", function () {
    console.log("Current text:", nameInputField.value);
});


// 2. Key Events
// keydown -> key pressed
// keyup -> key released

document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// 3. Validate form as user types
const validateInputField = document.getElementById("live-text"); // Can use same as live input or a new one
validateInputField.addEventListener("input", () => {
    if (validateInputField.value.length < 3) {
        validateInputField.style.border = "2px solid red";
    } else {
        validateInputField.style.border = "2px solid green";
    }
});


// Syntax	        Meaning	                            Use When
// function()	callback with no event details	    Just do something
// function(e)	callback that uses event object	    Need target, value, key, etc.
// () => {}	    shorter callback, no event	        Simple actions
// (e) => {}	arrow function with event	        Delegation, keyboard, input


// 1. Log Clicks with Bubbling
// Create 3 nested elements:

// <div class="box1">
//    <div class="box2">
//       <div class="box3"></div>
//    </div>
// </div>

// Add click listeners to all 3 boxes.
// Task:
// Print which element is clicked
// Notice bubbling order (inner -> outer)

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

box1.addEventListener("click", ()=>{
    console.log("Box1 Clicked");
});

box2.addEventListener("click", ()=>{
    console.log("Box2 Clicked");
});

box3.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Box3 Clicked");
});


// 2. Stop Bubbling
// Use the same boxes.

// Task:
// Stop the event bubbling when clicking box3

// Only print:
// Box 3 clicked

// Use:
// e.stopPropagation();


// 3. Basic Input Handling

// Create an <input> field.
// Task:
// Show live text below it using input event

// Example:
// You type: h → shows "h"
// You type: hi → shows "hi"

const liveInputField = document.getElementById("live-text");
const liveDisplay = document.getElementById("output");

liveInputField.addEventListener("input", () => {
    liveDisplay.textContent = liveInputField.value;
});

