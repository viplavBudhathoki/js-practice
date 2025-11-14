//Day 5


//1.Push() - Add at end
//It adds a new element at the end of the array
//It returns the new length of the array

let nums = [1,2,3,4,5];
nums.push(6);
console.log(nums); //Output: [1,2,3,4,5,6]


//2.pop() - remove from end
//It removes the last element
//It returns the removed value

let numbs = [1,2,3,4,5];
let removed = numbs.pop();
console.log(numbs); //Output: [1,2,3,4]
console.log(removed); //Output: 5


//3.unshift() = add at start
//It adds element at the beginning of the array
//It returns new length

let names = ["Budhathoki", "Sankalpa", "Limbu"];
names.unshift("Viplav");
console.log(names); // Output: ["Viplav", "Budhathoki", "Sankalpa", "Limbu"]


//4.shift() = remove from start
//It removes first element
//It returns removed value

let naam = ["Viplav", "Budhathoki", "Sankalpa", "Limbu"];
let hatayeko = names.shift();
console.log(names); //Output: ["Viplav", "Budhathoki", "Sankalpa", "Limbu"]
console.log(hatayeko); // "Viplav"


//5.forEach() - Loop through array
//It runs a function for every time in the array
//It doesnot return anything

let arr = [10,20,30,40];

arr.forEach(function(value){
    console.log(value);
}); //Output: 10,20,30,40

//When to use:
//When we want to loop
//When we don’t want to return anything
//Clean readable looping


//6.map() - transform array (returns New array)
//It creates a new array by applying a function to each element

let ank = [1,2,3,4];
let doubled = ank.map(n => n * 2);

console.log(doubled); //Output: [2,4,6,8]
// When to use:
// When we want to modify values
// Converting data (e.g., prices, strings, uppercase, etc.)
// ALWAYS returns array of same length


//7.filter() - keep only elements that macth a condition
//It creates a new array with items that pass a test
let subhaNaam = ["Viplav", "Sankalpa", "Aarati", "Monica", "Som", "Tilak"];
let result = subhaNaam.filter(str => str.length > 3);
    console.log(result); //Output: ["Viplav", "Sankalpa", "Aarati", "Monica", "Tilak"]
// When to use:
// When we want only some of the values
// Search results
// Remove unwanted data
// Filtering lists (active users, even numbers, etc.)


//8.reduce() - combine the array into one value
//it applies a function to all elements and reduces them to a single value
let a = [1,2,3,4,5];
let total = a.reduce((acc, curr) => acc + curr, 0);

console.log(total); //Output: 15

// When to use:
// Sum
// Product
// Counting
// Complex calculations
// Returning one final value



//  Method     Meaning                         Returns       
//  push()     Add at end                      new length    
//  pop()      Remove from end                 removed value 
//  unshift()  Add at start                    new length    
//  shift()    Remove from start               removed value 
//  forEach()  Loop each item                  nothing       
//  map()      Transform items                 new array    
//  filter()   Keep items that pass condition  new array     
//  reduce()   Turn array → single value       final result  


// FINAL NOTE (Very Important)

// push/pop work at end
// shift/unshift work at start
// map/filter always return a new array
// reduce returns one value
// forEach returns nothing



//20 PRACTICE QUESTIONS (Arrays Deep Dive)

//1. Use push() to add “Nepal” to this array:

let country = ["India", "China", "South korea", "North Korea"];
country.push("Nepal");
console.log(country); //Output: ["India", "China", "South korea", "North Korea", "Nepal"];


//2. Use pop() to remove the last element:

let numbers = [10,20,30,40];
numbers.pop();
console.log(numbers); //Output: [10,20,30]


//3. Add “JavaScript” at the start using unshift():
let skills = ["HTML", "CSS"];
skills.unshift("Javascript");
console.log(skills); //Output: ["Javascript", "HTML", "CSS"]


//4. Remove the first element using shift():
let fruits = ["Apple", "Banana", "Orange"];
fruits.shift();
console.log(fruits); //Output: ["Banana", "Orange"]


