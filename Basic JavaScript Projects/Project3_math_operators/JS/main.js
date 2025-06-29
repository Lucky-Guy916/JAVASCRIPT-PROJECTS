console.log("✅ mathFunctions.js loaded");

const result = document.getElementById("Math");

// Addition
function addNumbers() {
  var a = 10;
  var b = 5;
  var sum = a + b;
  result.innerText = "Addition: " + a + " + " + b + " = " + sum;
}

// Subtraction
function subtractNumbers() {
  var a = 10;
  var b = 5;
  var difference = a - b;
  result.innerText = "Subtraction: " + a + " - " + b + " = " + difference;
}

// Multiplication
function multiplyNumbers() {
  var a = 10;
  var b = 5;
  var product = a * b;
  result.innerText = "Multiplication: " + a + " * " + b + " = " + product;
}

// Modulus
function modulusNumbers() {
  var a = 11;
  var b = 5;
  var remainder = a % b;
  result.innerText = "Modulus: " + a + " % " + b + " = " + remainder;
}

// Increment
function incrementNumber() {
  var num = 1;
  num++;
  result.innerText = "Increment: starting at 1 → " + num;
}

// Decrement
function decrementNumber() {
  var num = 100;
  num--;
  result.innerText = "Decrement: starting at 100 → " + num;
}

// Random number
function showRandomNumber() {
  var rand = Math.floor(Math.random() * 100);
  result.innerText = "Random number: " + rand;
}

// Event bindings
document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subtractBtn").addEventListener("click", subtractNumbers);
document.getElementById("multiplyBtn").addEventListener("click", multiplyNumbers);
document.getElementById("modulusBtn").addEventListener("click", modulusNumbers);
document.getElementById("incrementBtn").addEventListener("click", incrementNumber);
document.getElementById("decrementBtn").addEventListener("click", decrementNumber);
document.getElementById("randomBtn").addEventListener("click", showRandomNumber);

