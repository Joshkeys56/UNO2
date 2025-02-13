
  function changeImage() {
    var img = document.getElementById('image');
    if (window.innerWidth <= 600) {
      img.src = './images/Group 865.png';  // Change image for screens <= 600px
    } else {
      img.src = './images/Frame 871.png';  // Default image
    }
  }

  // Run the function initially
  changeImage();

  // Add an event listener to change the image on window resize
  window.addEventListener('resize', changeImage);







  function updateHeading() {
    let heading = document.getElementById("myHeading");
    if (window.matchMedia("(max-width: 600px)").matches) {
        heading.innerHTML = "Modern way to<br>invest, trade and <br> bank in real estate";
    } else {
        heading.innerHTML = "Modern way to invest, <br> trade and bank in real estate";
    }
}

// Run on load
updateHeading();

// Listen for screen size changes
window.addEventListener("resize", updateHeading);










function updateParagraph() {
    let paragraph = document.getElementById("myParagraph");

    if (window.matchMedia("(max-width: 600px)").matches) {
        paragraph.innerHTML = "Uno gives you access to carefully selected portfolio of <br>global real estate investments to invest in while<br> protecting your health.";
    } 
}

// Run the function on page load
updateParagraph();

// Listen for screen size changes
window.addEventListener("resize", updateParagraph);







function updateParagraph() {
    let paragraph = document.getElementById("mySecondParagraph");

    if (window.matchMedia("(max-width: 600px)").matches) {
        paragraph.innerHTML = "You get a health insurance coverage for <br>everytime you make an investment with Uno";
    } 
}

// Run the function on page load
updateParagraph();

// Listen for screen size changes
window.addEventListener("resize", updateParagraph);
