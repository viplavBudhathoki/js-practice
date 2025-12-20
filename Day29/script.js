// Day 29: Prototypes & Inheritance

// What is a Prototype? (Human Explanation)

// First, the BIG TRUTH of JavaScript
// JavaScript is NOT class-based like Java / C++
// JavaScript is prototype-based

// Even when we use class, under the hood JS still uses prototypes.

// Prototype = a backup object
// If JavaScript cannot find a property or method on an object,
// it looks in its prototype.

// We will think like this:
// “If I don’t have it, I’ll ask my parent.”


// Example Without Any Prototype (Normal Object)
const user = {
  name: "Viplav"
};

console.log(user.name);   // Viplav
console.log(user.age);    // undefined

// Every Object Has a Hidden Prototype
// const arr = [];
// arr is an object
// But it can still do:

// arr.push(10);
// arr.pop();

// Where did push come from?
// Answer: Array.prototype


// Prototype Chain (MOST IMPORTANT)
// arr → Array.prototype → Object.prototype → null

// This is called the Prototype Chain.
// JS searches step by step until it finds the property.


const arr = [];

console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null


// Why Prototypes Exist?

// Because JS wants:
// Memory efficiency
// Code reuse
// Shared methods
// Instead of copying functions again and again,
// JS stores them once in prototype.

// Q1. Prototype Method

// Create a constructor function Car that takes:
// brand
// year
// Add a method getDetails() using prototype (not inside constructor).

function car(brand, year){
    this.brand = brand;
    this.year = year;
}

car.prototype.getDetails = function(){
    return this.brand + " - " + this.year;
}

const car1 = new car("Toyota", 2020);
const car2 = new car("Honda", 2018);

console.log(car1.getDetails()); // Toyota - 2020
console.log(car2.getDetails()); // Honda - 2018


// Q2. Shared Prototype Check

// Create two Car objects and check:
// c1.getDetails === c2.getDetails

// Question:
// Why should this be true?
// (Answer in comment after coding)

function Car(name, year) {
    this.name = name;
    this.year = year;
}

Car.prototype.getDetails = function() {
    return this.name + " - " + this.year;
};

const c1 = new Car("Toyota", 2020);
const c2 = new Car("Honda", 2018);

console.log(c1.getDetails === c2.getDetails); // true


// Q3. hasOwnProperty

// Using the Car object:
// Check which properties are own
// Check which are from prototype
// Print results.

console.log("Own properties:");
for (let prop in c1) {
    if (c1.hasOwnProperty(prop)) console.log(prop);
}

console.log("Prototype properties:");
for (let prop in c1) {
    if (!c1.hasOwnProperty(prop)) console.log(prop);
}
