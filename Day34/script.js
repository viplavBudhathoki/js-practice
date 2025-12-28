// Day 34

// If the property name is coming from a variable -> use [ ]
// If we type the property name directly -> use .

// Question 1: Getters and Setters
// Create a class Rectangle with properties width and height.
// Add a getter area that returns the area of the rectangle.
// Add a setter resize(newWidth, newHeight) to update width and height.
// Test it by creating a rectangle object, getting the area, resizing, and getting the area again.

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set resize(values) {
        this.width = values.newWidth;
        this.height = values.newHeight;
    }
}

const rect1 = new Rectangle(10, 5);

console.log(rect1.area);   //output: 50

rect1.resize = { newWidth: 20, newHeight: 10 };

console.log(rect1.area);   //output: 200


// Question 2: Multiple Levels of Inheritance
// Create a class Vehicle -> subclass Car -> subclass ElectricCar.
// Each level should have properties and methods.
// Test inheritance, method overriding, and calling super().

class Vehicle{
    constructor(name, brand){
        this.name = name;
        this.brand = brand;
    }
}

class Car extends Vehicle {
    constructor(name, brand, fuelType) {
        super(name, brand);
        this.fuelType = fuelType;
    }

    start() {
        console.log(`${this.name} is starting with ${this.fuelType}`);
    }
}

class ElectricCar extends Car {
    constructor(name, brand, battery) {
        super(name, brand, "electric");
        this.battery = battery;
    }

    start() {
        console.log(`${this.name} is starting silently with ${this.battery} kWh battery`);
    }
}

const eCar = new ElectricCar("Model 3", "Tesla", 75);
console.log(eCar.name);      //output: Model 3
console.log(eCar.brand);     //output: Tesla
console.log(eCar.fuelType);  //output: electric
console.log(eCar.battery);   //output: 75
eCar.start();                //output: Model 3 is starting silently with 75 kWh battery


// Asynchronous JavaScript?

// Normally, JavaScript runs synchronously — line by line. 
// But sometimes, we need some code to run later or wait for something (like fetching data from a server) without stopping the rest of the program. 
// That’s where asynchronous JavaScript comes in.
// Synchronous: Runs line by line. Each step waits for the previous to finish.
// Asynchronous: Can run in the background, letting other code continue execution.

// Synchronous example
console.log("Start");
console.log("Middle");
console.log("End");
// Output:
// Start
// Middle
// End

// Asynchronous example with setTimeout
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 2000); // it wait for 2 seconds

console.log("End");
// Output:
// Start
// End
// Middle  (after 2 seconds)


// Callbacks
// A callback is a function passed as an argument to another function. The other function can call it later, often after some asynchronous task.

function example(name, callback){
    console.log("Hello " + name);
    callback();
}

function seeYou(){
    console.log("Seeyou!!!");
}

example("Viplav Budhathoki", seeYou);
// Output:
// Hello Viplav Budhathoki
// Seeyou!!!

// Callback with Asynchronous Task

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from server");
        callback();
    }, 3000); // simulates 3-second delay
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);
// Output after 3 seconds:
// Data fetched from server
// Processing data...
