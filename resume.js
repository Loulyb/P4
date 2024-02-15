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