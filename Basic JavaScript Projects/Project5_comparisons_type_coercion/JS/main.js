// Use typeof operator to show its data type
var score = 100;
document.write("The data type of 'score' is: " + typeof score + "<br>");

// Combine a string and a number using the + operator
var message = "Your score is: " + score;
document.write("Combined a string and a number " + message + "<br>");

// Define variables
var a = 10;
var b = "10"
var c = 7;
var d = 3;

// This operator checks if the values are equal but ignores type
document.write("a == b " + (a == b) + "<br>") // 10 == "10" is true

// This operator checks if values and types are the same or equal. 
// (must be the same type to be equal)
document.write("a === b " + (a === b) + "<br>"); // 10 === "10" is false

// This operator checks if the first value is greater than the 2nd value
document.write("c > d " + (c > d) + "<br>"); // 7 > 3 is true

// This operator checks if the first number is less than the 2nd number
document.write("c < d " + (c < d) + "<br>"); // 7 > 3 is false

// This operator checks if both sides are true
document.write("(c > d && a > c): " + (c > d && a > c) + "<br>"); 
// 7 > 3 and 10 > 7 both are true

// This operator checks if at least one of the two sides are true
document.write("(c < d || b === b ): " + (c < b || b === b) + "<br>");
// 7 < 3 or "10" = to "10". One side is true so it is true

// This operator checks if something is false
function not_Function() {
    document.getElementById("Not").innerHTML = !(c > d);
} // 7 > 3 is true so the not operator should return false