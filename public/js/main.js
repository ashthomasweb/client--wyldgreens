// Main JavaScript for "Wyldgreens"


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

// TOP PLANE ANIMATIONS

let planeLeft = document.querySelector('#wyld-plane-top-goleft');
let planeWrapLeft = document.querySelector('.plane-wrap-left');
let bannerWrapLeft = document.querySelector('.banner-outerwrap-left');

function planeToLeft() {
    planeLeft.classList.add('plane-go-left');
}

function planeUpLeft() {
    let currentAltitude = parseInt(getComputedStyle(planeLeft).getPropertyValue('top'));

    planeWrapLeft.classList.add('plane-wrap-up-left');
    bannerWrapLeft.classList.add('banner-wrap-up-left');

    setTimeout(() => {
        planeLeft.style.top = `${currentAltitude - 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevelLeft();
    }, 4700)
}

function planeDownLeft() {
    let currentAltitude = parseInt(getComputedStyle(planeLeft).getPropertyValue('top'));

    planeWrapLeft.classList.add('plane-wrap-down-left');
    bannerWrapLeft.classList.add('banner-wrap-down-left');

    setTimeout(() => {
        planeLeft.style.top = `${currentAltitude + 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevelLeft();
    }, 4700)
}

function planeLevelLeft() {
    planeWrapLeft.classList.remove('plane-wrap-up-left');
    bannerWrapLeft.classList.remove('banner-wrap-up-left');
    planeWrapLeft.classList.remove('plane-wrap-down-left');
    bannerWrapLeft.classList.remove('banner-wrap-down-left');
}

// BOTTOM PLANES

let planeBottomRight = document.querySelector('#wyld-plane-bottom-goright');
let planeWrapBottomRight = document.querySelector('.plane-wrap-bottom-right');
let bannerWrapBottomRight = document.querySelector('.banner-outerwrap-bottom-right');

function planeBottomToRight() {
    planeBottomRight.classList.add('plane-go-right');
}

function planeUpBottomRight() {
    let currentAltitude = parseInt(getComputedStyle(planeBottomRight).getPropertyValue('top'));

    planeWrapBottomRight.classList.add('plane-wrap-up-right');
    bannerWrapRight.classList.add('banner-wrap-up-right');

    setTimeout(() => {
        planeBottomRight.style.top = `${currentAltitude - 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevelBottomRight();
    }, 4700)
}

function planeDownBottomRight() {
    let currentAltitude = parseInt(getComputedStyle(planeBottomRight).getPropertyValue('top'));

    planeWrapBottomRight.classList.add('plane-wrap-down-right');
    bannerWrapRight.classList.add('banner-wrap-down-right');

    setTimeout(() => {
        planeBottomRight.style.top = `${currentAltitude + 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevelBottomRight();
    }, 4700)
}

function planeLevelBottomRight() {
    planeWrapBottomRight.classList.remove('plane-wrap-up-right');
    bannerWrapRight.classList.remove('banner-wrap-up-right');
    planeWrapBottomRight.classList.remove('plane-wrap-down-right');
    bannerWrapRight.classList.remove('banner-wrap-down-right');
}

let planeBottomLeft = document.querySelector('#wyld-plane-bottom-goleft');
let planeWrapBottomLeft = document.querySelector('.plane-wrap-bottom-left');
let bannerWrapBottomLeft = document.querySelector('.banner-outerwrap-bottom-left');

function planeBottomToLeft() {
    planeBottomLeft.classList.add('plane-go-left');
}

function planeUpBottomLeft() {
    let currentAltitude = parseInt(getComputedStyle(planeBottomLeft).getPropertyValue('top'));

    planeWrapBottomLeft.classList.add('plane-wrap-up-left');
    bannerWrapLeft.classList.add('banner-wrap-up-left');

    setTimeout(() => {
        planeBottomLeft.style.top = `${currentAltitude - 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevelBottomLeft();
    }, 4700)
}

function planeDownBottomLeft() {
    let currentAltitude = parseInt(getComputedStyle(planeBottomLeft).getPropertyValue('top'));

    planeWrapBottomLeft.classList.add('plane-wrap-down-left');
    bannerWrapLeft.classList.add('banner-wrap-down-left');

    setTimeout(() => {
        planeBottomLeft.style.top = `${currentAltitude + 150}px`;
    }, 350)
    setTimeout(() => {
        planeLevelBottomLeft();
    }, 4700)
}

function planeLevelBottomLeft() {
    planeWrapBottomLeft.classList.remove('plane-wrap-up-left');
    bannerWrapLeft.classList.remove('banner-wrap-up-left');
    planeWrapBottomLeft.classList.remove('plane-wrap-down-left');
    bannerWrapLeft.classList.remove('banner-wrap-down-left');
}


// POSITION FINDER AND PSUEDO-PROMISES

let windowWidth = window.innerWidth;

function topPlaneOffset() {
    let contentBody = document.querySelector('.l-content-wrapper--contact');
    let contentWidth;

    contentWidth = parseInt(window.getComputedStyle(contentBody).getPropertyValue('width'));

    let gutter = windowWidth - contentWidth;
    let offset = gutter / 2;

    // console.log(windowWidth);
    // console.log(contentWidth);
    // console.log(offset)
    let string = `-${offset + 450}px`;
    planeLeft.style.right = string;
}

function toLeftPromise() {

    setTimeout(() => {
        if (parseInt(window.getComputedStyle(planeBottomLeft).getPropertyValue('right')) > window.innerWidth) {
            console.log('hooray');

            // reset plane
            planeBottomLeft.classList.remove('plane-go-left');
            planeBottomLeft.style.transition = 'top 6.5s ease-in-out';
            planeBottomLeft.style.right = '-400px';

            // reset transition for next plane and call
            planeBottomRight.style.transition = 'left 10s linear, top 6.5s ease-in-out';
            planeBottomToRight();
            toRightPromise();
        }

        console.log('Its time for the next plane...')
    }, 13000)

}

function toRightPromise() {

    setTimeout(() => {
        if (parseInt(window.getComputedStyle(planeBottomRight).getPropertyValue('left')) > window.innerWidth) {
            console.log('hooray');

            // reset plane
            planeBottomRight.classList.remove('plane-go-right');
            planeBottomRight.style.transition = 'top 6.5s ease-in-out';
            planeBottomRight.style.left = '-400px';

            // reset transition for next plane and call
            planeBottomLeft.style.transition = 'right 10s linear, top 6.5s ease-in-out';
            planeBottomToLeft();
            toLeftPromise();
        }

        console.log('Its time for the next plane...')
    }, 13000)

}

function resetPlanePositions() {
    planeBottomLeft.classList.remove('plane-go-left');
    planeBottomLeft.style.transition = 'top 6.5s ease-in-out';
    planeBottomLeft.style.right = '-400px';
    planeBottomLeft.style.transition = 'right 10s linear, top 6.5s ease-in-out';

    planeBottomRight.classList.remove('plane-go-right');
    planeBottomRight.style.transition = 'top 6.5s ease-in-out';
    planeBottomRight.style.left = '-400px';
    planeBottomRight.style.transition = 'left 10s linear, top 6.5s ease-in-out';

}

function startPromise() {
    toLeftPromise();
}

// onload, and promise chain, display handling should be extracted
function planeOnLoad() {
    // set planes starting position
    let startingAltitude = document.documentElement.clientHeight - 300;
    planeLeft.style.top = `${startingAltitude}px`;
    topPlaneOffset();

    startPromise();

    // initialize top plane
    setTimeout(() => {
        planeToLeft();
        planeDownLeft();
    }, 300)

    // lower altitude after 11 sec
    setInterval(() => {
        planeDownLeft();
    }, 11000);

    // initialize bottom planes
    planeBottomToLeft();
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

// END of document
