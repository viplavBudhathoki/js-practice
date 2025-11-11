// Day 1 - Variables, Data Types, Operators, console.log, Arrays


// 1. Variables
// A Variable is a named container that stores data which can be used and modified in a program.
let name = "Viplav Budhathoki"; // "name" is a variable storing the value "Viplav Budhathoki", let can be changed
const age = 20; // 20 is a variable storing the value age, const cannot be changed
var city = "Kathmandu"; // old way (avoid)

//Rules for variable names:
// Case-sensitive (age and Age are different)
// Can contain letters, numbers, _, $
// Cannot start with a number


// 2. Data Types
// Data Types define the kind of value a variable can hold such as numbers, texts or lists.

//A. Primitive Data Types

// Type         Example           Description
// String       "Viplav"            Text
// Number         23                Numeric Values
// Boolean      true, false         True/False
// Undefined    let x;              Declared but no value
// Null         let y = null;       Empty Value
// Symbol       Symbol("id")        Unique Identifier
// BigInt       9007199254740991n   Very large integers

//B. Non-Primitive / Reference Data Types

// Type       Example                        Description
// Object     {name: "Viplav", age: 20}      Key-value pairs
// Array      [10, 20, 30]                  Ordered list of values
// Function   function test(){}             Block of reusable code


// 3. Operators
// Operators are symbols that perform operations on variables or values.

//Types of Operators
// 1. Arithmetic Operators: + - * / % ++ --
let x = 10, y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
x++;
x--;

// 2. Assignment Operators: =, +=, -=, *=, /=

let a = 5;
a += 3;
a -= 2;
a *= 2;
a /= 6;

// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

// == (Loose Equality – compares values, not type)
console.log(5 == "5");   // true (values equal, type ignored)
console.log(true == 1);  // true

// === (Strict Equality – compares value + type)
console.log(5 === "5");  // false (number vs string)
console.log(5 === 5);    // true

// != (Loose Inequality – compares values, not type)
console.log(5 != "5");   // false (values equal)
console.log(10 != 20);   // true

// !== (Strict Inequality – value + type must be different)
console.log(5 !== "5");  // true (different type)
console.log(5 !== 5);    // false

// > (Greater Than)
console.log(10 > 5);     // true
console.log(3 > 8);      // false

// < (Less Than)
console.log(3 < 10);     // true
console.log(20 < 15);    // false

// >= (Greater Than or Equal To)
console.log(10 >= 10);   // true
console.log(12 >= 5);    // true
console.log(3 >= 7);     // false

// <= (Less Than or Equal To)
console.log(5 <= 5);     // true
console.log(2 <= 10);    // true
console.log(9 <= 4);     // false


// 4. console.log()
// console/log() is a functino to display output in the console. It is mainly used for debugging.

let naam = "Sankalpa Limbu";
console.log("My name is" + naam); // My name is Sankalpa Limbu


// 5. Objects
// An object is a collection of key-value pairs that stores related data.
let person = {
    subhaNaam: "Viplav Budhathoki",
    age: 23,
    country: "Nepal"
};

console.log(person.subhaNaam); //Viplav Budhathoki
console.log(person["age"]); // 23

// adding or updating properties 
person.hobby = "Coding";
person.age = 24;


// 6. Arrays
// An Array is a list of values stored in a single variable that can be accessed by index.

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

// Adding elements
fruits.push("Orange"); // Add at end
fruits.unshift("Kiwi"); // Add at start

// Removing elements
fruits.pop(); // remove last
fruits.shift(); // remove first

// Insert "Mango" at index 1
fruits.splice(1, 0, "Mango"); // ["Apple", "Mango", "Banana", "Orange"]

// Remove "Banana" (at index 2)
fruits.splice(2, 1);           // ["Apple", "Mango", "Orange"]

// Slice first 2 elements
let someFruits = fruits.slice(0, 2); // ["Apple","Mango"]

// Check if "Orange" exists
console.log(fruits.includes("Orange")); // true

// Combine with another array
let moreFruits = fruits.concat(["Kiwi", "Peach"]); 
console.log(moreFruits); // ["Apple","Mango","Orange","Kiwi","Peach"]

// Reverse
moreFruits.reverse(); // ["Peach","Kiwi","Orange","Mango","Apple"]

// Sort
moreFruits.sort();    // ["Apple","Kiwi","Mango","Orange","Peach"]
