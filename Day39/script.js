// Day 39

//26. Write a loop using var with setTimeout and observe output.
for (var i = 0; i <= 10; i++){
    setTimeout(()=>{
        console.log(i);
    }, 2000)
}

//27. Fix Question 26 without using let.
for (var i = 0; i <= 10; i++){
    setTimeout((x)=>{
        console.log(x);
    }, 2000, i)
}

//28. Rewrite Question 26 using let.
for (let i = 0; i <= 10; i++){
    setTimeout(()=>{
        console.log(i);
    }, 2000)
}

// Create a closure to fix async loop issue.
for (var i = 0; i <= 10; i++){
    (function(x){              
        setTimeout(()=>{
            console.log(x);    
        }, 2000);
    })(i);                     
}

// Create a countdown timer from 10 to 0.
// Stop countdown at 0 automatically.

let count = 10;
const countdownEl = document.getElementById("countdown");

const countdownInterval = setInterval(() => {
    countdownEl.textContent = count;
    count--;

    if (count < 0) {
        clearInterval(countdownInterval);
        countdownEl.textContent = "Time's up!";
    }
}, 1000); // runs every 1 second
