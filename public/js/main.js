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
    let amount = (window.scrollY / imageOffsetRatio) * 100;
    let string = `-${amount}px`;
    pxBack.style.backgroundPositionY = string;
});

// LIGHTBOX

let lightboxBool = false;

function closeLightbox() {
    console.log(lightboxBool)
    window.removeEventListener('click', closeLightbox, false)
    
    if (lightboxBool === true) {
        lightboxPane.style.opacity = '0';
        lightboxPane.pointerEvents = 'none';
        lightboxBool = false;
    }
}

function openLightbox() {
    if (lightboxBool === false) {
        lightboxPane.pointerEvents = 'auto';
        lightboxPane.style.opacity = '1';
        lightboxBool = true;
        setTimeout(() => {
            window.addEventListener('click', closeLightbox, false)
        }, 10);
    }
}

function runLightbox(input) {
    lightboxPane.pointerEvents = 'auto';
    lightboxImg.attributes.src.value = `/images/greens/${input}`;
    openLightbox();
}

// PLANE ANIMATION 

let plane = document.querySelector('#wyld-plane');

function fromRight() {
    plane.classList.add('plane-go-right');
}

let planeWrap = document.querySelector('.plane-wrap');
let bannerWrap = document.querySelector('.banner-wrap');

function planeUp() {
    planeWrap.classList.add('plane-wrap-up');
    bannerWrap.classList.add('banner-wrap-up');
    setTimeout( () => {
        plane.style.top = '450px';
    }, 300 )
    setTimeout( () => {
        planeLevel();
    }, 8300)

}

function planeDown() {
    planeWrap.classList.add('plane-wrap-down');
    bannerWrap.classList.add('banner-wrap-down');
    setTimeout( () => {
        plane.style.top = '550px';
    }, 300)
    setTimeout( () => {
        planeLevel();
    }, 8300)
}

function planeLevel() {
    planeWrap.classList.remove('plane-wrap-up');
    bannerWrap.classList.remove('banner-wrap-up');
    planeWrap.classList.remove('plane-wrap-down');
    bannerWrap.classList.remove('banner-wrap-down');

}