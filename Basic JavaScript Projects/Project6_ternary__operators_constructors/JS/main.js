// Function using a ternary operator with input
function checkAge() {
  var age = document.getElementById("ageInput").value;

  // Use ternary operator to check voting eligibility
  var message = (age >= 18)
    ? "You are eligible to vote."
    : "You are NOT eligible to vote.";

  // Display result
  document.getElementById("ageResult").innerText = message;
}

// Constructor function using "this" and "new"
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Function to create a Vehicle object and display it
function createVehicle() {
  // Get input values from form fields
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  var year = document.getElementById("year").value;

  // Create a new Vehicle object
  var myCar = new Vehicle(make, model, year);

  // Display the vehicle information
  document.getElementById("vehicleResult").innerText =
    "You created a " + myCar.year + " " + myCar.make + " " + myCar.model + ".";
}

// Nested function example
function runNested() {
  // Outer function defines a local variable
  function outerFunction() {
    let baseNumber = 5;

    // Inner function (nested) modifies baseNumber
    function innerFunction() {
      baseNumber += 10; // add 10
    }

    innerFunction(); // call nested function
    return baseNumber; // return updated value
  }

  // Display result of outer function
  document.getElementById("nestedResult").innerText =
    "Nested function result: " + outerFunction();
}
