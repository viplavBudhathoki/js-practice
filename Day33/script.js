// Day 33

// Question 1: Inheritance
// Create a class Animal with properties name and age, and a method speak().
// Create a subclass Dog that inherits from Animal and has an additional property breed.
// Override the speak() method in Dog class to print "Woof! My name is <name>".

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`Speak ${this.name}`);
    }
}

class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    speak(){
        console.log(`Woof! My name is ${this.name}`);
    }
}

const dog1 = new Dog("Buddy", 3, "Labrador");

dog1.speak();   //output: Woof! My name is Buddy
console.log(dog1.name);   //output: Buddy
console.log(dog1.age);    //output: 3
console.log(dog1.breed);  //output: Labrador


// Question 2: Using super()
// In the Dog class constructor, call super(name, age) to inherit parent class properties.
// Create a Dog object and test all properties and methods.

// Question 3: Multiple Objects
// Create 3 Dog objects with different names, ages, and breeds.
// Store them in an array.
// Loop through the array and call speak() for each dog.

const dog2 = new Dog("Max", 5, "German Shepherd");
const dog3 = new Dog("Rocky", 2, "Beagle");
const dog4 = new Dog("Buddy", 3, "Labrador");


const dogs = [dog1, dog2, dog3];

for (let dog of dogs) {
    dog.speak();
}
// output:
// Woof! My name is Buddy
// Woof! My name is Max
// Woof! My name is Rocky


// Question 4: Dynamic Property Assignment
// Create a class User with properties name and email.
// Add a method updateDetails(key, value) to dynamically update any property.
// Test it by updating name and email for a user object.

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    updateDetails(key, value){
        this[key] = value;
    }
}

const user1 = new User("Viplav Budhathoki", "viplav@gmail.com");
console.log(user1); //output: {Viplav Budhathoki, viplav@gmail.com}

user1.updateDetails("name", "Sankalpa Limbu");
user1.updateDetails("email", "Sankalpa@gmail.com");
console.log(user1); //output: {Sankalpa Limbu, sankalpa@gmail.com}