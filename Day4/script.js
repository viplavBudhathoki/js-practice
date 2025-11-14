// Day 4


//Even/Odd Checker
// Input a number and display whether it is even or odd.
function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`);
}
checkEvenOdd(7); //Output: 7 is Odd

//Factorial Calculator
// Input a number and calculate its factorial using a loop or recursion.
function factorial(n) {
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    return fact;
}
console.log(factorial(5)); //Output: 120

//Fibonacci Sequence Generator
//Generate the first n numbers in the Fibonacci sequence.
function fibonacci(n) {
    let arr = [0,1];
    for(let i=2; i<n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr.slice(0,n);
}
console.log(fibonacci(10)); // [0,1,1,2,3,5,8,13,21,34]

// Simple Interest Calculator
// Calculate simple interest given principal, rate, and time.
function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}
console.log(simpleInterest(1000, 5, 2)); // 100

// Temperature Converter (Celsius ↔ Kelvin)
// A slightly different version from your previous Celsius ↔ Fahrenheit converter.
function celsiusToKelvin(c) {
    return c + 273.15;
}
function kelvinToCelsius(k) {
    return k - 273.15;
}
console.log(celsiusToKelvin(25)); // 298.15
console.log(kelvinToCelsius(300)); // 26.85

// Array Reverse Without Using .reverse()
// Reverse an array manually using a loop.
function reverseArray(arr) {
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray([1,2,3,4])); // [4,3,2,1]

//Find Prime Numbers in an Array
// Input an array and filter out all prime numbers.
function primesInArray(arr) {
    return arr.filter(num => {
        if(num < 2) return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i === 0) return false;
        }
        return true;
    });
}
console.log(primesInArray([2,3,4,5,6,7,8,9,10])); // [2,3,5,7]

// Capitalize Words in a Sentence
// Convert the first letter of each word in a string to uppercase.
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWords("hello viplav how are you")); // Hello Viplav How Are You

// Random Password Generator
// Generate a random password of 6–12 characters with letters, numbers, and symbols.
function randomPassword(length = 8) {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for(let i=0; i<length; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
console.log(randomPassword(10)); // e.g. "aB9#kLp2Q!"

// Number Guessing Game (With Limited Attempts)
// User has 3–5 chances to guess a random number; give feedback after each guess.
function guessNumberGame(secret, maxAttempts=3) {
    for(let i=1;i<=maxAttempts;i++){
        let guess = Math.floor(Math.random()*10)+1; // Random guess simulation
        console.log(`Attempt ${i}: guessed ${guess}`);
        if(guess === secret) {
            console.log("Correct!");
            return;
        } else if(guess < secret) {
            console.log("Too Low!");
        } else {
            console.log("Too High!");
        }
    }
    console.log(`Game Over! The secret number was ${secret}`);
}
guessNumberGame(7, 3);