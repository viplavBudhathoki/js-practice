// Day 35

// setTimeout
// setTimeout runs a function once after a specified delay (in milliseconds).
// syntax: setTimeout(function, delay_in_ms, arg1, arg2, ...);

// Example
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

// Delay is optional; default is 0.
// We can pass extra arguments to the callback.

// Example with arguments
function hello (name) {
    console.log("Hello " + name);
}

setTimeout(hello, 1000, "Viplav"); //output: "Hello Viplav" after 1 second


// setInterval
// setInterval repeatedly runs a function every specified interval until you stop it with clearInterval.

// syntax: setInterval(function, interval_in_ms);

// Example
let counter = 0;

const intervalId = setInterval(() => {
    counter++;
    console.log("Counter:", counter);

    if (counter === 5) {
        clearInterval(intervalId); // stop after 5 counts
        console.log("Interval stopped");
    }
}, 1000);

//output: 
// Counter: 1
// Counter: 2
// Counter: 3
// Counter: 4
// Counter: 5
// Interval stopped


// LEVEL 1: BASIC TIMER PRACTICE

// Write code that prints "Hello" after 2 seconds.
const id = setInterval(() => {
    console.log("Hello");
}, 1000);

setTimeout(() => {
    clearInterval(id);
    console.log("Stopped!");
}, 5000);


// Print numbers from 1 to 5, each number after 1 second delay.
function number(){
    for (let i = 1; i <= 5; i++){
        setTimeout(()=>{
            console.log(i);            
        }, i * 1000)
    }
}

number();


// Print "Done" after 3 seconds using an arrow function.
function done(){
    setTimeout(()=>{
        console.log("Done");
    }, 3000)
}
done();


// Store setTimeout in a variable and cancel it before execution.
function CancelTimeout(){
    setTimeout(()=>{
        console.log("This can not run.");
    }, 3000)
    clearTimeout(CancelTimeout);
}
CancelTimeout();


// Print "Start", then "Middle" after 1 second, then "End" after 2 seconds.
function SMS(){
    console.log("Start");

    setTimeout(()=>{
        console.log("Middle");
    }, 1000)

    setTimeout(()=>{
        console.log("End");
    }, 2000)
}

SMS();