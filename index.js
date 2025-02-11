
  function changeImage() {
    var img = document.getElementById('image');
    if (window.innerWidth <= 600) {
      img.src = '/Users/sph/Desktop/web development/UNO FINANCE/images/Group 865.png';  // Change image for screens <= 600px
    } else {
      img.src = '/Users/sph/Desktop/web development/UNO FINANCE/images/Frame 871.png';  // Default image
    }
  }

  // Run the function initially
  changeImage();

  // Add an event listener to change the image on window resize
  window.addEventListener('resize', changeImage);

