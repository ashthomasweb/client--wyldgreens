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
    mobileParallaxStyling();
}

function mobileParallaxStyling() {
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
    lightboxImg.attributes.src.value = `/images/greens/mix/${input}`;
    openLightbox();
}


// TOP PLANE ANIMATIONS

let planeLeft = document.querySelector('#wyld-plane-top-goleft');
let planeWrapLeft = document.querySelector('.plane-wrap-left');
let bannerWrapLeft = document.querySelector('.banner-outerwrap-left');

// parent animation
function planeToLeft() {
    planeLeft.classList.add('plane-go-left');
}

// fly higher
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

// fly lower
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

// level out
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

// parent animation
function planeBottomToRight() {
    planeBottomRight.classList.add('plane-go-right');

    let random = () => Math.random();
    let num = random;

    setTimeout(() => {
        if (num < 0.5) {
            planeUpBottomRight();
        } else {
            altitudeRight() && planeDownBottomRight();
            !altitudeRight() && planeUpBottomRight();
        }
    }, 9000);
}

// fly higher
function planeUpBottomRight() {
    let currentAltitude = parseInt(getComputedStyle(planeBottomRight).getPropertyValue('top'));

    planeWrapBottomRight.classList.add('plane-wrap-up-right');
    bannerWrapBottomRight.classList.add('banner-wrap-up-right');

    setTimeout(() => {
        planeBottomRight.style.top = `${currentAltitude - 150}px`;


    }, 350)
    setTimeout(() => {
        planeLevelBottomRight();

    }, 4700)
}

// fly lower
function planeDownBottomRight() {
    let currentAltitude = parseInt(getComputedStyle(planeBottomRight).getPropertyValue('top'));

    planeWrapBottomRight.classList.add('plane-wrap-down-right');
    bannerWrapBottomRight.classList.add('banner-wrap-down-right');

    setTimeout(() => {
        planeBottomRight.style.top = `${currentAltitude + 150}px`;

    }, 350)
    setTimeout(() => {
        planeLevelBottomRight();

    }, 4700)
}

// level out
function planeLevelBottomRight() {
    planeWrapBottomRight.classList.remove('plane-wrap-up-right');
    bannerWrapBottomRight.classList.remove('banner-wrap-up-right');
    planeWrapBottomRight.classList.remove('plane-wrap-down-right');
    bannerWrapBottomRight.classList.remove('banner-wrap-down-right');
}

let planeBottomLeft = document.querySelector('#wyld-plane-bottom-goleft');
let planeWrapBottomLeft = document.querySelector('.plane-wrap-bottom-left');
let bannerWrapBottomLeft = document.querySelector('.banner-outerwrap-bottom-left');

// parent animation
function planeBottomToLeft() {
    planeBottomLeft.classList.add('plane-go-left');

    let random = () => Math.random();
    let num = random;

    setTimeout(() => {
        if (num < 0.5) {
            planeUpBottomLeft();
        } else {
            altitudeLeft() && planeDownBottomLeft();
            !altitudeLeft() && planeUpBottomLeft();
        }
    }, 9000);
}

// fly higher
function planeUpBottomLeft() {
    let currentAltitude = parseInt(getComputedStyle(planeBottomLeft).getPropertyValue('top'));

    planeWrapBottomLeft.classList.add('plane-wrap-up-left');
    bannerWrapBottomLeft.classList.add('banner-wrap-up-left');

    setTimeout(() => {
        planeBottomLeft.style.top = `${currentAltitude - 150}px`;

    }, 350)
    setTimeout(() => {
        planeLevelBottomLeft();

    }, 4700)
}

// fly lower
function planeDownBottomLeft() {
    let currentAltitude = parseInt(getComputedStyle(planeBottomLeft).getPropertyValue('top'));

    planeWrapBottomLeft.classList.add('plane-wrap-down-left');
    bannerWrapBottomLeft.classList.add('banner-wrap-down-left');

    setTimeout(() => {
        planeBottomLeft.style.top = `${currentAltitude + 150}px`;

    }, 350)
    setTimeout(() => {
        planeLevelBottomLeft();

    }, 4700)
}

// level out
function planeLevelBottomLeft() {
    planeWrapBottomLeft.classList.remove('plane-wrap-up-left');
    bannerWrapBottomLeft.classList.remove('banner-wrap-up-left');
    planeWrapBottomLeft.classList.remove('plane-wrap-down-left');
    bannerWrapBottomLeft.classList.remove('banner-wrap-down-left');
    console.log('finished')
}

