// Day 36

// Print "Hello World" every 1 second.
function every1Second(){
    setInterval(()=>{
        console.log("Hello World!!!");
    }, 1000)
};

every1Second();

// Create a counter that prints numbers starting from 1 every second.
let number = 1;

function start(){
    setInterval(()=>{
        console.log(number);
        number++;
    }, 1000)
}

start();

// Stop the counter automatically when it reaches 10.
let count = 0;
function counter(){
    const id = setInterval(()=>{
        console.log(count);

        if (count === 10){
            clearInterval(id);
        }

        count++;
    }, 1000)
}

counter();

// Create a timer that prints "Tick" every 2 seconds and stops after 10 seconds.
function timer(){
    let elapsed = 0;
    const id = setInterval(()=>{
        elapsed += 2;
        console.log("Tick");

        if (elapsed === 10){
            clearInterval(id);
        }
    }, 2000)
}

timer();

// Use setInterval to create a simple digital clock (HH:MM:SS).
function digitalClock(){
    setInterval(()=>{
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}

digitalClock();