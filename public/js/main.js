

// CTA BUTTONS 

document.querySelector("#plan-button").addEventListener('click', () => {
    window.location.href = "#pick-plan";
    window.scrollBy(0, -50);
});

document.querySelector("#mix-button").addEventListener('click', () => {
    window.location.href = "#pick-mix";
    window.scrollBy(0, -50);
});

document.querySelector("#order-button").addEventListener('click', () => {
    window.location.href = "#order-form";
    window.scrollBy(0, -50);
});


// PARALLAX

document.addEventListener('scroll', () => {
    let imageOffsetRatio = 470;
    let amount = ( window.scrollY / imageOffsetRatio ) * 100;
    let string = `-${amount}px`;
    document.querySelector('.l-body-wrapper--contact').style.backgroundPositionY = string;
    console.log(window.scrollY);
});


