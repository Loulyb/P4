document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slidess');

    // Loop through each slideshow
    slides.forEach(slidess => {
        const images = slidess.querySelectorAll('img');
        
        let currentSlide = 0;
        let slideshowInterval;

        // Function to display the current slide
        function showSlide(index) {
            images.forEach(image => {
                image.style.display = 'none';
            });

            // Display the current image
            images[index].style.display = 'block';
        }

        // Function to move to the next slide
        function nextSlide() {
            currentSlide++;
            if (currentSlide >= images.length) {
                currentSlide = 0; 
            }
            showSlide(currentSlide);
        }

        // Function to start the slideshow
        function startSlideshow() {
            slideshowInterval = setInterval(nextSlide, 2000);
        }

        // Function to stop the slideshow
        function stopSlideshow() {
            clearInterval(slideshowInterval);
        }

        // Show the first slide initially
        showSlide(currentSlide);

        // Automatically advance to the next slide every 2 seconds
        startSlideshow();

        // Add event listeners for hover
        slidess.addEventListener('mouseenter', stopSlideshow);
        slidess.addEventListener('mouseleave', startSlideshow);
    });
});










