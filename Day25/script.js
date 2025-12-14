// Day 25 

// Q15: Closure + Hoisting Mix

var c = 48;

function test(){
    console.log(c);
    var c = 10;
    console.log(c);
}

test(); //output: 10


// Q16: Create your own Bank App using Closures

// Requirements:
// deposit()
// withdraw()
// checkBalance()
// balance must be private

function account(){
    let balance = 0;
    return{
        deposit: function(amount){
            balance += amount;
            console.log(`Deposit: ${amount}`); 
        },

        withdraw: function(amount){
            if (amount > balance){
                console.log("Insufficient Balance.");
                return;
            }

            balance -= amount;
            console.log(`Withdraw: ${amount}`);
        },

        checkBalance: function(amount){
            console.log(`Balance: ${balance}`);
        }
    };
}

let myAccount = account();
myAccount.deposit(100); //output: 100
myAccount.withdraw(5);  //output: 5
myAccount.checkBalance(); //output: 95


// Q17: Make a click counter button using closures

// One button increases
// No global variables
// Must use closure memory

function clickable(){
    let click = 0;

    return{
        clicking: function(step = 1){
            click += step;
            console.log(`Button Clicked: ${click}`);
        },

        reset: function(){
            click = 0;
            console.log(`Button Reset: ${click}`);
        }
    };
}

let cl = clickable();
cl.clicking(5); //5
cl.clicking(); //6
cl.clicking(); //7
cl.reset(); //0 


// Q18: Write a function that stores usernames using closure

// Example:

// let store = registerUser();

// store("Sita");
// store("Gita");
// store("Viplav");


// Output:

// Users: ["Sita"]
// Users: ["Gita"]
// Users: ["Viplav"]


function registerUser(){
    let username = [];

    return{
        storeUsername: function(name){
            username.push(name);
            console.log("Users: ", username);
        }
    };
}

let store = registerUser();
store.storeUsername("Viplav Budhathoki"); // Users: ["Viplav Budhathoki"]
store.storeUsername("Sankalpa Limbu"); // Users: ["Viplav Budhathoki", "Sankalpa Limbu"]
store.storeUsername("Sabin Rai"); // Users: ["Viplav Budhathoki", "Sankalpa Limbu", "Sabin Rai"]


// Q19: Closure Based Todo App Logic

// addTask
// removeTask
// listTasks
// (all inside one closure)


function tasks(){
    let taskList = [];
    return{
        addTask: function(task){
            taskList.push(task);
            console.log(`Added: ${task}`);
        },

        removeTask: function(task){
            let index = taskList.indexOf(task);
            if(index !== -1){
                taskList.splice(index, 1);
                console.log(`Removed: $(task)`);
            } else {
                console.log(`${task} not found`);
            }
        },

        listTasks: function(){
            console.log("Tasks: ", taskList);
        }
    };
}

let todo = tasks();

todo.addTask("Learn JS");   // Added: Learn JS
todo.addTask("Practice");   // Added: Practice
todo.listTasks();           // Tasks: ["Learn JS", "Practice"]
todo.removeTask("Learn JS"); // Removed: Learn JS
todo.listTasks();           // Tasks: ["Practice"]


// Q20: Create a function that remembers last 3 inputs

// Example:
// let remember = lastThree();

// remember(5);
// remember(10);
// remember(15);
// remember(20);

// Output:
// [5]
// [5, 10]
// [5, 10, 15]
// [10, 15, 20]

function lastThree() {
    let inputs = []; 

    return function(value) {  
        inputs.push(value);  

        if (inputs.length > 3) {
            inputs.shift();   
        }

        console.log(inputs); 
    };
}

let remember = lastThree();

remember(5);   // [5]
remember(10);  // [5, 10]
remember(15);  // [5, 10, 15]
remember(20);  // [10, 15, 20]
remember(25);  // [15, 20, 25]



