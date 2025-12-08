// Multi-level Dropdown Menu (Bubbling + Delegation)

// Create a menu structure:

// Menu  
//    → HTML  
//    → CSS  
//    → JavaScript  
//          → DOM  
//          → Events  
//          → Fetch API

// Task:
// Use event delegation to open/close sub-menus
// Clicking any parent shows/hides its children
// Clicking another one closes previously opened menu

mainMenu.addEventListener("click", function(event){
    const clicked = event.target.closest(".item");
    if (!clicked || !mainMenu.contains(clicked)) return;

    const subMenu = clicked.querySelector(".subMenu");
    if (!subMenu) return;

    subMenu.classList.toggle("open");

    const allSubMenu = mainMenu.querySelectorAll(".subMenu");
    allSubMenu.forEach(sm => {
        if(sm !== subMenu && !sm.contains(subMenu)) {
            sm.classList.remove("open");
        }
    });
});


// Input Checker (Real-time)

// Create an input form with:
// username
// email
// password
// confirm password

// Live validation using:

// keyup
// focus
// blur

// Examples:
// When password is weak → show red border
// When fields are correct → show green border
// When confirm password ≠ password → show warning instantly

const username = document.getElementById('input-name');
const password = document.getElementById('input-password');
const confirm = document.getElementById('input-confirmPassword');
const form = document.getElementById('input-form'); // form ID in HTML

function checkUsername() {
    if(username.value.trim().length >= 3){
        username.classList.add('valid');
        username.classList.remove('invalid');
    } else {
        username.classList.add('invalid');
        username.classList.remove('valid');
    }
}

function checkPassword() {
    if(password.value.length >= 6){
        password.classList.add('valid');
        password.classList.remove('invalid');
    } else {
        password.classList.add('invalid');
        password.classList.remove('valid');
    }
    checkConfirm();
}

function checkConfirm() {
    if(confirm.value === password.value && confirm.value !== ''){
        confirm.classList.add('valid');
        confirm.classList.remove('invalid');
    } else {
        confirm.classList.add('invalid');
        confirm.classList.remove('valid');
    }
}

[username, password, confirm].forEach(input => {
    input.addEventListener('keyup', () => {
        if(input === username) checkUsername();
        if(input === password) checkPassword();
        if(input === confirm) checkConfirm();
    });
    input.addEventListener('focus', () => {
        if(input === username) checkUsername();
        if(input === password) checkPassword();
        if(input === confirm) checkConfirm();
    });
    input.addEventListener('blur', () => {
        if(input === username) checkUsername();
        if(input === password) checkPassword();
        if(input === confirm) checkConfirm();
    });
});

form.addEventListener('submit', function(e){
    e.preventDefault();
});


// Build a Small Todo App Using All Concepts

// Features:

// Add task
// Delete task
// Edit task (double-click → make editable)
// Mark as completed
// Everything must use event delegation

// No jQuery
// No frameworks
// Only pure JavaScript.

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function createTaskItem(taskText) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(actionsDiv);

    return li;
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText === '') return;

    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);

    taskInput.value = '';
});

taskList.addEventListener('click', function(e) {
    const target = e.target;
    const li = target.closest('li');
    if(!li) return;

    if(target.classList.contains('delete')) {
        li.remove();
    }
});

taskList.addEventListener('dblclick', function(e){
    const target = e.target;
    const li = target.closest('li');
    if(!li) return;

    if(target.tagName === 'SPAN') {
        li.classList.toggle('completed');

        const currentText = target.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'edit-input';
        li.replaceChild(input, target);
        input.focus();

        input.addEventListener('keydown', function(ev){
            if(ev.key === 'Enter') {
                finishEdit(input, li);
            }
        });
        input.addEventListener('blur', function(){
            finishEdit(input, li);
        });
    }
});

function finishEdit(input, li){
    const span = document.createElement('span');
    span.textContent = input.value.trim() || 'Untitled';
    li.replaceChild(span, input);
}
