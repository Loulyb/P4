slider_top
let indexSliderTop = 0;
sliderTop ();

function sliderTop() {
    // Variabel der holder styr på hvilket billede der vises
    let i;

    // Finder alle elementer med klassen img-top og gemmer dem i et array
    const images = document.getElementsByClassName("img-top");

    // Looper gennem imagges array og skjuler alle elementerne
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    // Øger indexSliderTop med 1 og sikrer at nummeret forbliver indenfor antallet af billeder
    indexSliderTop++;
    if (indexSliderTop > images.length) {
        indexSliderTop = 1;
    }

    // Viser ét billede ved at sætte displey style til block
    images[indexSliderTop-1].style.display = "block"


   // setTimeout kalder displayImages funktionen efter et delay på 4 sek
    setTimeout(sliderTop, 4000);
}

//start på slideshow

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

//Slut på slide show

//Start på book bord

document.getElementById('openBooking').addEventListener('click', function() {
    let bookingPopup = document.getElementById('bookingPopup');
    if (bookingPopup.style.display === 'block') {
        bookingPopup.style.display = 'none'; // Skjul popup'en, hvis den allerede er åben
    } else {
        bookingPopup.style.display = 'block'; // Ellers åbn popup'en
    }
});

document.getElementById('closeBooking').addEventListener('click', function() {
    let bookingPopup = document.getElementById('bookingPopup');
    bookingPopup.style.display = 'none'; // Luk popup'en
});

// Opret et tomt array til at gemme bookingoplysninger
let bookings = [];

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let bookingDetails = {};
    formData.forEach(function(value, key){
        bookingDetails[key] = value;
    });

    // Tilføj bookingoplysningerne til bookings-arrayet
    bookings.push(bookingDetails);

    // Udskriv bookingoplysningerne til konsollen
    console.log(bookingDetails); 

    // Udskriv alle bookinger til konsollen
    console.log(bookings);

    // Luk booking-popup'en
    document.getElementById('bookingPopup').style.display = 'none';
});

//Slut på book bord
