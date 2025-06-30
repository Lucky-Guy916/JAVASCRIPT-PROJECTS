// Create a dictionary object with KVPs
var myProfile = {
  name: "Adam",
  age: 44,
  hobby: "Gaming",
  favoriteFood: "Cookies",
  city: "Citrus Heights"
};

 
// Function to output a value from the dictionary
function showFavoriteFood() {
    
    // This deletes the favoiteFood statement before its value is displayed
    delete myProfile.favoriteFood;

    // Display the value of "favoriteFood" in the HTML paragraph
    document.getElementById("Dictionary").innerHTML = 
    "Favorite Food: " + myProfile.favoriteFood;
}