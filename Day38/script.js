// Day 38

// Create a function delay(ms, callback) that executes callback after ms.
function delay(ms, callback){
    setTimeout(callback, ms);
}

delay(2000, ()=>{
    console.log("This runs after 2 seconds.")
})


// Use callback to print "Task finished" after 3 seconds.
function delay1(ms, callback){
    setTimeout(callback, ms);
}

delay1(3000, ()=>{
    console.log("Task Finished.")
})


// Create a callback chain of at least 4 steps using setTimeout.
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 completed");
        callback();
    }, 1000);
}
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("All steps finished!");
            });
        });
    });
});


// Demonstrate callback hell using 3 nested setTimeout calls.
setTimeout(() => {
    console.log("Step 1 completed");

    setTimeout(() => {
        console.log("Step 2 completed");

        setTimeout(() => {
            console.log("Step 3 completed");
        }, 1000); 

    }, 1000); 

}, 1000); 


// Write code where output order is:

// Start
// End
// Middle
// using setTimeout.

console.log("Start");

setTimeout(() => {
    console.log("Middle");
}, 0);

console.log("End");


// Write code where "B" prints before "A" even though "A" comes first.
setTimeout(() => {
    console.log("A"); 
}, 1000);

console.log("B"); 


// Write code where a variable changes after delay but logs old value.
var x = 1;

setTimeout(() => {
    console.log("Old x value:", x);
}, 1000);

x = 2;


// Fix the above code so it logs updated value.
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i); 
    }, 1000);
}


// Write a loop with setTimeout that prints 1 2 3 4 5.
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log("Sequential loop:", i);
    }, i * 1000);
}