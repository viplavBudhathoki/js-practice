//Day6


//1. What Is an Object in JavaScript?
// An object is a collection of key–value pairs.
// Think of it like a real-life object:
// A person has: name, age, height
// A car has: brand, model, color
let man = {
    name: "Viplav Budhathoki",
    age: 23,
    country: "Nepal"
}
// name, age, country → keys / properties
// "Viplav Budhathoki", 23, "Nepal" → values


// 2. Object Properties
// Access properties — 2 ways

//A. Dot notation
console.log(man.name);
//B. Bracket notation - bracket notation is useful when key has spaces:
let user = {
    "full name" : "Viplav Budhathoki"
};
console.log(["full name"]);

console.log(man["name"]);


//3. Adding new properties
man.country = "UK";

//4. Updating properties
man.age = 22;

//5. Deleting properties
delete man.country;

//6. Methods (Functions inside objects)
//A method is simply a function that is stored as a property.
let student = {
    name: "Sankalpa Limbu",
    introduce: function() {
        console.log("Hello, I'm " + this.name);
    }
};
student.introduce();
// Output: Hello, I'm Sankalpa Limbu

//introduce is a method
//this refers to the same object


// 7. The this Keyword (MOST IMPORTANT)
// this means "the object that is calling the method"
let district = {
    name: "Kaski",
    zone: "Gandaki",

    info(){
        console.log(this.name + " " + this.zone);
    }
};
district.info(); // Kaski Gandaki
//this.name - "Gandaki"
//Without this it will not work inside an object


//8. Object.keys() — Get All Keys
//Returns an array of all property names.
let obj = {a:1, b:2, c:3};
console.log(Object.keys(obj)); //Output: ["a","b","c"]


//9. Object.values() — Get All Values
console.log(Object.values(obj)); //Output: [1,2,3]


//10. Object.entries() — Keys + Values Together
console.log(Object.entries(obj)); //Output: [ ["a", 1], ["b", 2], ["c", 3] ] Useful for looping.


//11. Looping Through an Object (very important)
//for...in loop
for (let key in obj){
    console.log(key, obj[key]);
}


//12. Nested Objects
let boy = {
    name: "Sangram Budhathoki",
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
};

console.log(boy.address.city); //Output: Kathmandu


//13. Array of Objects (very common)
//We will use this in projects alot
let chalak = [
    {name: "Viplav Budhathoki", age: 23},
    {name: "Sankalpa Limbu", age: 20}
];

//Loop 
chalak.forEach(u => console.log(u.name));


//14. Cloning Objects (copy)
//Wrong way (both reference same memory):
let copy = obj;

//Correct way
//1. Using spread operator
let cpy = {...obj};

//2.Using Object.assign
let cy = Object.assign({}, obj);


//15. Compare Objects (tricky)
//Objects cannot be compared directly
//{a:1} === {a:1} // false

//because objects compare memory location, not value
// JSON.stringify(obj1) === JSON.stringify(obj2)


//16. Check if a Key Exists
console.key("name" in person); //true


//17. Freeze Object (stop changes)
Object.freeze(person); //Noone can modify/delete/add properties


//18. Seal Object (modify allowed, adding/removing not allowed)
Object.seal(person);



//10. Mini Projects with Array Methods
// 1. Shopping Cart Total Calculator (reduce)
// Calculate total price of items in a cart.

let price = [100, 200, 25, 40, 600];
let totalPrice = price.reduce((sum, p) => sum + p, 0);
console.log("Rs.",totalPrice); //Output: 965


// 2. Filter Out Underage Users (filter)
// Keep only users who are 18+.

let ages = [10, 25, 20, 23, 5, 17, 18];
let adult = ages.filter(f => f >= 18);
console.log(adult); //Output: [25, 20, 23, 18]


//3. Convert All Usernames to Uppercase (map)
let users = ["Viplav", "Sankalpa", "Monica", "Aarati"];
let capitalize = users.map( c => c.toUpperCase());
console.log(capitalize); //output: ["VIPLAV", "SANKALPA", "MONICA", "AARATI"]


//4. To-Do List (push, pop, shift, unshift)
// Add/remove tasks dynamically.
let string = ["Viplav", "Magar", "Sankalpa", "Limbu"];
string.push("Kamala");
console.log(string); //Output: ["Viplav", "Magar", "Sankalpa", "Limbu", "Kamala"]
string.pop(); 
console.log(string) //Output: ["Viplav", "Magar", "Sankalpa", "Limbu"]
string.unshift("Kamala");
console.log(string); //Output: ["Kamala", "Viplav", "Magar", "Sankalpa", "Limbu"]
string.shift();
console.log(string); //Output: ["Viplav", "Magar", "Sankalpa", "Limbu"]


//5. Word Frequency Counter (reduce)
// Count occurrences of words in an array.
let fruits = ["apple", "banana", "apple", "orange"];
let count = fruits.reduce((acc, curr) =>{
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {}
);
console.log(count); //Output: { apple: 2, banana: 1, mango: 1 }


//6. Number Analyzer (map + filter + reduce)
// Double numbers, keep even, sum them.
let nums = [1,2,3,4,5,6];
let result = nums
            .map(d => d * 2)
            .filter(f => f % 2 === 0)
            .reduce((acc, curr) => acc + curr);
console.log(result); //Output: 42


//7. Grade Categorizer (filter)
// Select scores that are passing (≥ 40).
let scores = [10, 60, 90, 25, 40, 39, 75];
let passed = scores.filter(s => s >= 40);
console.log(passed); //output: [60, 90, 40, 75]


//8. Simple Contact Search (filter + includes)
// Find names that contain a search string.
let naam = ["Sankalpa", "Viplav", "Limbu", "Gehendra", "Dilu"];
let search = "a";

let finding = naam.filter(n => n.includes(search));
console.log(finding); //output: [ 'Sankalpa', 'Viplav', 'Gehendra' ]


//9. Movie Rating Average Calculator (reduce)
// Compute average rating.
let ratings = [5.3, 4.2, 2.2, 5, 6];
let avgRating = ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
console.log(avgRating.toFixed(2)); //Output: 4.54


//10. Reverse Array Without Using .reverse() (pop + push)
let places = ["Itahari", "Dharan", "Pokhara", "Kathmandu", "Chitwan", "Biratnagar"];
let reverse = [];

while (places.length > 0){
    reverse.push(places.pop());
}

console.log(reverse); //Output: ["Biratnagar", "Chitwan", "Kathmandu", "Pokhara", "Dharan", "Itahari"]


// FINAL SUMMARY (One Paragraph)
// This will help us revise in 1 minute.

// JavaScript objects store data in key–value pairs. 
// We can add, update, delete, and access properties using dot or bracket notation. 
// Methods are functions inside objects, and this refers to the object calling the method. 
// Object.keys() gives all keys, Object.values() gives values, and Object.entries() gives key–value pairs. 
// for...in loops through an object's keys. Objects can be nested, copied (spread operator), or frozen. 
// Arrays of objects are very common in real projects, and comparing objects requires JSON.stringify.