// BOTTOM PLANES MIN ALTITUDE 

function altitudeLeft() {
    currentAltitude = parseInt(window.getComputedStyle(planeBottomLeft).getPropertyValue('top'));
    if (currentAltitude >= 2800) {
        return false;
    } else {
        return true;
    }
}

function altitudeRight() {
    currentAltitude = parseInt(window.getComputedStyle(planeBottomRight).getPropertyValue('top'));
    if (currentAltitude >= 2800) {
        return false;
    } else {
        return true;
    }
}

// POSITION FINDER AND PSUEDO-PROMISES

let windowWidth = window.innerWidth;

function topPlaneOffset() {

    let startingAltitude = document.documentElement.clientHeight - 300;

    let contentBody = document.querySelector('.l-content-wrapper--contact');
    let contentWidth;

    contentWidth = parseInt(window.getComputedStyle(contentBody).getPropertyValue('width'));

    let gutter = windowWidth - contentWidth;
    let offset = gutter / 2;

    let string = `-${offset + 450}px`;
    planeLeft.style.right = string;
    planeLeft.style.top = `${startingAltitude}px`;
}

function toLeftChain() {

    setTimeout(() => {
        if (parseInt(window.getComputedStyle(planeBottomLeft).getPropertyValue('right')) > window.innerWidth) {

            // reset plane
            planeBottomLeft.classList.remove('plane-go-left');
            planeBottomLeft.style.transition = 'top 6.5s ease-in-out';
            planeBottomLeft.style.right = '-400px';

            // reset transition for next plane and call
            planeBottomRight.style.transition = 'left 40s linear, top 6.5s ease-in-out';
            planeBottomToRight();
            toRightChain();
        }

    }, 45000)

}

function toRightChain() {

    setTimeout(() => {
        if (parseInt(window.getComputedStyle(planeBottomRight).getPropertyValue('left')) > window.innerWidth) {

            // reset plane
            planeBottomRight.classList.remove('plane-go-right');
            planeBottomRight.style.transition = 'top 6.5s ease-in-out';
            planeBottomRight.style.left = '-400px';

            // reset transition for next plane and call
            planeBottomLeft.style.transition = 'right 40s linear, top 6.5s ease-in-out';
            planeBottomToLeft();
            toLeftChain();
        }
    }, 90000)

}

function resetAnimations() {
    // reset toLeft plane
    planeBottomLeft.classList.remove('plane-go-left');
    planeBottomLeft.style.transition = 'top 6.5s ease-in-out';
    planeBottomLeft.style.right = '-400px';

    // reset toRight plane
    planeBottomRight.classList.remove('plane-go-right');
    planeBottomRight.style.transition = 'top 6.5s ease-in-out';
    planeBottomRight.style.left = '-400px';

    // reset top plane 
    planeLeft.classList.remove('plane-go-left');
    planeLeft.style.transition = 'top 6.5s ease-in-out';
    planeLeft.style.right = '-400px';
}

function applyTransitions() {
    // reset transition for top plane
    planeLeft.style.transition = 'right 40s linear, top 6.5s ease-in-out';

    // reset transition for next plane
    planeBottomLeft.style.transition = 'right 40s linear, top 6.5s ease-in-out';

    // reset transition for next plane
    planeBottomRight.style.transition = 'left 40s linear, top 6.5s ease-in-out';
}

function planeOnLoad() {
    startTopPlane();

    // initialize bottom planes
    startChain();
}

function startTopPlane() {
    // set top plane's starting position
    topPlaneOffset();

    // initialize top plane
    setTimeout(() => {
        planeToLeft();
        planeDownLeft();
    }, 300)

    // lower altitude after 11 sec
    setInterval(() => {
        planeDownLeft();
    }, 11000);
}

function startChain() {
    planeBottomToLeft();
    toLeftChain();
}

let resizeCheck;

function resizeEvent() {
    resetAnimations();
    setTimeout( () => {
        applyTransitions();
        startChain();
        startTopPlane();
    }, 10000);
}

window.onresize = () => {
    clearTimeout(resizeCheck);
    resizeCheck = setTimeout(resizeEvent, 200);
};

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