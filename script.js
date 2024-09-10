const bilder =  [
    {
    bild:'img/hast.jpg',
    rubrik:'Hästar',
    text: 'Hästar är coola, tänk Bojack. Nostrum sit unde expedita illum et. Ut explicabo non deserunt aspernatur et. Libero qui officia aliquid velit quis. Est provident quaerat accusamus ab quo. Eum ut dolorum exercitationem molestiae aut et. Placeat earum iure repellat ipsum expedita modi.'
    },
    {
    bild:'img/hund.jpg',
    rubrik:'Hundar',
    text: 'Hundar är coola, tänk Paw Patrol. Nostrum sit unde expedita illum et. Ut explicabo non deserunt aspernatur et. Libero qui officia aliquid velit quis. Est provident quaerat accusamus ab quo. Eum ut dolorum exercitationem molestiae aut et. Placeat earum iure repellat ipsum expedita modi.'
    },
    {
    bild:'img/varg.jpg',
    rubrik:'Vargar',
    text: 'Vargar är coola, tänk Minecraft. Nostrum sit unde expedita illum et. Ut explicabo non deserunt aspernatur et. Libero qui officia aliquid velit quis. Est provident quaerat accusamus ab quo. Eum ut dolorum exercitationem molestiae aut et. Placeat earum iure repellat ipsum expedita modi.'
    }
]; 

// Nuvarande bild
let nuvarandeImage = 0;

// Funktion förra bild
function forraBild () {
    nuvarandeImage--;
    if (nuvarandeImage < 0) {
        nuvarandeImage = bilder.length - 1;
    }
    uppdateraBild();
}

// Funktion nästa bild
function nastaBild () {
    nuvarandeImage++;
    if (nuvarandeImage >= bilder.length) {
        nuvarandeImage = 0;
    }
    uppdateraBild();
}

// Funktion uppdatera bild
function uppdateraBild () {
    const bildElement = document.getElementById('slide-img');
    const rubrikElement = document.getElementById('slide-heading');
    const textElement = document.getElementById('slide-text');
    const nrElement = document.getElementById('slide-nr');

    // Uppdatera bild
    bildElement.src = bilder [nuvarandeImage].bild;

    //Uppdatera slide nummer, rubrik och text 
    rubrikElement.innerText = bilder[nuvarandeImage].rubrik;
    textElement.innerText = bilder[nuvarandeImage].text;
    nrElement.innerText = 'Slide nummer: ' + (nuvarandeImage + 1) ; 
}

// Visa första bilden då sidan laddar
document.addEventListener("DOMContentLoaded", function() {
    uppdateraBild();
});