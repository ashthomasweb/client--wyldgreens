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

let plane = document.querySelector('.plane-pane-anim');
let planeWrap = document.querySelector('.plane-wrap');
let bannerWrap = document.querySelector('.banner-whole');
// let planeInMotionBool = false;

function planeToLeft() {
    plane.classList.add('plane-go-left');
}


function planeUp() {
    let currentAltitude = parseInt(getComputedStyle(plane).getPropertyValue('top'));

    planeWrap.classList.add('plane-wrap-up');
    bannerWrap.classList.add('banner-wrap-up');

    setTimeout(() => {
        plane.style.top = `${currentAltitude - 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevel();
    }, 4700)
}

function planeDown() {
    let currentAltitude = parseInt(getComputedStyle(plane).getPropertyValue('top'));

    planeWrap.classList.add('plane-wrap-down');
    bannerWrap.classList.add('banner-wrap-down');

    setTimeout(() => {
        plane.style.top = `${currentAltitude + 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevel();
    }, 4700)
}

function planeLevel() {
    planeWrap.classList.remove('plane-wrap-up');
    bannerWrap.classList.remove('banner-wrap-up');
    planeWrap.classList.remove('plane-wrap-down');
    bannerWrap.classList.remove('banner-wrap-down');
}




// PLANE TO RIGHT

let planeRight = document.querySelector('.plane-pane-anim-right');
let planeWrapRight = document.querySelector('.plane-wrap-right');
let bannerWrapRight = document.querySelector('.banner-whole-right');
// let planeInMotionBool = false;

function planeToRight() {
    planeRight.classList.add('plane-go-right');
}


function planeUpRight() {
    let currentAltitude = parseInt(getComputedStyle(planeRight).getPropertyValue('top'));

    planeWrapRight.classList.add('plane-wrap-up-right');
    bannerWrapRight.classList.add('banner-wrap-up-right');

    setTimeout(() => {
        planeRight.style.top = `${currentAltitude - 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevelRight();
    }, 4700)
}

function planeDownRight() {
    let currentAltitude = parseInt(getComputedStyle(planeRight).getPropertyValue('top'));

    planeWrapRight.classList.add('plane-wrap-down-right');
    bannerWrapRight.classList.add('banner-wrap-down-right');
    
    setTimeout(() => {
        planeRight.style.top = `${currentAltitude + 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevelRight();
    }, 4700)
}

function planeLevelRight() {
    planeWrapRight.classList.remove('plane-wrap-up-right');
    bannerWrapRight.classList.remove('banner-wrap-up-right');
    planeWrapRight.classList.remove('plane-wrap-down-right');
    bannerWrapRight.classList.remove('banner-wrap-down-right');
}