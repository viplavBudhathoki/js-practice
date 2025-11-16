//Day 7


//20 OBJECT PRACTICE QUESTIONS
// Basic Level (1–7)

// Create an object car with brand, model, year. Print each property.
let car = {
    brand: "Tesla",
    model: "X",
    year: 2025,
}
for (let key in car){
    console.log(key, "=", car[key] ); 
    //Output:
    // brand = Tesla
    // model = X
    // year = 2025
}

// Add a new property color to an existing object.
car.color = "Black";

// Update the year of a car object.
car.year = 2026;

// Delete a property from an object.
delete car.color;

// Access object values using dot and bracket notation.
car.brand;
car["brand"];

// Check if a key "age" exists inside an object using in operator.
if ("age" in car){
    console.log("Age exists inside an object.");
} else{
    console.log("Age doesn't exists inside an object.") 
}

// Loop through an object using for...in.
for (let key in car){
    console.log(key, ":", car[key]);
}


// Intermediate Level (8–14)

// Create an object student with a method intro() that prints “Hi, I am ___”.
let student = {
    intro : function(name){
        console.log("Hi, I am" + name);
    }
}
student.intro("Viplav"); //Output: Hi, I am Viplav

// Create two objects and clone one using spread operator.
let users = [
    {name: "viplav budhathoki", age: 23},
    {name: "sankalpa limbu", age:20},
];

let std = {name: "sangram budhathoki", age: 20};

let user1 = {...users[0]};
console.log(user1); //Output: { name: 'viplav budhathoki', age: 23 }

// Compare two objects and check if they are deeply equal using JSON.stringify.
let man1 = {name: "Bhim Bahadur Budhathoki", age: 84};
let man2 = {name: "Bhim Bahadur Budhathoki", age: 84};

JSON.stringify(man1) === JSON.stringify(man2); 

// Use Object.keys() to print all keys of an object.
console.log(Object.keys(man1));

// Use Object.values() to print all values.
console.log(Object.values(man1));

// Use Object.entries() to loop through key–value pairs.
for (let [key, value] in Object.entries(man1) ){
    console.log(key, "=", man1[key]);
}
// Freeze an object and try modifying its data.
console.log(Object.freeze(man1));
man1.name("Sankalpa Limbu");
man1.age(20);
console.log(man1);


// Advanced Level (15–20)

// Create a nested object representing a user with profile → address → city. Access city.
let obj = [
    {name: "Viplav Budhathoki", age: 23, address:{
        city: "Itahari",
        ward: 2,
        country: "Nepal",
    }},
    {name: "Sujil Gurung", age: 20},
]

console.log(obj[0].address.city); //Output: Itahari

// Create an array of objects representing 5 students. Loop and print names.
let stds = [
    {name: "Viplav Budhathoki"},
    {name: "Sankalpa Limbu"},
    {name: "Sujil Gurung"},
    {name: "Sampurna Limbu"},
    {name: "Monica Budhathoki"},
]
for (let student of stds){
    console.log(student.name);
}
//Output:
//Viplav Budhathoki
// Sankalpa Limbu
// Sujil Gurung
// Sampurna Limbu
// Monica Budhathoki

// Filter students whose age is greater than 20 from an array of objects.
let students = [
    {name: "Viplav Budhathoki", age: 23},
    {name: "Sankalpa Limbu", age:20},
    {name: "Sujil Gurung", age:20},
    {name: "Sampurna Limbu", age: 21},
    {name: "Monica Budhathoki", age: 24},
]

let result = students.filter(student => student.age > 20);
console.log(result); 
//Output:
// [
//   { name: 'Viplav Budhathoki', age: 23 },
//   { name: 'Sampurna Limbu', age: 21 },
//   { name: 'Monica Budhathoki', age: 24 }
// ]

// Sort an array of objects based on age (ascending).
let outcome = student.sort((a, b) => a.age - b.age);
console.log(outcome);
//Output: 
// [
//   { name: 'Sankalpa Limbu', age: 20 },
//   { name: 'Sujil Gurung', age: 20 },
//   { name: 'Sampurna Limbu', age: 21 },
//   { name: 'Viplav Budhathoki', age: 23 },
//   { name: 'Monica Budhathoki', age: 24 }
// ]

// Create a method getFullName() inside an object person that returns first + last name.
let person = {
    getFullName : function(){
        return person.firstName + " " + person.lastName;
    }
}

person.firstName = "Viplav";
person.lastName = "Budhathoki"; 
console.log("My name is ", person.firstName + " " + person.lastName); //Output: My name is  Viplav Budhathoki

// Write a function that takes an object and returns how many properties it has.
function countProperties(obj){
    return Object.keys(obj).length;
}

let man = {
    name: "Viplav Budhathoki",
    age: 23,
    address: "Itahari",
}

console.log(countProperties(man)); //Output: 3


// 10 MINI PROJECTS (OBJECTS ONLY + ARRAY METHODS)

// 1. Student Management System
// Array of students (name, age, marks)
// Print toppers (marks ≥ 80)

let underGraduate = [
    {name: "Viplav Budhathoki", score: 90},
    {name: "Sanklapa Limbu", score: 85},
    {name: "Bibek Rai", score: 75},
    {name: "Sangram Budhathoki", score: 60},
]

