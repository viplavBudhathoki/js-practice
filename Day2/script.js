//Day 2 


//1. Functions
// Functions are block of code which help us to perform a task and can be reused multiple times.
//A. Function Declaration - A named function which define the using function keyword.

function college(name){
    console.log("College: " + name);
}

college("Informatics College Pokhara"); //College: Informatics College Pokhara

//Function also can have parameters (inputs) and return values.

function add(a, b){
    return a + b;
}

console.log(add(2,2)); //4 

//B. Function Expression - A function which help us to assign the variable

const naam = function(name){
    console.log("Name: " + name);
};
naam("Viplav Budhathoki");

//Function can also return values

const multiply = function(x, y){
    return x * y;
};

console.log(multiply(2,2)); //4

//C. Arrow Function(ES6) - A function which is shorter syntax for writing a function in JavaScript.

const numbers = [1,2,3,4,5,6,7,8];
const doubled = numbers.map(num => num * 2);
console.log(doubled); //[2, 4, 6, 8, 10, 12, 14, 16]


//In Single line, arrow function
const isAdult = age => age >= 18 ? "Adult" : "Minor";
console.log(isAdult(20)); //Adult



//2. Conditionals
//Conditionals are statements which allow our program to make decisions based on certain conditions.
//The code run only if the condition is true.
//If the condition is false, we can provide alternative code to run.

//Types of Conditionals
//1. if - it executes a block of code only if the condition is true.

let age = 23;

if(age >= 18){
    console.log("You are an adult.") //You are an adult.
}
// if age < 18, nothing happens

//2. if...else - it executes one block if true. another if false
let umer = 16;

if (age >= 18){
    console.log("You are an adult");
} else {
    console.log("You are a minor"); //Output: You are a minor.
}

//3. else if - it checks multiple conditions in order

let score = 95;

if (score >= 90){
    console.log("A Grade"); //Output: A Grade
} else if (score >= 75){
    console.log("B Grade");
} else{
    console.log("C Grade");
}

//4. Ternary Operator (Short if) - A shortcut for simple if...else statements

let userRole = "Admin";
let access = (userRole === "Admin") ? "Full Access" : "Limited Access";
console.log(access); //Output: Full Access

// Condition: userRole === "admin"
// If true → "Full Access"
// If false → "Limited Access"


//Loops
//Loops are used to repeat a black of code multiple times until a certain condition is met.
//Instead of writing the same code many times, loops automate repetition

//1. for loop - we use it when we know how man times we want to repeat
//Syntax: for(initialization; condition; increment/decrement){ //code to run each iteration}
for (let i = 0; i < 5; i++){
    console.log(i); //Output: 0 1 2 3 4    Explanation:

// let i = 0 → start value
// i < 5 → continue loop while true
// i++ → increase i by 1 each time
// Code inside {} runs on each iteration
// }


//2. while loop - we use it when we don't know how many times it will run
//Syntax: while(condition){//code to run while condition is true}
let a = 0;
while(a < 5){
    console.log(a); //Output: 0 1 2 3 4
    a++;
}


//3. do while...loop - It is similar to while, but runs the code at least once before checking the condition
//Syntax: do{//code to run} while(condition);

let b = 0;
do{
    console.log(b);
    b++;
} while(b < 5); //Output: 0 1 2 3 4


//4.for...of loop - It is special loop for arrays or iterable objects.
//Syntax: for (let element of iterable){//code to run for each element}

let names = ["Viplav", "Sankalpa", "Saphal", "Sangram"];

for (let name of names){ //Output: Viplav, Sankalpa, Saphal, Sangram
    console.log(name);
}


//5.for...in loop - It is used to loop over object keys.
//Syntax: for (let key in object){//code to run for each key}

let person = {name: "Viplav Budhathoki", age: 23, country: "Nepal"};
for(let key in person){
    console.log(key + ": " + person[key])
}
// Output:
// name: Viplav
// age: 20
// country: Nepal //Key point: Loops over keys, not values (use for...of for arrays).


//6.Nested Loops - It means loops inside loops for multi-dimensional data
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
//Output:
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=2, j=1
// ...        //Use: Grids, tables, or nested arrays.


// 7. Loop Control Statements
// break → stops the loop immediately
// continue → skips the current iteration and continues next
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop at 5
  console.log(i);
}
// Output: 1 2 4


// Day 2 – Top 10 Practice Questions
// Functions
//1. Function Declaration: Write a function greet(name) that prints Hello, <name>!.
function greet(name){
    console.log("Hello," + name);
}
greet("Sankalpa Limbu"); //Output: Hello, Sankalpa Limbu

//2. Function Expression: Create a function that takes two numbers and returns their product.
function product(m, n){
    return m * n;
}
console.log(product(10,10));

//3. Arrow Function: Write an arrow function isEven(num) that returns true if a number is even, false otherwise.
const isEven = (num) =>{ // Arrow Function: isEven
    return num % 2 === 0;
};

const isEvenShort = num => num % 2 === 0; // using single-line shorthand

console.log(isEven(10)); // true
console.log(isEven(7)); // false
console.log(isEvenShort(8)); // true

//4. Return Values: Write a function calculateArea(length, width) that returns the area of a rectangle.
function calculateArea(length, width){
    return length * width;
}
console.log(calculateArea(10, 10)); //Output: 100


// Conditionals
//5. Write a program that takes a number from the user and prints whether it is positive, negative, or zero.
let number = Number(prompt("Enter a number:"));

if (number > 0){
    console.log("Number is positive.");
} else if (number < 0){
    console.log("Number is negative.");
} else {
    console.log("Number is zero.");
}


//6. Using a ternary operator, check if a person’s age is 18 or above and print Adult or Minor.
let age = 19;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); //Output: Adult

//7. Write a switch statement to print the day of the week (1 → Monday, 2 → Tuesday … 7 → Sunday).
let dayNumber = 3; // Example: 1 to 7

switch(dayNumber){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number. Please enter 1 to 7.");
}


// Loops
//8. Use a for loop to print all numbers from 1 to 20 that are divisible by 3.
for(let i = 1; i <= 20; i++){
    if (i % 3 === 0){
        console.log(i);
    }
} //Output: 3, 6, 9, 12, 15, 18

//9. Use a while loop to calculate the sum of first 10 natural numbers.
let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;  // Add i to sum
    i++;       // Increment i
}

console.log("Sum of first 10 natural numbers:", sum); // Output: 55

//10. Given an array of numbers, use a for…of loop to find and print the largest number.
let numbers = [12, 45, 7, 89, 34, 23];
let largest = numbers[0]; // Assume first element is largest

for (let num of numbers) {
    if (num > largest) {
        largest = num; // Update largest if current number is bigger
    }
}

console.log("The largest number is:", largest); // Output: 89
