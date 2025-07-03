// concat() - joins two or more strings
function concatStrings() {
  let part1 = "JavaScript is";
  let part2 = " awesome!";
  let fullSentence = part1.concat(part2); // Concatenates the two strings

  // Display result
  document.getElementById("concatResult").innerText = fullSentence;
}

// slice() - extracts a section of a string
function sliceString() {
  let text = "Hello, Citrus Heights!";
  let sliced = text.slice(7, 13); // Extracts "Citrus"

  // Display result
  document.getElementById("sliceResult").innerText = "Sliced text: " + sliced;
}

// toString() - converts a number to a string
function convertToString() {
  let number = 2025;
  let strVersion = number.toString(); // Converts number to string

  // Display result
  document.getElementById("toStringResult").innerText =
    "Number as string: " + strVersion + " (type: " + typeof strVersion + ")";
}

// toPrecision() - formats a number to a specified length
function usePrecision() {
  let num = 3.1415926535;
  let precise = num.toPrecision(4); // Rounds to 4 significant digits

  // Display result
  document.getElementById("precisionResult").innerText =
    "Rounded to precision: " + precise;
}
