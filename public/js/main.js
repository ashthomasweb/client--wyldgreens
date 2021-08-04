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









// let pxBack = document.querySelector('.background-scene');
// let lowPlane = document.querySelector('.plane-px');

// PARALLAX


let parallaxOn = () => {
    let imageOffsetRatio = 4.1;
    let amount = (window.scrollY / imageOffsetRatio);
    let string = `-${amount*2}px`;
    pxBack.style.transform = `translateY(${string})`;
}


document.addEventListener('scroll', parallaxOn, false);







let scrollStop = () => {
    let clientHeight = document.documentElement.clientHeight;
    let pxBackPos = pxBack.style.top;

    if (window.scrollY / 4.1 + clientHeight >= 2100) {
        console.log('test')
        // parallaxOn();
        document.removeEventListener('scroll', parallaxOn, false);

    } else if (window.scrollY / 4.1 + clientHeight < 2100) {
        document.addEventListener('scroll', parallaxOn, false);
    }

}



document.addEventListener('scroll', scrollStop, false);






let isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
if (isMobile){
    document.removeEventListener('scroll', parallaxOn, false);

 // bypass parallax effect
}

















































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

function planeOnLoad() {
    let startingAltitude = document.documentElement.clientHeight - 100;
    let startingGutter = (document.documentElement.clientWidth - 1000) / 2;
    let offset = startingGutter + 450;
    plane.style.right = `-${offset}px`;
    plane.style.top = `${startingAltitude}px`;
    // plane.style.right = `-${startingHorizontal}px`;
    planeToLeft();
    planeDown();
    // planeDown();
    setInterval(() => {
        planeDown();
    }, 11000);

    planeToRight();
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