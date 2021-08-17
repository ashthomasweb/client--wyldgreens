// JavaScript order form for 'Wyldgreens'

let fullForm = document.getElementById('contact-form');
let formCheckWeekly = document.querySelector('[name=weekly]');
let formCheckOnetime = document.querySelector('[name=one_time]');
let formCheckBulk = document.querySelector('[name=bulk]');
let formFarmersQuan = document.querySelector('[name=farmers_num]');
let formHealthyQuan = document.querySelector('[name=healthy_num]');
let formSaladQuan = document.querySelector('[name=salad_num]');
let formSpicyQuan = document.querySelector('[name=spicy_num]');
let formCustomQuan = document.querySelector('[name=custom_num]');
let formTotalPrice = document.querySelector('[name=total_price]');

let farmersCheck = document.querySelector('[name=mix_farmers]');
let healthyCheck = document.querySelector('[name=mix_healthy]');
let saladCheck = document.querySelector('[name=mix_salad]');
let spicyCheck = document.querySelector('[name=mix_spicy]');
let customCheck = document.querySelector('[name=mix_custom]');

// ADD CHECK TO FORM

function addToOrder(input) {
    document.querySelector(`[name='${input}']`).checked = true;
}

// CLEAR PLANS ON FORM

function clearPlansForm() {
    formCheckWeekly.checked = false;
    formCheckBulk.checked = false;
    formCheckOnetime.checked = false;
}

// FIELD CHECK AND STYLE CHANGE ON STATE

// ** my first usage of Array.every()! I'm so happy! Checking the total value of the form 
// invalidates the necessesity of this function, but I wanted to yell it from a mountain 
// but all I had was this keyboard, and you.
const allUnchecked = (currentItem) => currentItem.checked === false;
let planCheckArray = [formCheckBulk, formCheckOnetime, formCheckWeekly];
function planCheckReady() {
    if (planCheckArray.every(allUnchecked) === true) {
        return false;
    } else {
        return true;
    }
}

!document.querySelector('#contact-form') ?? document.querySelector('#contact-form').addEventListener('input', formFieldCheck);

let formReadyBool = false;

function formFieldCheck() {
    let name = document.forms['contact']['user_name'].value;
    let email = document.forms['contact']['user_email'].value;
    let message = document.forms['contact']['message'].value;
    let elem = document.getElementById('contact-button-bottom');

    if (name == '' || email == '' || message == '' || planCheckReady() === false || formTotalPrice.value === '' || formTotalPrice.value === 0 || formTotalPrice.value === "0" ) { // not ready
        formReadyBool = false;
        elem.style.color = 'var(--copy-dark)';


    } else { // on ready
        formReadyBool = true;

        elem.style.backgroundColor = 'lightblue';
        elem.style.pointerEvents = 'auto';
        elem.style.color = 'var(--highlight)';
        elem.innerHTML = 'Place<br>Your Order!'
    }
}

function sendOrder() {

    let elem = document.getElementById('contact-button-bottom');

    if ( formReadyBool === true ) {
        fullForm.submit();
        elem.innerText = 'Sending';
    } else {
        console.log('test')
    }
}


function preventEnterSubmit(event) {
    if ( event.keyCode === 13 ) {
        event.preventDefault();
    }
}

// MIX CHECKBOX AND INPUT HANDLING

function farmersCheckbox() {
    farmersClearDeleteAnim();

    if (farmersCheck.checked === false) {
        farmersCloseBtn();
        formFarmersQuan.value = '';
    } else if (farmersCheck.checked === true) {
        farmersMix();
        farmersMix();
        formFarmersQuan.value = '1';
    }
    getPriceTotal(16);
}

function spicyCheckbox() {
    spicyClearDeleteAnim();

    if (spicyCheck.checked === false) {
        spicyCloseBtn();
        formSpicyQuan.value = '';
    } else if (spicyCheck.checked === true) {
        spicyMix();
        spicyMix();
        formSpicyQuan.value = '1';
    }
    getPriceTotal(15);
}

function saladCheckbox() {
    saladClearDeleteAnim();

    if (saladCheck.checked === false) {
        saladCloseBtn();
        formSaladQuan.value = '';
    } else if (saladCheck.checked === true) {
        saladMix();
        saladMix();
        formSaladQuan.value = '1';
    }
    getPriceTotal(14);
}

function healthyCheckbox() {
    healthyClearDeleteAnim();

    if (healthyCheck.checked === false) {
        healthyCloseBtn();
        healthyQuanCheck.style.display = 'none';
        formHealthyQuan.value = '';
    } else if (healthyCheck.checked === true) {
        healthyMix();
        healthyMix();
        formHealthyQuan.value = '1';
    }
    console.log(`test`)

    getPriceTotal(13);
}

function farmersClearDeleteAnim() {
    clearTimeout(farmersAnimA);
    clearTimeout(farmersAnimB);
    farmersOrderBtn.style.pointerEvents = 'auto';
    farmersPanelClose();
    farmersQuanCross.style.display = 'none';
    farmersQuanP.style.opacity = '1';
    farmersQuanInput.value = '1';
    farmersClose.innerText = 'Close';
    farmersClose.style.pointerEvents = 'auto';
}

