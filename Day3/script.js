// Day 3
//1. Strings
// A string is a sequence of characters which is used to represent text.
// Enclosed in single quotes '...', double quotes "...", or backticks `...`(template literals)

let name = "Sankalpa Limbu";
let address = 'Dhankuta';
let result = `My name is ${name} and I live in ${address}.`; // Using template literal

console.log(result); // Output: My name is Sankalpa Limbu and I live in Dhankuta.
// Explanation
// Backticks `...` allow multi-line strings and variable embedding.
// ${variable} → inserts the value of the variable into the string.
// You don’t need + to concatenate strings like "My name is " + name + "..." — template literals are cleaner and easier.

let a = 10;
let b = 10;
let answer = `The sum of ${a} + ${b} is ${a + b}.`;
console.log(result); // output: The sum of 10 + 10 is 20;


//String Methods - JavaScript provides many built in methods to manipulate strings.

//Method                             Example                       Output/Explanation
// .length	                       "Sankalpa".length	            8 → number of characters
// .toUpperCase()             	"Sankalpa".toUpperCase()	            "SANKALPA"
// .toLowerCase()	            "Sankalpa".toLowerCase()	            "sankalpa"
// .includes()	               "Sankalpa".includes("kal")	        true → checks substring
// .startsWith()	           "Sankalpa".startsWith("San")	                true
// .endsWith()	                "Sankalpa".endsWith("pa")	                true
// .indexOf()	                  "Sankalpa".indexOf("k")	        3 → first occurrence
// .lastIndexOf()	             "Sankalpa".lastIndexOf("a")	    7 → last occurrence
// .slice(start,end)	            "Sankalpa".slice(1,5)	       "anka" → extracts substring
// .substring(start,end)	        "Sankalpa".substring(1,5)	           "anka"
// .replace(old,new)	         "Sankalpa Limbu".replace("Limbu","Magar")	"Sankalpa Magar"
// .trim()                       	" Sankalpa ".trim()	              "Sankalpa" → removes spaces
// .split(separator)	            "Sankalpa,Limbu".split(",")	        ["Sankalpa","Limbu"] → array


//2. Numbers & Math
//Numbers
//JS only has one number type(floating point).
//It can perform arithmetic directly.

let x = 10;
let y = 3;

console.log(x + y); //13
console.log(x - y); //10
console.log(x * y); //30
console.log(x / y); //3.3333
console.log(x % y); // 1 - remainder

//Math Object - the math object has many built in methods for math operations
// Method	        Example	                   Output / Explanation
// Math.round()	    Math.round(4.6)	            5 → nearest integer
// Math.floor()	    Math.floor(4.9)	            4 → round down
// Math.ceil()	    Math.ceil(4.1)	            5 → round up
// Math.pow()	    Math.pow(2,3)	            8 → exponent
// Math.sqrt()	    Math.sqrt(16)	            4 → square root
// Math.abs()	    Math.abs(-5)	            5 → absolute value
// Math.min()      Math.min(2,5,1)
// / Math.max()	/ Math.max(2,5,1)	        1 / 5
// Math.random()	Math.random()	            random number 0 ≤ x < 1
// Math.floor
// (Math.random()*10)  random integer 0–9      random integer example


// 10 Mini JavaScript Projects for Practice

// 1. Word Counter
// Description: Count the number of words in a string.
// Concepts: Strings, .split(), .length

function countWords(sentence){
    return sentence.trim().split(" ".length);
}

console.log(countWords("Hello, Viplav Budhathoki")); //Output: 3

// 2. Guess the Number
// Description: User guesses a number, program checks if correct.
// Concepts: Math, random numbers, conditionals

const secret = Math.floor(Math.random() * 10) + 1;
let guess = 9;

console.log(guess === secret ? "Correct!" : guess < secret ? "Too low!" : "Too High!");
console.log("Secret was: ", secret);

// 3. Calculator
// Description: Perform basic arithmetic operations.
// Concepts: Functions, conditionals

function calculator(a, b, operator) {
  if (operator === "+") return a + b;
  else if (operator === "-") return a - b;
  else if (operator === "*") return a * b;
  else if (operator === "/") return a / b;
  else return "Invalid operator";
}

console.log(calculator(5, 3, "*")); // 15

// 4. Reverse a String
// Description: Reverse a string input.
// Concepts: Strings, arrays, loops or .split().reverse().join()

let str = "Sankalpa";
let reversed = str.split("").reverse().join("");
console.log(reversed); // aplaknaS

// 5. Palindrome Checker
// Description: Check if a string is the same forwards and backwards.
// Concepts: Strings, loops, conditionals

function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome("level")); // true

// 6. Maximum in Array
// Description: Find the largest number in an array.
// Concepts: Arrays, Math object, loop

let nums = [5, 8, 2, 10, 3];
let max = Math.max(...nums);
console.log(max); // 10

// 7. Array Sum
// Description: Sum all numbers in an array.
// Concepts: Arrays, loops, arrow functions

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// 8. Simple Todo List (Array)
// Description: Add, remove, and view tasks in an array.
// Concepts: Arrays, loops, functions

let todos = [];

function addTask(task) {
  todos.push(task);
}
function removeTask(task) {
  let index = todos.indexOf(task);
  if (index !== -1) todos.splice(index, 1);
}
function showTasks() {
  console.log("Todo List:", todos);
}

addTask("Learn JS");
addTask("Practice loops");
removeTask("Learn JS");
showTasks(); // ["Practice loops"]