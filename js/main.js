/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

const carouselData = [
    {
        image: "img/riccardo1.jpeg",
        title: "Riccardo 1",
        text: "Meditando"
    },
    {
        image: "img/riccardo2.jpeg",
        title: "Riccardo 2",
        text: "Meglio non dirlo..."
    },
    {
        image: "img/riccardo3.jpeg",
        title: "Riccardo 3",
        text: "Meglio non dirlo...2"
    },
    {
        image: "img/riccardo4.jpeg",
        title: "Riccardo 4",
        text: "Focalizzato"
    },
    {
        image: "img/riccardo5.jpeg",
        title: "Riccardo 5",
        text: "Dab"
    },
];

let carouselContent = '';

for (let i = 0 ; i < carouselData.length ; i++){
    carouselContent += `
    <div class="carousel-element">
        <img src="${carouselData[i].image}" alt="Random picture">
        <div class="item-description px-3">
            <h2>${carouselData[i].title}</h2>
            <p class="fs-5">${carouselData[i].text}</p>
        </div>
    </div>`
}

const carouselWrapper = document.querySelector('div.my-carousel-images');
carouselWrapper.innerHTML += carouselContent;


let carouselthumbnails = '';

for (let i = 0 ; i < carouselData.length ; i++){
    carouselthumbnails += `
    <div class="my-card">
        <img src="${carouselData[i].image}" alt="Random picture">
    </div>`
}

let carouselWrapperthumbnails = document.querySelector('div.my-thumbnails');
carouselWrapperthumbnails.innerHTML += carouselthumbnails;


const carouselElements = document.getElementsByClassName('carousel-element');
carouselElements[0].classList.add('active');
console.log(carouselElements);

const nextButton = document.querySelector('div.my-next');
const previousButton = document.querySelector('div.my-previous');

let activeElement = 0;

document.getElementsByClassName('carousel-element')[activeElement].classList.add('active');
document.getElementsByClassName('my-card')[activeElement].classList.add('active');

nextButton.addEventListener('click', function() {

    document.getElementsByClassName('carousel-element')[activeElement].classList.remove('active');
    document.getElementsByClassName('my-card')[activeElement].classList.remove('active');

    // fa un controllo sul raggiungimento dell'ultimo elemento
    if( activeElement === carouselData.length - 1){
        activeElement = 0;
    } else {
        activeElement++;
    }

    // infine aggiunge ai nuovi elementi selezionati la classe active
    document.getElementsByClassName('carousel-element')[activeElement].classList.add('active');
    document.getElementsByClassName('my-card')[activeElement].classList.add('active');

});

previousButton.addEventListener('click', function() {

    document.getElementsByClassName('carousel-element')[activeElement].classList.remove('active');
    document.getElementsByClassName('my-card')[activeElement].classList.remove('active');

    // fa un controllo sul raggiungimento dell'ultimo elemento
    if( activeElement === 0){
        activeElement = carouselData.length - 1;
    } else {
        activeElement--;
    }

    // infine aggiunge ai nuovi elementi selezionati la classe active
    document.getElementsByClassName('carousel-element')[activeElement].classList.add('active');
    document.getElementsByClassName('my-card')[activeElement].classList.add('active');
});
    