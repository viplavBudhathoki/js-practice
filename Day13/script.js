// Day 13


// 16. Create Object Using Property Shorthand

// Concept: Shorthand
// Task:
// Given variables:

// const name = "Viplav";
// const age = 23;

// Create an object without writing name:name or age:age.

const name = "Viplav";
const age = 23;

const user = {name, age};
console.log(user); //Output: { name: 'Viplav', age: 23 }


// 17. Create Object Method Using Shorthand

// Concept: Method shorthand
// Task:
// Create:

// const user = {
//   greet() { ... }
// };

const u = {
    greet(name, age){
        return `Name: ${name}, Age: ${age}`
    }
}

console.log(u.greet("Sankalpa Limbu", 20)); //Output: Name: Sankalpa Limbu, Age: 20


// 18. Use Dynamic Keys in Object

// Concept: Computed property names
// Task:
// Given:
// const key = "country";

// Create:
// { country: "Nepal" }

const Key = "country";

const obj = {
    [Key]: "Nepal"
}

console.log(obj); //Output: { country: 'Nepal' }


// 19. Build Product Object With Shorthand + Methods

// Concept: Combine everything
// Task:
// Given:

// const title = "Laptop";
// const price = 45000;

// Create:
// {
//   title,
//   price,
//   showDetails() { ... }
// }

const title = "Laptop";
const price = 45000;

const product = {title, price, showDetails(){
    return `Title: ${title}, Price: ${price}`
}}

console.log(product.showDetails()); //Output: Title: Laptop, Price: 45000


// 20. Generate User With Auto ID Using Function

// Concept: Enhanced object literals + functions inside objects
// Task:
// Create:

// createUser("Viplav")

// Should return:
// {
//   name: "Viplav",
//   id: some-random-number,
//   show() { return "User: Viplav" }
// }

function createUser(name) {
  return {
    name,  // property shorthand
    id: Math.floor(Math.random() * 10000),  // auto-generated ID
    show() { 
      return `User: ${this.name}`;  // method using this
    }
  };
}

const ur = createUser("Viplav");

console.log(ur);        // { name: 'Viplav', id: 1234, show: [Function: show] }
console.log(ur.show()); // User: Viplav


// Function in JavaScript

// A function is a block of code that performs a task.
// But in JavaScript:
// Functions are treated as values.
// We can store them in variables, pass them around, return them, etc.
// This special feature is what makes higher-order functions possible.

// 2.Callback Function?
// A callback function is:
// A function passed as an argument to another function
// And executed later inside that function
// Example:

function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // calling the callback
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Viplav", sayBye); 
//Output: Hello Viplav
// Goodbye!
// sayBye is the callback
// greet is the higher-order function


// 3. What Is a Higher Order Function?
// A Higher Order Function (HOF) is any function that:
// takes a function as an argument
// OR
// returns a function
// OR both

// Example:

function processNumber(num, callback) {
    return callback(num);
}

// This is a higher-order function because it receives a function as an argument.


// 4. WHY Do We Use Callbacks?
// Callbacks help with:
// Code reusability
// Cleaner logic
// Asynchronous operations (API calls, timers, database operations)

// Example: running something after 2 seconds

setTimeout(() => {
    console.log("Task finished!");
}, 2000);


// Here, the arrow function is a callback.


// 5. Real Examples of Higher Order Functions
// 5.1 Higher-Order Function Returning a Function
function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10


// 6. ARRAY METHODS That Use Callbacks
// These methods internally use higher-order functions:
// forEach
// map
// filter
// reduce
// find
// sort


// 6.1 forEach — Loop with a callback
const numsA = [1, 2, 3];
numsA.forEach(n => console.log(n));

// 6.2 map — Transform each element
const numsB = [1, 2, 3];
const doubled = numsB.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

// 6.3 filter — Keep only when true
const numsC = [1, 2, 3, 4, 5];
const even = numsC.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

// 6.4 reduce — Combine values into one
const numsD = [1, 2, 3, 4];
const sum = numsD.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// 7. Asynchronous Callbacks (Very Important)
// JavaScript runs code line-by-line.
// But some tasks take time (API calls, timers, reading files).
// Callbacks help JavaScript continue working while waiting.

// Example:

console.log("Start");

setTimeout(() => {
    console.log("Done after 2 seconds");
}, 2000);

console.log("End");
//Output:
// Start
// End
// Done after 2 seconds


// 8. Callback Hell (The Problem)
// Bad callback usage looks like:

doSomething(() => {
    doAnother(() => {
        doMore(() => {
            console.log("Too nested!");
        });
    });
});


// This is why Promises & async/await were created.
// But callbacks are still the foundation.


// 9. Summary
// Callback
// A function passed inside another function.

// Higher-Order Function
// A function that accepts a function OR returns a function.

// Array methods like map, filter, reduce use callbacks.
// Asynchronous tasks heavily depend on callbacks.


// 1. Write a function that takes a callback and prints “Callback executed”.
function sample(name, callback){
    console.log(`Name: ${name}`);
    callback();
}

function cb(){
    console.log("Callback executed!");
}

sample("Viplav Budhathoki", cb); 
//Output:
// Name: Viplav Budhathoki
// Callback executed


// 2. Write a function calculate(a, b, operation) where operation is a callback (add, sub).
function calculate(a, b, operation) {
    return operation(a, b);  
}

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }

console.log(calculate(10, 2, add));  // 12
console.log(calculate(5, 5, sub));   // 0



// 3. Write a function that takes an array and a callback, and applies the callback to each element.
function processArray(array, callback){
    for (let i = 0; i < array.length; i++){
        array[i] = callback(array[i]);
    }
    return array;
}

function toUpperCase(str){
    return str.toUpperCase();
}

let fruits = ["apple", "banana", "grapes", "orange"];

console.log(processArray(fruits, toUpperCase)); // ["APPLE","BANANA","GRAPES","ORANGE"]


// 4. Implement your own forEach() function using callbacks.
function forEachExample(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array); // pass element, index, array
    }
}

let falful = ["apple", "banana", "grapes", "orange"];

forEachExample(falful, function(element, index) {
    console.log(index + ": " + element.toUpperCase());
});
//Output:
// 0: APPLE
// 1: BANANA
// 2: GRAPES
// 3: ORANGE


// 5. Write a function filterEven(numbers, callback) that returns only even numbers.
function filterEven(numbers, callback) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) { 
            result.push(numbers[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = filterEven(numbers, isEven);

console.log(evenNumbers); // [2, 4, 6]
