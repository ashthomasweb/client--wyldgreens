// DOM OBJECT ASSIGNMENTS

let ctaBtnPlan = document.querySelector('#plan-button');
let ctaBtnMix = document.querySelector('#mix-button');
let ctaBtnOrder = document.querySelector('#order-button');

let pxBack = document.querySelector('.background-scene');
let lowPlane = document.querySelector('.plane-px');

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


let isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
let sceneBack = document.querySelector('.scene-back');
let mobileMix = document.querySelector('#mobile-p-mix');
let mobilePlan = document.querySelector('#mobile-p-plan');

let parallaxOn = () => {
    let imageOffsetRatio = 4.1;
    let amount = (window.scrollY / imageOffsetRatio);
    let string = `-${amount*2}px`;
    pxBack.style.transform = `translateY(${string})`;
}

let scrollStop = () => {
    let clientHeight = document.documentElement.clientHeight;
    if (pxBack.getBoundingClientRect().bottom < clientHeight) {
        pxBack.style.transform = `translateY(-${3500 - clientHeight}px)`
    }
}

if (!isMobile) {
    document.addEventListener('scroll', parallaxOn, false);
    document.addEventListener('scroll', scrollStop, false);
} else if (isMobile) {
    mobileStyling();
}

function mobileStyling() {
    sceneBack.style.height = '100vh';
    mobileMix.style.color = 'var(--copy-dark)';
    mobilePlan.style.color = 'var(--copy-dark)';
    mobileMix.style.fontWeight = '600';
    mobilePlan.style.fontWeight = '600';
}


// LIGHTBOX

let bodyWrap = document.querySelector('.l-body-wrapper--contact');
let lightboxBool = false;

function closeLightbox() {
    console.log(lightboxBool)
    window.removeEventListener('click', closeLightbox, true)

    if (lightboxBool === true) {
        lightboxPane.style.opacity = '0';
        lightboxPane.style.pointerEvents = 'none';
        lightboxBool = false;
        bodyWrap.style.pointerEvents = 'auto';
    }
}

function openLightbox() {
    if (lightboxBool === false) {
        lightboxPane.style.pointerEvents = 'auto';
        lightboxPane.style.opacity = '1';
        lightboxBool = true;
        bodyWrap.style.pointerEvents = 'none';
        setTimeout(() => {
            window.addEventListener('click', closeLightbox, true)
        }, 10);
    }
}

function runLightbox(input) {
    lightboxPane.pointerEvents = 'auto';
    lightboxImg.attributes.src.value = `/images/greens/${input}`;
    openLightbox();
}










// TOP PLANES ANIMATIONS

let planeLeft = document.querySelector('#wyld-plane-top-goleft');
let planeWrap = document.querySelector('.plane-wrap');
let bannerWrap = document.querySelector('.banner-whole');

let planeRight = document.querySelector('#wyld-plane-top-goright');
let planeWrapRight = document.querySelector('.plane-wrap-right');
let bannerWrapRight = document.querySelector('.banner-whole-right');


// for either top/bottom set
function planeToLeft() {
    planeLeft.classList.add('plane-go-left');
}

// for either left or right, top or bottom
function planeUp() {
    let currentAltitude = parseInt(getComputedStyle(planeLeft).getPropertyValue('top'));

    planeWrap.classList.add('plane-wrap-up');
    bannerWrap.classList.add('banner-wrap-up');

    setTimeout(() => {
        planeLeft.style.top = `${currentAltitude - 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevel();
    }, 4700)
}

// for either left or right, top or bottom
function planeDown() {
    let currentAltitude = parseInt(getComputedStyle(planeLeft).getPropertyValue('top'));

    planeWrap.classList.add('plane-wrap-down');
    bannerWrap.classList.add('banner-wrap-down');

    setTimeout(() => {
        planeLeft.style.top = `${currentAltitude + 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevel();
    }, 4700)
}


// for either left or right, top or bottom
function planeLevel() {
    planeWrap.classList.remove('plane-wrap-up');
    bannerWrap.classList.remove('banner-wrap-up');
    planeWrap.classList.remove('plane-wrap-down');
    bannerWrap.classList.remove('banner-wrap-down');
}




// onload, and promise chain, display handling should be extracted
function planeOnLoad() {
    // set planes starting position
    let startingAltitude = document.documentElement.clientHeight - 300;
    let startingGutter = (document.documentElement.clientWidth - 1000) / 2;
    let offset = startingGutter + 450;
    planeLeft.style.right = `-${offset}px`;
    planeLeft.style.top = `${startingAltitude}px`;



    // initialize top plane
    planeToLeft();
    planeDown();


    // lower altitude after 11 sec
    setInterval(() => {
        planeDown();
    }, 11000);


    // initialize bottom plane
    planeToRight();

    // broken random up/down animation
    setTimeout(() => {
        setInterval(() => {
            if (Math.random() * .5 >= .5) {
                planeUpRight();
            } else {
                planeDownRight();
            }
        }, 11000);
    }, 20000);
}

// PLANE TO RIGHT



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












// // development/testing functions
// function forceParallaxOff() {
//     document.removeEventListener('scroll', parallaxOn, false);
//     document.removeEventListener('scroll', scrollStop, false);
// }

// function forceParallaxOn() {
//     document.addEventListener('scroll', parallaxOn, false);
//     document.addEventListener('scroll', scrollStop, false);
// }



