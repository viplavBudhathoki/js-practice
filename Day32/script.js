// Day 32 – Classes (ES6), Constructors, Inheritance

// 1. Classes (ES6)
// Classes are blueprints for creating objects in JavaScript. They allow us to group related properties and methods together in a clean and organized way. 
// Classes make JavaScript objects easier to manage and more readable compared to using old-style functions and prototypes.

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    result(){
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
    }
}

const user1 = new User("Viplav", 23);
user1.result(); //output: Hello, I am Viplav and I am 23 years old.

// 2. Constructors

// Constructor is a special method in a class that is used to initialize object properties.
// we can only have one constructor per class.
// If we don’t define a constructor, JavaScript provides a default one.

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    info() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.info(); //output: Car: Toyota Corolla

// 3. Inheritance

// Inheritance lets one class inherit properties and methods from another class. This is useful for code reuse.
// extends -> keyword to inherit from another class.
// super() -> calls the parent class constructor.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Dog inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calls parent constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks!`);
    }
}

const myDog = new Dog("Tommy", "Labrador");
myDog.speak(); //output: Tommy barks!
console.log(myDog.breed); //output: Labrador

// Question 1: Create a basic class
// Create a class Student with properties: name, age, grade.
// Create a method greet() that prints "Hello, my name is <name>".
// Create an object of the class and call the greet() method.

// Expected behavior:
// const student1 = new Student("Sankalpa Limbu", 20, "12th");
// student1.greet() -> "Hello, my name is Viplav"

class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const student1 = new Student("Sankalpa Limbu", 20, "12th");
student1.greet(); //output: Hello, my name is Sankalpa Limbu

// Question 2: Constructor Practice
// Create a class Bike with properties brand and color.
// The constructor should take parameters and assign them to the object.
// Create two bike objects with different values.
// Log their properties.

class Bike {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    
    bikeDetails() {
        console.log(`This bike is ${this.color} ${this.brand}`);
    }
}

const bike1 = new Bike("Honda", "Red");
const bike2 = new Bike("Yamaha", "Black");

console.log(bike1.brand, bike1.color); //output: Honda Red
console.log(bike2.brand, bike2.color); //output: Yamaha Black

// Question 3: Add Methods to Class
// Add a method bikeDetails() to Bike class that prints: "This bike is <color> <brand>".
// Call the method for both bike objects.

bike1.bikeDetails(); //output: This bike is Red Honda
bike2.bikeDetails(); //output: This bike is Black Yamaha

// Question 4: Real-World Example
// Create a class BankAccount with accountNumber, ownerName, balance.
// Add methods: deposit(amount) and withdraw(amount).
// Create an object and perform some deposit and withdraw operations.

class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log(`Insufficient balance. Current balance: ${this.balance}`);
        }
    }
}

const account1 = new BankAccount(101, "Viplav", 5000);

account1.deposit(2000);   //output: Deposited 2000. New balance: 7000
account1.withdraw(1500);  //output: Withdrew 1500. New balance: 5500
account1.withdraw(6000);  //output: Insufficient balance. Current balance: 5500
