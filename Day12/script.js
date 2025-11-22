// Day 12


//Spread Operator
// 1. SPREAD OPERATOR (...)
// Spread operator expands (spreads) elements of an array or object into individual pieces.
// It helps to Copy arrays/objects
// " " Merge arrays/objects
// " " Pass array elements as arguments
// " " Avoid mutation (important for clean code)

//A. Spread with arrays
//Example 1: Copying an array
const nums = [1,2,3,4];
const copy = [...nums];
console.log(copy); //Output: [1,2,3,4]

//Example 2: Merging arrays
const a = [1,2,3];
const b = [4,5,6];

const merged = [...a, ...b];
console.log(merged); //Output: [1,2,3,4,5,6]

//Example 3: Add new values while copying
const x = [10,20];
const y = [5, ...x, 30];

console.log(y); //Output: [5,10,20,30]


//B. Spread with objects
//Example 1: Copy object
const user = {name: "Viplav", age: 20};
const copyUser = {...user}; //Output: { name: 'Viplav', age: 20 }

//Example 2: Merge objects
const c = {name: "Kamala"};
const d = {city: "Kathmandu"}; 

const mrgd = {...c, ...d};
console.log(mrgd); //Output: { name: 'Kamala', city: 'Kathmandu' }

//Example 3: Overwrite properties
const usr = {name: "Viplav", age: 20};
const updated = {...usr, age: 23}; //Output: { name: 'Viplav', age: 23 }


//Rest Operator
// 2. Rest Operator (...)
// Rest operator collects remaining values into an array.
// Spread = Break
// Rest = Collect

// A. Rest in Functions
// Example 1: Unlimited arguments
function jodau(...nums){
    return nums.reduce((a, b) => a + b);
}
console.log(jodau(1,2,3,4)); // Output: 10

// Example 2: First parameter + rest
function person(name, ...favNumbers){
    console.log("Name:", name);
    console.log("Favourite Numbers:", favNumbers);
}

person("Viplav", 7, 21, 99);
// Output:
// Name: Viplav
// Favourite Numbers: [ 7, 21, 99 ]

// B. Rest in Array Destructuring
const [e, f, ...rest] = [1,2,3,4,5];
console.log(e);    // 1
console.log(f);    // 2
console.log(rest); // [3,4,5]

// C. Rest in Object Destructuring
const you = {
  name: "Viplav",
  age: 20,
  city: "Kathmandu",
  country: "Nepal"
};

const {name, ...details} = you;

console.log(name);
console.log(details);
//Output:
// Viplav
// { age: 20, city: 'Kathmandu', country: 'Nepal' }


// 3. DEFAULT PARAMETERS
// If no value is passed, the function uses a default value.

// Example 1: Normal default
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Sankalpa");  // Hello Sankalpa


// Example 2: Default + other parameters
function calc(a = 5, b = 10) {
  return a + b;
}

console.log(calc());       // 15
console.log(calc(2));      // 12
console.log(calc(2, 3));   // 5

// Example 3: Default parameter as a function
function getId() {
  return Math.random();
}

function createUser(name, id = getId()) {
  return {name, id};
}

console.log(createUser("Viplav"));


// 4. ENHANCED OBJECT LITERALS (SUPER IMPORTANT)
// ES6 introduced shortcuts for cleaner objects.

// A. Property shorthand
// If variable and property name are same:

const naam = "Viplav";
const age = 20;

const u = { name, age };

console.log(user);


// B. Method shorthand
// Old way:

const us = {
  say: function() {
    console.log("Hello");
  }
};


// New way:

const er = {
  say() {
    console.log("Hello");
  }
};


// C. Dynamic keys
const key = "country";

const s = {
  name: "Sankalpa",
  [key]: "Nepal"
};

console.log(s);

// D. Combine everything
const first = "Viplav";
const last = "Budhathoki";
const umer = 20;

function generateId() {
  return Math.floor(Math.random() * 10000);
}

const r = {
  first,
  last,
  umer,
  id: generateId(),
  fullName() {
    return `${this.first} ${this.last}`;
  }
};

console.log(r.fullName());

// Exercies

// 1. Copy An Array Without Mutation

// Concept: Spread in arrays
// Task:
// Given:

// const original = [3, 6, 9];

// Create a new independent copy using spread, then push 12 into the new array.
// Verify that original does NOT change.
const original = [3, 6, 9];
const newArray = [...original];
newArray.push(12);
console.log(original);
console.log(newArray);
//Output:
// [3, 6, 9]
// [3, 6, 9, 12]


// 2. Merge Three Arrays Into One

// Concept: Spread merging arrays
// Task:
// Merge:

// const a = [1];
// const b = [2, 3];
// const c = [4, 5, 6];

// into a single array using spread.
const i = [1];
const j = [2,3];
const k = [4,5,6];

const singleArray = [...i, ...j, ...k];
console.log(singleArray); //Output: [1, 2, 3, 4, 5, 6]


// 3. Pass Array Values As Function Arguments

// Concept: Spread in function calls
// Task:
// Given:

// function multiply(a, b, c) { ... }

// Call the function using:

// const arr = [2, 4, 6];
const arr = [2,4,6];