//5. Print each element using forEach():
let places = ["Itahari", "Pokhara", "Dharan", "Kathmandu", "Biratnagar", "Chitwan"];
places.forEach(function(value){
    console.log(value); 
});
//Output:
// Itahari
// Pokhara
// Dharan
// Kathmandu
// Biratnagar
// Chitwan


//6. Create a new array with each number doubled using map():
let numberss = [1, 2, 3, 4];
let doubs = numberss.map(n => n * 2);
console.log(doubs); //Output: [2, 4, 6, 8]


//7. Convert all names to uppercase using map():
let users = ["viplav", "sankalpa", "sangram"];
let cap = users.map(c => c.toUpperCase());
console.log(cap); //Output: ["VIPLAV", "SANKALPA", "SANGRAM"]


//8. Filter only even numbers using filter():
let n = [1, 2, 3, 4, 5, 6];
let onlyEven = n.filter(n => n % 2 === 0);
console.log(onlyEven); //Output: [2, 4, 6]


//9. Filter names starting with “S”:
let people = ["Sankalpa", "Ashish", "Sujal", "Prayas"];
let filterS = people.filter(f => f.startsWith("S"));
console.log(filterS); //Output: ["Sankalpa", "Sujal"]


//10. Find total sum using reduce():
let c = [5,10,15];
let sum = c.reduce((acc, curr) => acc + curr ,0);
console.log(sum); //Output: 30


//11. Find the product of all numbers using reduce():
let d = [2, 3, 4];
let product = d.reduce((acc, curr) => acc * curr, 1);
console.log(product); //Output: 24


//12. Use map() to convert Celsius → Fahrenheit:
//Formula: F = C * 1.8 + 32
let temps = [0, 10, 20];
// Convert each Celsius value to Fahrenheit
let fahrenheit = temps.map(c => c * 1.8 + 32);
console.log(fahrenheit); // Output: [32, 50, 68]

// temps.map(c => c * 1.8 + 32) → goes through each element in the array.
// For each c (Celsius), calculates Fahrenheit using the formula F = C * 1.8 + 32.
// Returns a new array [32, 50, 68].


//13. Count how many numbers are greater than 50:
let marks = [10, 55, 80, 45, 60];
let greater = marks.filter(m => m > 50);
console.log(greater); //Output: 55, 80, 60


//14. Use filter() to get words longer than 4 characters:
let words = ["sun", "earth", "moon", "galaxy"];
let longer = words.filter(l => l.length > 4);
console.log(longer); //output: ["earth", "galaxy"]


//15. Create a new array of squares (map):
let s = [2, 4, 6];
let sq = s.map(num => num * num);
console.log(sq); //output: [4, 16, 36]


//16. Remove last element and print new array:
let r = ["A", "B", "C", "D"];
let rem = r.pop();
console.log(rem); //Output: "D"


//17. Add two items at the start:
let queue = ["third", "fourth"];
queue.unshift("first", "second");
console.log(queue); //output: ["first", "second", "third", "fourth"]


//18. Use forEach() to calculate total length of all words:
let ar = ["JS", "Python", "Java"];

let totalLength = 0;
ar.forEach(function(word){
    totalLength += word.length;
}); 
console.log(totalLength); // Output: 12
// Explanation
// Initialize totalLength = 0.
// .forEach() loops through each word.
// Add word.length to totalLength for each iteration.
// Finally, console.log(totalLength) gives the sum of all word lengths.


//19. Use reduce() to find the maximum number:
let o = [10, 5, 33, 2, 99];
let max = o.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); //output: 99
// Step-by-Step Explanation
// acc → accumulator, starts as the first element if you don’t provide an initial value.
// curr → current element in the array.
// (curr > acc ? curr : acc) → if curr is bigger than acc, use curr; otherwise, keep acc.
// reduce() loops through the array and keeps the largest value in acc.

// Iteration Example:
// Start: acc = 10
// Compare 10 & 5 → max = 10
// Compare 10 & 33 → max = 33
// Compare 33 & 2 → max = 33
// Compare 33 & 99 → max = 99


//20. Filter all students who passed (≥40):
let markss = [20, 45, 80, 33, 60];
let stdPassed = markss.filter(p => p >= 40);
console.log(stdPassed); //Output: [45, 80, 60]


