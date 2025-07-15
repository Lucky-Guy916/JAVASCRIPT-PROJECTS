// While Loop Function
function runWhileLoop() {
    let count = 1;
    let result = "";

// Keep looping while count is 5 or less
while (count <= 5) {
    result += "Count is: " + count + "<br>";
    count++;
}

document.getElementById("whileOutput").innerHTML = result;
}

// For Loop Function
function runForLoop() {
    let result = "";

    // Loop from 0 to 4
    for (let i = 0; i < 5; i++) {
        result += "For loop iteration: " + i + "<br>";
    }
    document.getElementById("forOutput").innerHTML = result;
}

// Function Using an Array
function displayArrayItems() {
    var fruits = ["Apple", "Banana", "Cherry", "Date"];
    let result = "";

    //Loop through the array and add each item to the result
    for (let i = 0; i < fruits.length; i++) {
        result += fruits[i] + "<br>";
    }

    document.getElementById("arrayOutput").innerHTML = result;
}

// Function Using an Object 
function displayCarInfo() {
    // Define an object using let
    let car = {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        color: "blue",
    };

    //Build a string from the object's properties
    let description ="Car Info:<br>";
    description += "Make: " + car.make + "<br>";
    description += "Model: " + car.model + "<br>";
    description += "Year: " + car.year + "<br>";
    description += "Color: " + car.color;

    document.getElementById("objectOutput").innerHTML = description;
}
