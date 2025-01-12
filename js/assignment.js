"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

//assign var
let num1 = 9
let num2 = 4

// Function to calculate the remainder of two numbers
function returnTheRemainder(num1, num2) {
    return num1 % num2; 
    // Returns remainder of num1 divided by num2
}


// Function to render
function render() {
    // Calculate and display the remainder
    remainderElement.textContent = returnTheRemainder(num1, num2);
}


submissionBtn.addEventListener("click", function () {
    render();
});