function farmersInput() {
    farmersUpdateBool === false && farmersClearDeleteAnim();

    if (bulkMaxBool === true) {
        if (Number(formFarmersQuan.value) >= 1) {
            formFarmersQuan.value = '1';
        }
    }

    farmersCheck.checked = true;

    if (farmersCheck.checked === true) {
        farmersQuanInput.value = formFarmersQuan.value;
        if (Number(formFarmersQuan.value) >= 4) {
            formFarmersQuan.value = '3';
        }
        if (Number(formFarmersQuan.value) < 1 || formFarmersQuan.value === '') {
            formFarmersQuan.value = '';
            farmersQuanInput.value = '1';
            farmersCheck.checked = false;
            farmersCloseBtn();
        }
        if (Number(formFarmersQuan.value) >= 1 && Number(formFarmersQuan.value) <= 3) {
            farmersMix();
            farmersQuanInput.value = formFarmersQuan.value;
            farmersMix();
            farmersOrderBtn.innerText = 'Added to Order!';
        }
    }

    Number(formFarmersQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal(12);
}

function spicyClearDeleteAnim() {
    clearTimeout(spicyAnimA);
    clearTimeout(spicyAnimB);
    spicyOrderBtn.style.pointerEvents = 'auto';
    spicyPanelClose();
    spicyQuanCross.style.display = 'none';
    spicyQuanP.style.opacity = '1';
    spicyQuanInput.value = '1';
    spicyClose.innerText = 'Close';
    spicyClose.style.pointerEvents = 'auto';
}

function spicyInput() {
    spicyUpdateBool === false && spicyClearDeleteAnim();

    if (bulkMaxBool === true) {
        if (Number(formSpicyQuan.value) >= 1) {
            formSpicyQuan.value = '1';
        }
    }

    spicyCheck.checked = true;

    if (spicyCheck.checked === true) {
        spicyQuanInput.value = formSpicyQuan.value;
        if (Number(formSpicyQuan.value) >= 4) {
            formSpicyQuan.value = '3';
        }
        if (Number(formSpicyQuan.value) < 1 || formSpicyQuan.value === '') {
            formSpicyQuan.value = '';
            spicyQuanInput.value = '1';
            spicyCheck.checked = false;
            spicyCloseBtn();
        }
        if (Number(formSpicyQuan.value) >= 1 && Number(formSpicyQuan.value) <= 3) {
            spicyMix();
            spicyQuanInput.value = formSpicyQuan.value;
            spicyMix();
            spicyOrderBtn.innerText = "Added to Order!";
        }
    }

    Number(formSpicyQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal(11);
}

function saladClearDeleteAnim() {
    clearTimeout(saladAnimA);
    clearTimeout(saladAnimB);
    saladOrderBtn.style.pointerEvents = 'auto';
    saladPanelClose();
    saladQuanCross.style.display = 'none';
    saladQuanP.style.opacity = '1';
    saladQuanInput.value = '1';
    saladClose.innerText = 'Close';
    saladClose.style.pointerEvents = 'auto';
    formSaladQuan.style.pointerEvents = 'auto';
}

function saladInput() {
    saladUpdateBool === false && saladClearDeleteAnim();

    if (bulkMaxBool === true) {
        if (Number(formSaladQuan.value) >= 1) {
            formSaladQuan.value = '1';
        }
    }

    saladCheck.checked = true;

    if (saladCheck.checked === true) {
        saladQuanInput.value = formSaladQuan.value;
        if (Number(formSaladQuan.value) >= 4) {
            formSaladQuan.value = '3';
        }
        if (Number(formSaladQuan.value) < 1 || formSaladQuan.value === '') {
            formSaladQuan.value = '';
            saladQuanInput.value = '1';
            saladCheck.checked = false;
            saladCloseBtn();
        }
        if (Number(formSaladQuan.value) >= 1 && Number(formSaladQuan.value) <= 3) {
            saladMix();
            saladQuanInput.value = formSaladQuan.value;
            saladMix();
            saladOrderBtn.innerText = "Added to Order!";
        }
    }

    Number(formSaladQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal(10);
}

function healthyClearDeleteAnim() {
    clearTimeout(healthyAnimA);
    clearTimeout(healthyAnimB);
    healthyOrderBtn.style.pointerEvents = 'auto';
    healthyPanelClose();
    healthyQuanCross.style.display = 'none';
    healthyQuanP.style.opacity = '1';
    healthyQuanInput.value = '1';
    healthyClose.innerText = 'Close';
    healthyClose.style.pointerEvents = 'auto';
    formHealthyQuan.style.pointerEvents = 'auto';
}

function healthyInput() {
    healthyUpdateBool === false && healthyClearDeleteAnim();

    if (bulkMaxBool === true) {
        if (Number(formHealthyQuan.value) >= 1) {
            formHealthyQuan.value = '1';
        }
    }
    healthyCheck.checked = true;

    if (healthyCheck.checked === true) {
        healthyQuanInput.value = formHealthyQuan.value;
        if (Number(formHealthyQuan.value) >= 4) {
            formHealthyQuan.value = '3';
        }
        if (Number(formHealthyQuan.value) < 1 || formHealthyQuan.value === '') {
            formHealthyQuan.value = '';
            healthyQuanInput.value = '1';
            healthyCheck.checked = false;
            healthyCloseBtn();
        }
        if (Number(formHealthyQuan.value) >= 1 && Number(formHealthyQuan.value) <= 3) {
            healthyMix();
            healthyQuanInput.value = formHealthyQuan.value;
            healthyMix();
            healthyOrderBtn.innerText = "Added to Order!";
        }
    }

    Number(formHealthyQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal(9);
}

// END of document
