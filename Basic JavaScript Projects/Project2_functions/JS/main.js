// Define the combineTexts function
function combineTexts() {
    console.log("🔁 combineTexts called");

// Created two variables to store the text from both paragraphs
    var firstText = document.getElementById("text1").innerText;
    var secondText = document.getElementById("text2").innerText;

// Combline the two strings and display the result 
// Add += so the result will appear each time the button is clicked
    document.getElementById("result").innerText += "\n" + firstText + " " + secondText;
}

