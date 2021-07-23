
// DOM OBJECT ASSIGNMENTS

let ctaBtnPlan = document.querySelector('#plan-button');
let ctaBtnMix = document.querySelector('#mix-button');
let ctaBtnOrder = document.querySelector('#order-button');

let pxBack = document.querySelector('.l-body-wrapper--contact');

let lightboxPane = document.querySelector('.lightbox');
let lightboxImg = document.querySelector('.lightbox img');

// CTA BUTTONS 

ctaBtnPlan.addEventListener('click', () => {
    window.location.href = '#pick-plan';
    window.scrollBy(0, -50);
});

ctaBtnMix.addEventListener('click', () => {
    window.location.href = '#pick-mix';
    window.scrollBy(0, -50);
});

ctaBtnOrder.addEventListener('click', () => {
    window.location.href = '#order-form';
    window.scrollBy(0, -50);
});

// PARALLAX

document.addEventListener('scroll', () => {
    let imageOffsetRatio = 470;
    let amount = ( window.scrollY / imageOffsetRatio ) * 100;
    let string = `-${amount}px`;
    pxBack.style.backgroundPositionY = string;
});

// LIGHTBOX

let lightboxBool = false;

function lightbox() {
    if (lightboxBool === true) {
        lightboxPane.style.opacity = '0';
        lightboxPane.pointerEvents = 'none';

    } else if (lightboxBool === false) {
        lightboxPane.pointerEvents = 'auto';
        lightboxPane.style.opacity = '1';
    }
    lightboxBool = !lightboxBool;
}

function runLightbox(input) {
    lightboxPane.pointerEvents = 'auto';
    lightboxImg.attributes.src.value = `/images/greens/${input}`;
    lightbox();
}

function lightboxOff() {
    lightbox();
}

// PLANE ANIMATION 

let plane = document.querySelector('#wyld-plane');

function fromRight() {
    plane.classList.add('plane-go-right');
}