// Day 11


//ES6 Features (Foundation for Modern JavaScript)
//There are four ES6 features that are used everywhere in real-world projects.

// let vs const 
// Before ES6 we only had var, but it had many problems:
// It ignored block scope
// It allowed accidental re-declaration.
// It created bug in loops
// As a result, ES6 introduced let and const.


//Const - it is an constant - used for values that doesn't change
// we use const for:
// - functions
// - DOM elements
// - objects
// - arrays
// - fixed values

const PI = 3.14;           
const user = {              
    name: "Viplav"          
};
const numbers = [1,2,3];

//Const means :
//- variable reference cannot change         
//- but object/array contents CAN change

const arr = [1,2,3];
arr.push(4); //allowed
// arr = [1,2] not allowed


//Let - used when value will change
//Examples: counters, loops, updating values, temporary variables
let marks = 10;
marks = 15; //allowed


//Use const 95% of the time
//Use let when we know the value will change


//Template Literals - the natural way to write strings

//Before ES6"
console.log("Hello" + name + ", age is " + age); //it's hard to read

//ES6 solution - backticks (`) insread of quotes
console.log(`Hello ${name}, age is ${age}`); //clean, support expressions, supports multi-line strings

console.log(`Name: ${name} Age: ${age} Country: Nepal`);


//Destructuring - the shortcut to access values
//Destructuring means opening a box and taking out items directly instead of opening the box again and again

//Array Destructuring

//OLD way
// let colors = ["red", "green", "yellow"];
// let first = colors[0];
// let second = colors[1];

//NEW way
const [first, second, third] = colors;

//Object Destructing

//OLD way
// const user = { name:"Viplav", age:21 };
// const name = user.name;
// const age = user.age;

//NEW way
const { name, age } = user;

//Example:
const product = {
  title: "Phone",
  price: 30000,
  brand: "Samsung"
};

const { title, price, brand } = product;


//ES6 matters because every modern framework uses ES6: React, Node.js, Express, Vue, Angular