let output = underGraduate
    .filter(t => t.score >= 80)
    .map(n => n.name);

console.log(output); //Output: [ 'Viplav Budhathoki', 'Sanklapa Limbu' ]

// 2. Employee Salary Calculator
// Array of employees → name + salary
// Find total salary using reduce.
let employees = [
    {name: "Viplav Budhathoki", salary: 1000000},
    {name: "Sankalpa Limbu", salary: 1100000},
]

let totalS = employees.reduce((acc, curr) => acc + curr.salary, 0);
console.log(totalS); //output: 2100000

// 3. Product Inventory
// Array of products → name, price, quantity
// Print products with quantity < 10 (low stock).
let products = [
    {name: "Laptop", price: 100000, quantity: 1},
    {name: "SmartPhone", price: 100000, quantity: 2},
    {name: "Headphones", price: 50000, quantity: 10},
];

let lowStock = products.filter(f => f.quantity < 10);
console.log(lowStock); 
//Output:
// [
//   { name: 'Laptop', price: 100000, quantity: 1 },
//   { name: 'SmartPhone', price: 100000, quantity: 2 }
// ]

// 4. User Authentication System
// Object with username + password
// Write a method to check login(username, password).
let user = {
    username: "Subash Subba",
    password: "Subash123",
    login: function(inputUsername, inputPassword) {
        if (inputUsername === this.username && inputPassword === this.password) {
            return "Username and password is correct.";  
        } else {
            return "Invalid username and password. Please try again.";  
        }
    }
};
console.log(user.login("Subash Subba", "Subash123")); // Username and password is correct.
console.log(user.login("Subash Subba", "wrongpass")); // Invalid username and password. Please try

// 5. Library Book Finder
// Array of books → title + available(true/false)
// Filter only available books.
let books = [
    { title: "Harry Potter", available: true },
    { title: "The Lord of the Rings", available: false },
    { title: "To Kill a Mockingbird", available: true },
    { title: "Pride and Prejudice", available: false },
    { title: "1984", available: true }
];

let availableBooks = books
        .filter(book => book.available)
        .map(book => book.title);
console.log(availableBooks); 
//output: [ 'Harry Potter', 'To Kill a Mockingbird', '1984' ]

// 6. Movie Database
// Array of movies → title, rating
// Find movies with rating ≥ 4.5.
let nepaliMovies = [
  {
    title: "Unko Sweater",
    year: 2025,
    grossCrore: 11.34,  
    rating: 6.7 
  }, 
  {
    title: "Anjila",
    year: 2025,
    grossCrore: 8.86,  
    rating: 6.9  
  },
  {
    title: "Jerry on Top",
    year: 2025,
    grossCrore: null,   
    rating: 6.0  
  },
  {
    title: "Paran",
    year: 2025,
    grossCrore: 8.0, 
    rating: 7.0  
  },
  {
    title: "Rangeli",
    year: 2024,
    grossCrore: null,
    rating: 6.5  
  }
];
let movieRatings = nepaliMovies
    .filter(movie => movie.rating >= 4.5)
    .map(movie => movie.title);

console.log(movieRatings);
//Outpu:
// [
//   'Unko Sweater',
//   'Anjila',
//   'Jerry on Top',
//   'Paran',
//   'Rangeli'
// ]

// 7. Simple Address Book
// Object with user info + nested address
// Print full address using a method.
let info = {
    name: "Viplav Budhathoki", address:{
        place: "Pokhara",
        ward: 1,
        district: "Kaski",
    },

    getFullAddress : function(){
        return `${this.address.place}, ward${this.address.ward}, ${this.address.district}`;
    }
};
console.log(info.getFullAddress()); //Output: Pokhara, Ward 01, Kaski

// 8. Order Summary System
// Array of orders → price + quantity
// Calculate total bill using reduce.
let orders = [
    {price: 500, quantity: 5},
    {price: 1000, quantity: 15},
];

let totalBill = orders.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
console.log(totalBill); // Output: 17500
    
// 9. Car Dealership App
// Array of cars → brand, model, price
// Filter cars cheaper than Rs. 10,00,000.
let cars = [
    {brand: "Tesla", model: "X", price: 1500000},
    {brand: "Toyota", model: "Corolla", price: 950000},
    {brand: "Honda", model: "Civic", price: 850000},
    {brand: "Kia", model: "Seltos", price: 1200000},
    {brand: "Suzuki", model: "Swift", price: 700000}
];
let cheaperCars = cars.filter(car => car.price <= 1000000);
console.log(cheaperCars); 
//Output:
[
  { brand: 'Toyota', model: 'Corolla', price: 950000 },
  { brand: 'Honda', model: 'Civic', price: 850000 },
  { brand: 'Suzuki', model: 'Swift', price: 700000 }
]


// 10. Quiz App (Basic)
// Array of questions (object: question, options, answer)
// Loop through and print each question correctly.
let questions = [
    {
        question: "What is the capital of Nepal?",
        options: ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
        answer: "Kathmandu"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "Which country produces the most coffee?",
        options: ["Brazil", "Colombia", "Ethiopia", "Vietnam"],
        answer: "Brazil"
    }
];

for (let q of questions) {
    console.log("Question:", q.question);
    console.log("Options:", q.options.join(", "));
    console.log("Answer:", q.answer);
}