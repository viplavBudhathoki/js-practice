// Day 37

// Create a function greet(name, callback) that prints name and then runs callback.
function greet(name, callback){
    console.log(`My name is ${name}`);
    callback();
}

function sayHello(){
    console.log("Hello, Sankalpa Limbu.");
}

greet("Viplav Budhathoki", sayHello);


// Create a function that accepts a callback and runs it after 2 seconds.
function sample(callback){
    callback();
}

function run(){
    setTimeout(()=>{
        console.log("Hello, I am running after 2 seconds.")
    }, 2000);
}

sample(run);


// Write a function calculate(a, b, callback) where callback does addition.
function calculate(a, b, callback){
    console.log(callback(a,b));
}

function addition(a, b){
    return a + b;
}

calculate(2, 2, addition);


// Create nested callbacks that print:

// "Loading"

// "Processing"

// "Completed"
// each after 1 second.
function nested(){
    setTimeout(()=>{
        console.log("Loading");

        setTimeout(()=>{
            console.log("Processing");

            setTimeout(()=>{
                console.log("Completed");
            }, 1000)
        }, 1000)
    }, 1000)
}

nested();


// Convert a normal function into a callback-based function.
function multiply(a, b, callback){
    const reuslt = callback(a, b);
    console.log(reuslt);
}

function multi(a, b){
    return a * b;
};

multiply(11, 11, multi);

// Write a function that simulates:

// User login (after 2s)

// Fetch profile (after 2s)

// Show dashboard (after 1s)
// using callbacks only.
function user() {
    setTimeout(() => {
        console.log("User Login");

        setTimeout(() => {
            console.log("Fetch Profile");

            setTimeout(() => {
                console.log("Show Dashboard");
            }, 1000); 

        }, 2000);

    }, 2000); 
}

user();


// Create a function delay(ms, callback) that executes callback after ms.
function delay(ms, callback) {
    setTimeout(() => {
        callback();
    }, ms);
}

delay(2000, () => {
    console.log("This runs after 2 seconds!");
});

delay(1000, () => {
    console.log("This runs after 1 second!");
});


