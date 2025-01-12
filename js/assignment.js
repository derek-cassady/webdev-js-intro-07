"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

//assign var
let num1 = 5
let num2 = 4
let num3 = 47

// Function to calculate the remainder of two numbers
function returnTheRemainder(num1, num2) {
    return num1 % num2; 
    // Returns remainder of num1 divided by num2
}

// Function to check if a number is even
function checkIfEven(num3) {
    return num3 % 2 === 0; 
    // Returns true if num is divisible by 2
}

// Function to get fourth element of array (0,1,2,3)
function getTheFourthElement(array) {
    return array[3]; 
    // Returns element at index 3
}

// Function to render
function render() {
    // Calculate and display the remainder
    remainderElement.textContent = returnTheRemainder(num1, num2);

    // Check if num3 is even and display result
    checkIfEvenElement.textContent = checkIfEven(num3);

    // Get fourth element in lostNumbers and display
    lostNumbersElement.textContent = getTheFourthElement(lostNumbers);

}


submissionBtn.addEventListener("click", function () {
    render();
});