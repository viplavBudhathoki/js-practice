// Variables, Data Types, Operators

// 1. Create variables for name, age, and isStudent. Log them using template strings.
let name = "Viplav Budhathoki";
let age = 23;
let isStudent = true;

console.log(`Name: ${name}, age: ${23}, isStudent: ${isStudent}`); // Output: Name: Viplav Budhathoki, age: 23, isStudent: true


// 2. Write a program to swap two numbers without using a third variable.
 let a = 12;
 let b = 10;

 [a, b] = [b, a];

 console.log(a, b); //Output: a = 10 b = 12
// Looking at the right side, there is: [b, a]
// This is an array of the current values: [10, 12].
// Look at the left side, there is: [a, b]
// This tells JavaScript where to put the values:
// First value → a
// Second value → b
// Assign both values at the same time
// a now becomes 10 (old b)
// b now becomes 12 (old a)
// No value is lost, and we didn’t need a temporary variable.


// 3. Check if a number is even or odd (using % operator).
let x = 20;
let y = 13;

let evenOrOdd = num =>{
    if ( num % 2 === 0){
        return "Even";        
    } else {
        return "Odd";
    }
}
console.log(`x is ${evenOrOdd}`); //Output: x is Even
console.log(`y is ${evenOrOdd}`); //Output: y is Odd


// Functions

// 4. Write a function add(c, d) that returns their sum.

let sum = function add(c, d){
    return c + d;
}
console.log(sum(24,24)); //Output: 48


// 5. Write an arrow function that returns the square of a number.
let square = num => num * num;
console.log(square(8));

// 6. Write a function that returns the largest of three numbers.
let e = 1;
let f = 5;
let g = 8;

let largestNumber = function(e, f, g){
    if(e >= f && e >= g){
        return e;
    } else if (f >= e && f >= g){
        return f;
    } else {
        return g;
    }
}
console.log(largestNumber(e, f, g)); //output: 8

//Arrow function version
// let e = 1;
// let f = 5;
// let g = 8;

// let largestNumber = (e, f, g) => Math.max(e, f, g);

// console.log(largestNumber(e, f, g)); //Output: 8


// Conditionals

// 7. Write a program to check if a person is eligible to vote (age ≥ 18).
let person = function (age){
    if (age >= 18){
        return "Eligible to vote.";
    } else {
        return "Not eligible to vote."
    }
}
console.log(person(15));
console.log(person(23));

//Arrow function version
// let person = age => age >= 18 ? "Eligible to vote." : "Not eligible to vote.";

// console.log(person(15)); // Not eligible to vote.
// console.log(person(23)); // Eligible to vote.


// 8. Write a program to check if a character is a vowel or consonant.
let character = function(char){

    char = char.toLowerCase();

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return "Character is vowel.";
    } else {
        return "Character is consonant."
    }
}

console.log(character('a')); //Output: Character is vowel.
console.log(character('z')); //Output: Character is consonant.

// let character = char => {
//     char = char.toLowerCase();                 // Convert to lowercase
//     return 'aeiou'.includes(char) 
//         ? "Character is a vowel." 
//         : "Character is a consonant.";
// }

// console.log(character('a')); //Output: Character is a vowel.
// console.log(character('z')); //Output: Character is a consonant.
// console.log(character('E')); //Output: Character is a vowel.


// 9. Use a switch statement to print the month name when given a number (1–12).

let months = [2, 10]; // array of month numbers

months.forEach(month => {
    switch(month){
        case 1: console.log("January"); break;
        case 2: console.log("February"); break;
        case 3: console.log("March"); break;
        case 4: console.log("April"); break;
        case 5: console.log("May"); break;
        case 6: console.log("June"); break;
        case 7: console.log("July"); break;
        case 8: console.log("August"); break;
        case 9: console.log("September"); break;
        case 10: console.log("October"); break;
        case 11: console.log("November"); break;
        case 12: console.log("December"); break;
        default: console.log("Invalid month number");
    }
});
//Output: February October


// Loops

// 10. Print numbers from 1 to 50.
for (let i = 0; i <= 50; i ++){
    console.log(i); //Output: 1 2 3 ... 50
}


// 11. Print the multiplication table of 5.
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
//Output: 
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50


// 12. Calculate the sum of numbers from 1 to 100 using a loop.
let amount = 0;

for (i = 0; i <= 100; i++){
    amount += i;
}

console.log(amount); //Output: 5050


// Arrays

// 13. Given an array, print all even numbers.
let h = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers = h.filter(num => num % 2 === 0);
console.log(evenNumbers); //Output: [2, 4, 6, 8, 10]

// 14. Use map() to create a new array with each number doubled.
let nums = [1,2,3,4,5,6,7,8,9,10];

let doubled = nums.map(num => num * 2);
console.log(doubled);  //Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


// 15. Use filter() to keep only numbers greater than 10.
let n = [1, 54, 10, 5, 6, 98];

let result = n.filter(num => num > 10);
console.log(result); //Output: [54, 98]


// 16. Use reduce() to find the total sum of an array.
let o = [1,2,3,4,5];

let total = o.reduce((acc, curr) => acc + curr);
console.log(total); //Output: 15


// Objects

// 17. Create an object student with name, age, and grade; print all keys and values.
let student = {
    name: "Viplav Budhathoki",
    age: 23,
    grade: "A",
}

Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


// 18. Add a method introduce() that prints: “Hi, I am <name>”.
let nurse = {
    introduce: function(name) {
        return `Hi, I am ${name}`;
    }
};

console.log(nurse.introduce("Sankalpa Limbu"));//Output: Hi, I am Sankalpa Limbu