function multiply(a,b,c){
    return a * b * c;
}

console.log(multiply(...arr)); //Output: 48


// 4. Create a New Array With Extra Items

// Concept: Spread inserting values
// Task:
// Given:

// const base = ["apple", "banana"];

// Make:
// ["start", "apple", "banana", "end"]

const base = ["apple", "banana"];

const extraItems = ["start", ...base, "end"];
console.log(extraItems); //Output: [ 'start', 'apple', 'banana', 'end' ]


// 5. Copy an Object and Update a Property

// Concept: Spread on objects
// Task:
// Given:

// const user = { name: "Ram", city: "Kathmandu", age: 20 };

// Create a copy and change age to 21.
const chalak = { name: "Ram", city: "Kathmandu", age: 20 };

const updatedChalak = { ...user, age: 21 };

console.log(updatedChalak); //Output: { name: 'Ram', city: 'Kathmandu', age: 21 }


// 6. Merge Two Objects + Add New Property

// Concept: Spread merging objects
// Task:
// Merge:

// const address = { city: "Kathmandu" };
// const details = { age: 20 };

// Add: { country: "Nepal" }.

const merge = {...address, ...details, country: "Nepal"};
console.log(merge); //Output: { city: 'Kathmandu', age: 20, country: 'Nepal' }


// 7. Make a Function That Accepts Unlimited Numbers

// Concept: Rest in functions
// Task:
// Create:

// sum(1,2,3,4,5) // → 15

function add(...nums){
  return nums.reduce((a, b) => a + b);
}
console.log(add(1,2,3,4,5)); //Output: 15


// 8. Extract First Item + Collect Others

// Concept: Rest in array destructuring
// Task:
// Given:

// const numbers = [10, 20, 30, 40, 50];

// Destructure:

// first = 10
// rest = [20,30,40,50]

const numbers = [10,20,30,40,50];

const [one, ...left] = numbers;
console.log(one); //output: 10
console.log(left); //output: [20,30,40,50]


// 9. Split User Object Using Rest

// Concept: Rest in object destructuring
// Task:
// Given:

// const woman = { name: "Sankalpa", age: 20, country: "Nepal", area: "Lalitpur" };

// Extract name
// Group remaining into details.

const woman = { subhaNaam: "Sankalpa", age: 20, country: "Nepal", area: "Lalitpur" };

const {subhaNaam, ...remaining} = woman;
console.log(subhaNaam); //output: "Sankalpa"
console.log(remaining); //output: { age: 20, country: "Nepal", area: "Lalitpur" }


// 10. Function With First Argument As Name, Rest Skills

// Concept: Rest parameters
// Task:
// Create a function:

// profile("Viplav","JavaScript","HTML","CSS")

// Output:

// Name: Viplav
// Skills: ["JavaScript","HTML","CSS"]

function profile(name, ...skills) {
  console.log(skills);
}

profile("Viplav", "JavaScript", "HTML", "CSS");
//Output:
// Name: Viplav
// Skills: [ 'JavaScript', 'HTML', 'CSS' ]


// 11. Find Maximum Using Rest

// Concept: Rest + Math.max
// Task:
// Write:

// maxOfAll(4, 10, 2, 99, 5); 

numbers = [4,10,2,99,5];

function maxOfAll(...numbers){
  return Math.max(...numbers);
}

console.log(maxOfAll(4,10,2,99,5)); //output: 99


// 12. Greeting Function With Default Name

// Concept: Default params
// Task:
// Write:

// greet(); // Hello Guest
// greet("Viplav"); // Hello Viplav

function greet(name = "Guest"){
  console.log("Name:" + name);
}

greet();
greet("Sankalpa Limbu");


// 13. Discount Calculator With Default Discount = 10%

// Concept: Default param usage
// Task:
// Function:

// discount(price, percent = 10)


// Call both with and without percent.

function discount(price, percent = 10){
  const discountedPrice = price - (price * percent/100);
  return discountedPrice;
}

console.log(discount(500)); // 500 - 10% = 450

console.log(discount(500, 20)); // 500 - 20% = 400


// 14. Create a Multiplication Function With Default = 1

// Concept: Multiple defaults
// Task:

// mul(5) -> 5  
// mul(5,2) -> 10

function Multiplication(a, b = 1){
  return a * b;
}

console.log(Multiplication(5)); //5
console.log(Multiplication(5, 2)); //10


//15. Create User With Default Role = "guest"

// Concept: Default params + objects
// Task:

// createUser("Viplav");  
// createUser("Bibek","admin");

function createUser(name, role = "guest") {
  return {
    name: name,
    role: role,
  };
}

console.log(createUser("Viplav"));        // { name: 'Viplav', role: 'guest' }
console.log(createUser("Bibek", "admin"));// { name: 'Bibek', role: 'admin' }


















// FINAL SUMMARY 

// Spread (...arr)
// Expands arrays/objects
// Copy, merge, add elements
// Rest (...args)

// Collects remaining items
// Used in functions & destructuring

// Default Parameters
// Auto assigns value when argument missing

// Enhanced Object Literals
// Shorthand properties
// Shorthand methods
// Dynamic keys
// Cleaner objects


