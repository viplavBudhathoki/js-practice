// Day 28

// Q8 Constructor Function

// Create a constructor Person.
// Task:
// Use this to assign values and create multiple objects.

function User(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}

let user1 = new User("Viplav Budhathoki", 23, "Pokhara");
let user2 = new User("Sankalpa Limbu", 20, "Dharan");

console.log(user1); //output: { name: 'Viplav Budhathoki', age: 23, city: 'Pokhara' }
console.log(user2); //output: { name: 'Sankalpa Limbu', age: 20, city: 'Dharan' }


// Q9 Method Lost (this Trap)

// Create an object with a method.
// Task:
// Assign the method to a variable and call it.
// Fix the broken this.

let user = {
    name: "Sankalpa",
    age: 20,
    showAge: function() {
        console.log(this.name + " is " + this.age + " years old");
    }
};

// Assign method to a variable
let displayAge = user.showAge;
displayAge(); //output: Broken this -> undefined or error

// Fix using bind
let fixedDisplayAge = user.showAge.bind(user);
fixedDisplayAge(); //output: Sankalpa is 20 years old


// Q10 Class + this

// Create a class with:
// property
// method that uses this
// Task:
// Pass the method as a callback and fix this.

class User {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
    }

    // Method that uses this
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create object
let user3 = new User("Viplav", 23);

// Pass method as a callback (this breaks!)
setTimeout(user3.introduce, 1000); 
// Output: Hello, my name is undefined and I am undefined

setTimeout(user3.introduce.bind(user3), 1000); 
// Output: Hello, my name is Viplav and I am 23 years old


// Q11 Predict the Output

// Write code where:
// a method is passed as a callback
// this becomes undefined or window
// Explain WHY.

let car = {
    brand: "Toyota",
    model: "Corolla",
    showBrand: function() {
        console.log("Car brand is " + this.brand);
    }
};

// Pass method as a callback
setTimeout(car.showBrand, 1000); //output: Car brand is undefined   // in strict mode

setTimeout(car.showBrand.bind(car), 1000); // Output: Car brand is Toyota


// Q12 Arrow Function Closure

// Write a function that returns an arrow function.
// Task:
// Show how arrow function remembers this.

function Counter(start) {
    this.value = start;

    // Returns an arrow function that remembers 'this'
    this.increment = function() {
        return () => {
            this.value++;
            console.log("Current value:", this.value);
        };
    };
}

// Create counter object
let counter1 = new Counter(5);

// Get the arrow function
let increase = counter1.increment();

// Call it multiple times
increase(); // Current value: 6
increase(); // Current value: 7
