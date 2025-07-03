// Global variable
var tempThreshold = 75; // accessible anywhere in the script

// Function using local variable and an if statement
function checkTemperature() {
  // Local variable
  var currentTemp = 80;

  // Use an if statement to compare the values
  if (currentTemp > tempThreshold) {
    document.getElementById("tempResult").innerText =
      "It's hot outside! (" + currentTemp + "°F)";
  } else {
    document.getElementById("tempResult").innerText =
      "Temperature is comfortable.";
  }
}

// Intentionally broken function with debugging
function brokenFunction() {
  let number = 10;

  // Intentional typo: misspelled variable name
  // console.log(numer); // This will throw a ReferenceError

  // Debug the correct value
  console.log("Debug: number is", number);
}

// Time_function() that outputs a greeting based on time
function Time_function() {
  var time = new Date().getHours(); // Get current hour (0–23)
  var greeting;

  // Determine greeting based on time
  if (time < 12) {
    greeting = "Good morning!";
  } else if (time < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  // Output result to HTML
  document.getElementById("timeResult").innerText = greeting;
}
