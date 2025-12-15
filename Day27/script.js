// Day 27 - this Keyword

// Q1 Object Method

// Create an object user with:
// property name
// method sayName()
// Task:
// When calling user.sayName(), it should print the user’s name using this.

const user = {
    name: "Viplav Budhathoki",
    sayName: function(){
        console.log(this.name);
    }
};

user.sayName(); //output: Viplav Budhathoki


// Q2 Normal Function Call

// Write a normal function showThis().

// Task:
// Call it normally and log this.
// Explain what this points to.

function showThis() {
    console.log(this);
}

showThis(); //output: window

// showThis() is called as a normal function
// Therefore, this refers to:
// Global object (window) in non-strict mode
// undefined in strict mode


// Q3 Arrow Function Inside Object

// Create an object with:
// property title
// method written as arrow function

// Task:
// Try to access this.title.
// Observe the output.

const sample = {
    title: "Work Hard",
    showTitle: () => {
        console.log(this.title);
    }
};

sample.showTitle(); //output: undefined
// Arrow functions do NOT have their own this
// this is taken from the surrounding (lexical) scope
// In this case, this does NOT refer to sample
// So this.title → undefined


// Q4 Same Function, Different Objects

// Create:
// One function printName()
// Two objects with different name values

// Task:
// Attach the same function to both objects and call it.
// Observe how this changes.

function printName(){
    console.log(this.name);
}

const user1 = {
    name: "Sankalpa Limbu",
    show: printName
};

const user2 = {
    name: "Viplav Budhathoki",
    show: printName
};

user1.show(); //output: Sankalpa Limbu
user2.show(); //output: Viplav Budhathoki
// The same function printName() is attached to two different objects
// this is determined by how the function is called, not where it is defined
// When called as:
// user1.show() -> this refers to user1
// user2.show() -> this refers to user2


// setTimeout Bug

// Create an object with:
// property name
// method greet()
// Inside greet(), use setTimeout() to print this.name.

// Task:
// Fix the bug so the correct name prints after 1 second.

const user4 = {
    name: "Viplav",
    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

user4.greet(); //output: Viplav


// Q6 Event Listener & this
// Create a button in HTML.

// Task:
// Add click listener using normal function
// Log this
// Repeat using arrow function
// Explain the difference.

// Normal function
btn.addEventListener("click", function () {
    console.log("Normal function:", this); // the button element
});

// Arrow function
btn.addEventListener("click", () => {
    console.log("Arrow function:", this); // window (outer scope)
});


// Q7 call / apply / bind

// Create a function that prints:
// this.name
// one argument (like age or city)

// Task:
// Call the function using:
// call()
// apply()
// bind()

function printInfo(arg) {
    console.log(`${this.name} - ${arg}`);
}

const user5 = { name: "Viplav" };
const user6 = { name: "Sankalpa" };

printInfo.call(user5, "Kathmandu");  // Viplav - Kathmandu
printInfo.call(user6, "Pokhara");    // Sankalpa - Pokhara

printInfo.apply(user5, ["Bhaktapur"]); // Viplav - Bhaktapur
printInfo.apply(user6, ["Lalitpur"]);  // Sankalpa - Lalitpur

const boundFunc = printInfo.bind(user5, "Dharan");
boundFunc();  // Viplav - Dharan

//  Method   What it does                                                                                          

//  `call`   Calls the function immediately with a specified `this` and arguments                                  
//  `apply`  Calls the function immediately with a specified `this` and arguments as an array                      
//  `bind`   Returns a **new function** with `this` and optionally preset arguments; does **not** call immediately 
