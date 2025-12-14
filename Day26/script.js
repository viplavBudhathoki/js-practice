// Day 26

// this keyword
// this means "Who is calling this function?"
// this does not mean the function itself
// this means the object that is using (calling) the function
// The value of this is decided when the function is called, not when it is written.


// this in Global Scope

// In browser (normal js file)
console.log(this); //output: window

// in the browser, this in global scope = window


// Inside a normal function (non-strict mode)

function examine(){
    console.log(this);
}

test(); //output: window because the function is called normally. So this defaults to window


// Strict mode

"use strict";

function test(){
    console.log(this);
}

test();

//output: undefined
// In this strict mode, this is not auto-window. 


// this inside an Object (Most Important)

const user = {
    name: "viplav",
    testing: function(){
        console.log(this.name);
    }
};

user.testing(); //output: viplav

// function is called using user, so this = user
// rule to remember: the object before the dot is this

user.testing(); // this = user


// this is not fixed (common confusion)

const user1 = {
    name: "Sankalpa Limbu",
    testing: function(){
        console.log(this.name);
    }
};

const user2 = {
    name: "Viplav Budhathoki"
};

user2.testing = user1.testing;

user2.testing(); //output: Viplav Budhathoki

// Same function, different caller, this changes, this depends on CALLERE not OWNER


// this inside Arrow Functions

// arrow functions do not have their own this
// they borrow this from their surrouding scope

// Normal function vs Arrow function

const user3 = {
    name: "Viplav",

    normalFunc: function () {
        console.log(this.name);
    },

    arrowFunc: () => {
        console.log(this.name);
    }
};

user3.normalFunc(); // Viplav
user3.arrowFunc();  // undefined

// arrow fails because:
// Arrow does NOT bind this
// It takes this from global scope
// window.name is usually undefined

// Correct use of arrow inside object

const user4 = {
    name: "Viplav",

    greet: function () {
        const arrow = () => {
            console.log(this.name);
        };
        arrow();
    }
};

user4.greet(); //output: Viplav because arrow inherits this from greet()


// this inside Event Listeners

// Normal function (BEST)

button.addEventListener("click", function () {
    console.log(this);
});

// this = element clicked

// Arrow function (different behavior)

button.addEventListener("click", () => {
    console.log(this);
});

// this = window (or outer scope)
// we should use normal function when we need element as this


// this with call, apply, bind

// call()
function displayName() {
    console.log(this.name);
}

const person = { name: "Viplav" };

displayName.call(person); // output: Viplav


// apply() (same as call, but args as array)

function displayDetails(age) {
    console.log(this.name, age);
}

displayDetails.apply(user, [20]);


// bind() (returns new function)

const boundDisplayDetails = displayDetails.bind(user);
boundDisplayDetails(20);


// this inside Constructor Functions

function Person(name) {
    this.name = name;
}

const p1 = new Person("Viplav");
console.log(p1.name);
// this = newly created object


// this in Classes (Modern JS)

class Student {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

const s1 = new Student("Viplav");
s1.display();
// Works same as object methods


// this depends on:

// How the function is called
// Who is calling it


//  Situation                `this` value                

//  Global scope             window                     
//  Normal function          window / undefined (strict)
//  Object method            Object itself               
//  Arrow function           Inherited `this`            
//  Event listener (normal)  Clicked element             
//  Event listener (arrow)   Outer scope                
//  Constructor / class      New object                 
//  call / apply / bind      Manually set         

// this = the object that is calling the function at runtime
