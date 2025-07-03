// Countdown function with a timer from 10 to 0
function countdown() {
  let count = 10;

  // Set interval to update every 1 second
  var timer = setInterval(function () {
    document.getElementById("countdownDisplay").innerText = "Countdown: " + count;

    // When countdown reaches 0, stop the interval and update the message
    if (count === 0) {
      clearInterval(timer);
      document.getElementById("countdownDisplay").innerText = "Time's up!";
    }

    count--; // Decrease the count by 1
  }, 1000);
}

// Basic slideshow
var images = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg"
];

let currentIndex = 0;

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
}

// Helper function to update the image source
function updateSlide() {
  document.getElementById("slideshowImage").src = images[currentIndex];
}

// Show the first slide as soon as the page loads
updateSlide()
