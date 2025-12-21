// Day 30 - Exercise

// Q4. Person -> Student Inheritance

// Create:
// Person(name)
// method: introduce()
// Student(name, course)
// method: study()

// Requirements:
// Use constructor functions
// Use call
// Use Object.create
// Fix constructor reference

function Person(name){
    this.name = name;
}

Person.prototype.introduce = function(){
    console.log("Hello, My name is" + this.name);
};

function Student(name, course){
    Person.call(this, name);        // Memory Trick (Easy to Remember)
    this.course = course;           // new Student() → creates new object (s1) // this → points to that new object // Person.call(this, name) → runs Person constructor on s1, copying its properties
};                                  // So yes: // name is “inherited” from Person // .call() is used for inheritance of properties // But the object is created by new Student(), not .call()

// Inherit methods from Person
Student.prototype = Object.create(Person.prototype);

// Fix constructor reference
Student.prototype.constructor = Student;

// Add Student-specific method
Student.prototype.study = function() {
    console.log(this.name + " is studying " + this.course);
};

// Method override for Question no 6
Student.prototype.introduce = function(){
    Person.prototype.introduce.call(this);
    console.log("I am " + this.name + "and I study " + this.course); // To reuse a parent method in a child object: always use Parent.prototype.method.call(this)
}

let s1 = new Student("Viplav", "Computer Science");
s1.introduce(); //output: Hello, my name is Viplav
s1.study();     //output: Viplav is studying Computer Science


// Q5. Prototype Chain Check

// Using s1, check and log:

// Object.getPrototypeOf(s1)
// Object.getPrototypeOf(Student.prototype)
// Explain in comments what each one points to.

console.log(Object.getPrototypeOf(s1)); //output: Student.prototype { study: [Function] }
// Object.getPrototypeOf(s1) points to Student.prototype
// This is the object where all Student-specific methods (like study) are stored.
// This is the first link in the prototype chain for s1.


console.log(Object.getPrototypeOf(Student.prototype)); //output: Person.prototype { introduce: [Function] }
// Object.getPrototypeOf(Student.prototype) points to Person.prototype
// This is because we did: Student.prototype = Object.create(Person.prototype)
// All Person methods (like introduce) are available to Student objects through the prototype chain


// Q6. Method Override

// Override introduce() in Student so that:
// s1.introduce();
// I am Viplav and I study JavaScript

// Still reuse Person logic.


// Q7. Count Instances

// Create a constructor User.
// Each time a new user is created:
// Increase a counter
// Store counter on prototype (not global)

// Test
// new User();
// new User();
// new User();

// console.log(User.prototype.count); // 3

function User() {
    // Check if the count property on User.prototype does not exist yet
    if (typeof User.prototype.count === "undefined") {
        // Initialize the count property on the prototype to 0
        User.prototype.count = 0;
    }

    // Increment the count by 1 every time a new User instance is created
    User.prototype.count++;
}

// Test by creating three new User objects
new User(); // 1st user created → count becomes 1
new User(); // 2nd user created → count becomes 2
new User(); // 3rd user created → count becomes 3

// Log the current count stored on the User prototype
console.log(User.prototype.count); //output: 3
