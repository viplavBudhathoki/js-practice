// Write a function that takes an array and a callback, and returns the first matching value.
function sampleFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

let nums = [3, 8, 11, 14, 20];

let firstEven = sampleFind(nums, function(n) {
    return n % 2 === 0;
});

console.log(firstEven); // 8


// Implement a function that repeatedly calls a callback every second for 5 seconds.
function repeatCallback(callback) {
    let count = 0;

    let intervalId = setInterval(function() {
        callback(count);    
        count++;

        if (count === 5) {   
            clearInterval(intervalId);
        }
    }, 1000);
}

repeatCallback(function(i) {
    console.log("Called:", i);
});
//Output:
// Called: 0
// Called: 1
// Called: 2
// Called: 3
// Called: 4


// Write a function chainFunctions(f1, f2, f3) that passes output of one into the next.
function chainFunctions(f1, f2, f3) {
    return function(value) {
        let r1 = f1(value);
        let r2 = f2(r1);
        let r3 = f3(r2);
        return r3;
    };
}
function double(x) { return x * 2; }
function square(x) { return x * x; }
function minus5(x) { return x - 5; }

let chained = chainFunctions(double, square, minus5);

console.log(chained(3)); 
// double(3)=6-> square(6)=36-> minus5(36)=31


// Create a function that memoizes another function (stores results & reuses them).
function memoize(fn) {
    let cache = {};

    return function(x) {
        if (cache[x] !== undefined) {
            return cache[x]; 
        }

        let result = fn(x);  
        cache[x] = result;  
        return result;
    };
}
function slowSquare(n) {
    console.log("Calculating...");
    return n * n;
}

let memoSquare = memoize(slowSquare);

console.log(memoSquare(5)); // Calculating... -> 25
console.log(memoSquare(5)); // no calculation -> 25


// Write a compose() function that takes multiple callbacks and returns a new function.
function compose(...functions) {
    return function(value) {
        return functions.reduceRight(function(acc, fn) {
            return fn(acc);
        }, value);
    };
}

const add2 = x => x + 2;
const triple = x => x * 3;
const square = x => x * x;

let composed = compose(square, triple, add2);

console.log(composed(2));
// add2(2)=4 -> triple(4)=12 -> square(12)=144


// Write a function that receives asynchronous callbacks and executes them in order.
function runAsyncInOrder(callbacks) {
    let i = 0;

    function next() {
        if (i >= callbacks.length) return;
        callbacks[i](function() {
            i++;
            next();
        });
    }

    next();
}
runAsyncInOrder([
    function(done) {
        setTimeout(() => {
            console.log("Task 1 done");
            done();
        }, 1000);
    },
    function(done) {
        setTimeout(() => {
            console.log("Task 2 done");
            done();
        }, 500);
    },
    function(done) {
        setTimeout(() => {
            console.log("Task 3 done");
            done();
        }, 800);
    }
]);
//Output:
// Task 1 done
// Task 2 done
// Task 3 done
