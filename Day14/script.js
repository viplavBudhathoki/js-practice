// Write your own version of map() using callbacks.
function sampleMap(array, callback){
    let result = [];

    for (let i = 0; i < array.length; i++){
        result.push(callback(array[i]), i, array);
    }

    return result;
}

let numbers = [1,2,3,4,5];

let doubled = sampleMap(numbers, function(num){
    return num * 2;
});

console.log(doubled); //output: 2,4,6,8,10


// Write your own version of filter() using callbacks.
function sampleFilter(array, callback){
    let result = [];

    for (let i = 0; i < array.length; i++){

        let decision = callback(array[i], i, array);

        if (decision) {
            result.push(array[i]);
        }
    }

    return result;
}

let strings = ["Viplav", "Sankalpa", "Saphal", "Monica"];

let selected = sampleFilter(strings, function(str){
    return str.startsWith("V"); 
});

console.log(selected); //output: ["Viplav"]


// Write your own version of reduce() using callbacks.
function sampleReduce(array, callback, initialValue) {

    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {

        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

let nums = [1, 2, 3, 4, 5];

let add = sampleReduce(nums, function(acc, curr) {
    return acc + curr;
}, 0);  // initialValue = 0

console.log(add); // 15

// Write a function that sorts an array using a callback comparison function.

// Create a function that checks if any element passes a callback test.
function sampleSome(array, callback) {
    for (let i = 0; i < array.length; i++) {

        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

let n = [1, 3, 5, 7, 8];

let hasEven = sampleSome(n, function(num) {
    return num % 2 === 0;
});

console.log(hasEven); 

let greaterThanTen = sampleSome(n, function(num) {
    return num > 10;
});

console.log(greaterThanTen); // false


// Create a function that checks if all elements pass a callback test.
function sampleEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

let numbs = [2, 4, 6, 8];

let allEven = sampleEvery(numbs, function(num) {
    return num % 2 === 0;
});

console.log(allEven); // true

let allGreaterThanFive = sampleEvery(numbs, function(num) {
    return num > 5;
});

console.log(allGreaterThanFive); // false


// Write a function that applies two callbacks in sequence to a value.
function applyTwoCallbacks(value, callback1, callback2) {
    let firstResult = callback1(value);

    let secondResult = callback2(firstResult);

    return secondResult;
}

function double(num) {
    return num * 2;
}

function addThree(num) {
    return num + 3;
}

let result = applyTwoCallbacks(5, double, addThree);

console.log(result); // 13
