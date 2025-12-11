// DAY 24 - EXERCISE SET (Scope, Hoisting, Closures)

// Q1: Global + Function Scope

let x = 10;

function testing(){
    let x = 20;
    console.log(x); //output: 20
}

testing(); //output: 20
console.log(x); //output: 10


// Q2: Block Scope

if(true){
    let name = "Sankalpa";
}

console.log(name); //output: error (name is not defined)


// Q3: var vs let

if (true){
    var a = 100;
    let b = 200;
}

console.log(a); //output: 100
console.log(b); //output: error (b is not defined)


// Q4: Hoisting (var)

console.log(number);
var number = 5; //output: undefined (var is hoisted and initialized as undefined.)


// Q5: Hoisting (let)

console.log(age);
let age = 23; //output: error (Cannot access 'age' before initialization)


// Q6: Function Hoisting

name();
function name(){
    console.log("Viplav Budhathoki");
}


// Q7: Function Expression Hoisting

add();
var add = function(){
    console.log("Added"); //output: add is not a function (var add is hoisted as undefined but the function is assigned after the call)
};


// Q8: Closure Basic

function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}

let c = outer();
c(); //output: 1
c(); //output: 2
c(); //output: 3


// Q9: Closure + Private Variable

function createCounter() {
    let count = 0; 

    return {
        inc: function () {
            count++;
            console.log(count);
        },
        dec: function () {
            count--;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log(count);
        }
    };
}

let counter = createCounter();

counter.inc();   // 1
counter.inc();   // 2
counter.dec();   // 1
counter.reset(); // 0


// Q10: Closure Returning Functions

function makeMultiplier(x){
    return function(y){
        return x * y;
    }
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);

console.log(double(5)); //output: 10
console.log(triple(5)); //output: 15


// Q11: Loop + Closure (var bug)

function makeArr() {
    let arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
}

let fns = makeArr();
fns[0](); //4
fns[1](); //4
fns[2](); //4


// Q12: Fix above using let

function makeArr() {
    let arr = [];
    for (let i = 1; i <= 3; i++) {   // let is block-scoped
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
}

let fn = makeArr();
fn[0](); // 1
fn[1](); // 2
fn[2](); // 3


// Q13: Nested Closures

function a() {
    let x = 10;
    function b() {
        let y = 20;
        function c() {
            console.log(x, y);
        }
        return c;
    }
    return b();
}

let functions = a();
functions(); //output: 10 20


// Q14: Closure Timer

function createTimer() {
    let time = 0;      // private variable
    let timerId = null; // holds setInterval ID

    return {
        start: function() {
            if (!timerId) { // prevent multiple intervals
                timerId = setInterval(() => {
                    time++;
                    console.log("Time:", time);
                }, 1000);
            }
        },
        stop: function() {
            clearInterval(timerId);
            timerId = null;
        },
        reset: function() {
            time = 0;
            console.log("Timer reset to", time);
        }
    };
}

let timer = createTimer();

timer.start(); // starts counting every second
timer.stop();  // stops the timer
timer.reset(); // resets to 0
