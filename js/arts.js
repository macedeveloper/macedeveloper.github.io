document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    
    // Get all clickable images
    var images = document.querySelectorAll('.clickable-image');
    
    // Loop through each image and add click event
    images.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src; // Set the source of the modal image to that of the clicked image
        }
    });

    // When the user clicks on <span> (x), close the modal
    var span = document.getElementById("modal-close");
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking anywhere outside of the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Close modal when pressing the ESC key
    window.addEventListener('keydown', function(event) {
        if (event.key === "Escape") { // Check if the pressed key is ESC
            modal.style.display = "none"; // Close the modal
        }
    });
});
