// Day 19 - Exercise

// SIMPLE LEVEL (Beginner Friendly)
// 1. Create a new <p> element on button click
// Task:
// Create a button -> when clicked, a new paragraph saying "Hello Viplav!" appears in the page.

const button = document.getElementById("btn");
button.addEventListener("click", function(){
    const p = document.createElement("p");
    p.textContent = "Hello, Viplav!";
    document.body.append(p);
})


// 2. Add 5 list items to a <ul>

// Task:
// Using a loop, create a <ul> and append:
// Item 1
// Item 2
// Item 3
// Item 4
// Item 5
// Then add it to the body.

const ul = document.createElement("ul");

for (let i = 1; i <= 5; i++){
    const li = document.createElement("li");
    li.textContent = "Item" + i;
    ul.append(li);
}

document.body.append(ul);


// 3. Remove the first child of a container

// Task:
// Given a <div id="box-container">, remove its first child when clicking a button.

const con = document.getElementById("box-container");
const btn = document.getElementById("rm-btn");

btn.addEventListener("click", function(){
    if (con.firstElementChild){
        con.firstElementChild.remove();
    }
});


// MEDIUM LEVEL (Important for UI building)
// 4. Create "Add Student" feature

// Task:
// When the user clicks a button, create a new <div class="student"> with text:
// "Student X"
// (X increases each time)

// Example:
// Student 1
// Student 2
// Student 3

const studentContainer = document.querySelector(".student-container");
const addBtn = document.getElementById("add-std-btn");

let count = 1;

addBtn.addEventListener("click", function() {
    const newStd = document.createElement("div");
    newStd.classList.add("student");
    newStd.textContent = "Student " + count;
    studentContainer.appendChild(newStd);
    count++;
});


// 5. Build a Notification System

// Task:
// Create a button "Show Notification"
// When clicked, add a new <div class='notification'>New message</div>
// It should automatically remove after 3 seconds.

const notification = document.querySelector(".notification");
const notificationBtn = document.getElementById("notification-btn");

notificationBtn.addEventListener("click", function(){
    const newNotification = document.createElement("div");
    newNotification.textContent = "New Message";
    notification.appendChild(newNotification);

    setTimeout(()=>{
        newNotification.remove();
    }, 3000);
});


// 6. Add items using insertAdjacentHTML()

// Syntax: element.insertAdjacentHTML(position, htmlString);

// Task:
// When clicking a button, insert:
// Above container → "Before"
// Inside container top → "Top"
// Inside container bottom → "Bottom"
// After container → "After"

const container = document.querySelector(".container");
const bu = document.getElementById("insert-btn");

bu.addEventListener("click", function() {
    // Insert "Before" above the container
    container.insertAdjacentHTML("beforebegin", "<div>Before</div>");

    // Insert "Top" inside container at the top
    container.insertAdjacentHTML("afterbegin", "<div>Top</div>");

    // Insert "Bottom" inside container at the bottom
    container.insertAdjacentHTML("beforeend", "<div>Bottom</div>");

    // Insert "After" below the container
    container.insertAdjacentHTML("afterend", "<div>After</div>");
});


// HARD LEVEL (Real-project feel)
// 7. Todo App (Create + Remove)

// Task:

// Input field for entering task

// “Add Task” button
// When clicked → create a <li> with remove button 
// When clicked → remove that specific list item.

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function(){
    const taskText = taskInput.value.trim(); // remove extra spaces
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText + " ";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";

    removeBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(removeBtn);

    taskList.appendChild(li);

    taskInput.value = "";
})


// 8. Build a Dynamic Card Generator

// Task:
// Create a form where user types:

// Title

// Description

// When user submits:
// Create a card:

// <div class="card">
//    <h3>Title</h3>
//    <p>Description</p>
// </div>

// Every new submission adds more cards.

const titleInput = document.getElementById("title-input");
const descInput = document.getElementById("desc-input");
const adBtn = document.getElementById("add-card-btn");
const cardContainer = document.getElementById("card-container");

adBtn.addEventListener("click", function () {
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === "" || desc === "") return; // prevent empty cards

    const card = document.createElement("div");
    card.classList.add("card"); 

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = desc;

    card.appendChild(h3);
    card.appendChild(p);

    cardContainer.appendChild(card);

    titleInput.value = "";
    descInput.value = "";
});


// 10. Replace element dynamically

// Task:
// Have a paragraph:
// <p id="old">Old text</p>
// Create button → when clicked:
// Replace it with:
// <h2>New replaced text</h2>

const oldPara = document.getElementById("old");
const replaceBtn = document.getElementById("replaceBtn");

replaceBtn.addEventListener("click", function () {

    const newElement = document.createElement("h2");
    newElement.textContent = "New replaced text";

    oldPara.replaceWith(newElement);
});
