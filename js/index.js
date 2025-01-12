// Prevent us from attempting to use variables
// that are not declared
"use strict"

// Function to calculate square of a num

// let num = 5

// function square(num) {
//     return num * num; 
//     // Returns the square
// }

// // Call function and log 
// console.log(square(num)); // 25

// Function to add two numbers

// let a = 5
// let b = 6

// function add(a, b) {
//     return a + b; 
//     // Return sum of a + b
// }

// // Call function log
// console.log(add(a, b)); // 11

// Function to greet a user

// let user = "Derek"

// function greet(user) {
//     console.log("Hello, " + user + "!"); 
//     // Log a greeting
// }

// // Call the function
// greet(user); // Hello, Derek!

// Function with default parameter

let user = "Derek"

function greet(name = "Guest") {
    console.log("Hello, " + name + "!"); 
    // Log a greeting
}

// Call function without name
greet(); //Hello, Guest!

greet(user) //Hello, Derek!

