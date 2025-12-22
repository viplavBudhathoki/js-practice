// Day 31

// Q8. Shape -> Rectangle -> Square
// Create inheritance chain:
// Shape
//  └── Rectangle
//       └── Square

// Requirements:
// Shape -> getType()
// Rectangle -> getArea()
// Square -> inherits Rectangle

// Test
// const sq = new Square(5);
// sq.getType();  // Shape
// sq.getArea();  // 25

function Shape(){

}

Shape.prototype.getType = function(){
    return "Shape";
}

function Rectangle(height, width){
    this.height = height;
    this.width = width;
}

// inheriting from shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Rectangle method
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

// Square (Child of Rectangle) 
function Square(side) {
    Rectangle.call(this, side, side);
}

// Inherit from Rectangle
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// ===== Test =====
const sq = new Square(5);
console.log(sq.getType()); //output: Shape
console.log(sq.getArea()); //output: 25


// Q9. User -> Admin -> SuperAdmin

// Create inheritance chain:
// User
//  └── Admin
//       └── SuperAdmin

// Requirements:
// User -> getRole()
// Admin -> getPermissions()
// SuperAdmin -> inherits Admin

// Test:
// const sa = new SuperAdmin();
// sa.getRole();        // User
// sa.getPermissions(); // Admin permissions

// Q9. User -> Admin -> SuperAdmin

function User() {}

User.prototype.getRole = function () {
    return "User Role";
};

function Admin() {}

// Inherit from User
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

// Add Admin method
Admin.prototype.getPermissions = function () {
    return "Admin permissions";
};

// SuperAdmin (Child of Admin) 
function SuperAdmin() {}

// Inherit from Admin
SuperAdmin.prototype = Object.create(Admin.prototype);
SuperAdmin.prototype.constructor = SuperAdmin;

// Testing
const sa = new SuperAdmin();

console.log(sa.getRole());        //output: User Role
console.log(sa.getPermissions()); //output: Admin permissions


// Q10. Animal -> Mammal -> Dog

// Create inheritance chain:
// Animal
//  └── Mammal
//       └── Dog

// Requirements:
// Animal -> getType()
// Mammal -> hasFur()
// Dog -> inherits Mammal

// Test:
// const dog = new Dog();
// dog.getType(); // Animal
// dog.hasFur();  // true

// Q10. Animal → Mammal → Dog

function Animal() {}

Animal.prototype.getType = function () {
    return "Animal";
};

function Mammal() {}

// Inherit from Animal
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

// Add Mammal method
Mammal.prototype.hasFur = function () {
    return true;
};

// Dog (Child of Mammal) 
function Dog() {}

// Inherit from Mammal
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

//Test 
const dog = new Dog();

console.log(dog.getType()); // Animal
console.log(dog.hasFur());  // true
