

let isFlounderVisible = false;

function showFlounder() {
    let flounderImage = document.getElementById('flounder');
    let flounderPixImage = document.getElementById('flounder_pix');

    if (!isFlounderVisible) {
        flounderImage.style.display = 'block';
        flounderPixImage.style.display = 'none';
        isFlounderVisible = true;
    } else {
        flounderImage.style.display = 'none';
        flounderPixImage.style.display = 'block';
        isFlounderVisible = false;
    }
    
}

function changeImage() {
    let displayImage = document.getElementById('flounder');
    if (displayImage.src.match('flounder.png')) {
        displayImage.src = 'flounder_pix.png';
        // Make the image slightly bigger
        displayImage.style.width = '400px';
        displayImage.style.height = '200px';
    } else {
        displayImage.src = 'flounder.png';
        // Reset the size to the original dimensions
        displayImage.style.width = '100px';
        displayImage.style.height = '50px';
    }
}

document.addEventListener('click', function(event) {
    var image = document.getElementById('flounder_pix');

    // Check if the clicked element is not the image or its ancestor
    if (event.target !== image && !image.contains(event.target)) {
      // Hide the image
      image.style.display = 'none';
    }
  });