// JavaScript file for "Wyld"


let formCheckWeekly = document.querySelector('[name=weekly]');
let formCheckOnetime = document.querySelector('[name=one_time]');
let formCheckBulk = document.querySelector('[name=bulk]');
let formFarmersQuan = document.querySelector('[name=farmers-num]');
let formHealthyQuan = document.querySelector('[name=healthy-num]');
let formSaladQuan = document.querySelector('[name=salad-num]');
let formSpicyQuan = document.querySelector('[name=spicy-num]');
let formCustomQuan = document.querySelector('[name=custom-num]');
let formTotalPrice = document.querySelector('[name=total-num]');



// ADD CHECK TO FORM

function addToOrder(input) {
    document.querySelector(`[name="${input}"]`).checked = true;
}

// CLEAR PLANS ON FORM

function clearPlansForm() {
    document.querySelector('[name=weekly]').checked = false;
    document.querySelector('[name=bulk]').checked = false;
    document.querySelector('[name=one_time]').checked = false;
}

// FIELD CHECK AND STYLE CHANGE ON STATE

function formFieldCheck() {
    let name = document.forms["contact"]["user_name"].value;
    let email = document.forms["contact"]["user_email"].value;
    let message = document.forms["contact"]["message"].value;
    let elem = document.getElementById("contact-button");

    if (name == "" || email == "" || message == "") { // on ready
        elem.style.backgroundColor = "var(--primary-light)";
        elem.style.pointerEvents = "none";
        elem.style.color = "var(--copy-dark)";

    } else { // upon typing
        elem.style.backgroundColor = "var(--primary-color)";
        elem.style.pointerEvents = "auto";
        elem.style.color = "var(--highlight)";
        elem.innerHTML = "Place<br>Your Order"
    }
}

function sendingText() {
    let elem = document.getElementById("contact-button");
    elem.innerText = "Sending";
}

// MIX CHECKBOX AND INPUT HANDLING

let farmersCheck = document.querySelector(".mix-wrap input[name=mix_farmers]");
let healthyCheck = document.querySelector(".mix-wrap input[name=mix_healthy]");
let saladCheck = document.querySelector(".mix-wrap input[name=mix_salad]");
let spicyCheck = document.querySelector(".mix-wrap input[name=mix_spicy]");

function farmersCheckbox() {
    if (farmersCheck.checked === false) {
        farmersCloseBtn();
        document.querySelector(".mix-wrap input[name=farmers-num]").value = "0";
    } else if (farmersCheck.checked === true) {
        farmersMix();
        farmersMix();
        document.querySelector(".mix-wrap input[name=farmers-num]").value = "1";
    }
    getPriceTotal(16);
    discountDisplayHandler();
}

function spicyCheckbox() {
    if (spicyCheck.checked === false) {
        spicyCloseBtn();
        document.querySelector(".mix-wrap input[name=spicy-num]").value = "0";
    } else if (spicyCheck.checked === true) {
        spicyMix();
        spicyMix();
        document.querySelector(".mix-wrap input[name=spicy-num]").value = "1";
    }
    getPriceTotal(15);
    discountDisplayHandler();
}

function saladCheckbox() {
    if (saladCheck.checked === false) {
        saladCloseBtn();
        document.querySelector(".mix-wrap input[name=salad-num]").value = "0";
    } else if (saladCheck.checked === true) {
        saladMix();
        saladMix();
        document.querySelector(".mix-wrap input[name=salad-num]").value = "1";
    }
    getPriceTotal(14);
    discountDisplayHandler();
}

function healthyCheckbox() {
    if (healthyCheck.checked === false) {
        healthyCloseBtn();
        document.querySelector(".mix-wrap input[name=healthy-num]").value = "0";
    } else if (healthyCheck.checked === true) {
        healthyMix();
        healthyMix();
        document.querySelector(".mix-wrap input[name=healthy-num]").value = "1";
    }
    getPriceTotal(13);
    discountDisplayHandler();
}

function farmersInput() {
    if (Number(document.querySelector(".mix-wrap input[name=farmers-num]").value) >= 4) {
        document.querySelector(".mix-wrap input[name=farmers-num]").value = "3";
    }
    
    if (bulkMaxBool === true) {
        if (Number(document.querySelector(".mix-wrap input[name=farmers-num]").value) >= 1) {
            document.querySelector(".mix-wrap input[name=farmers-num]").value = "1";
        }
    }
    
    if (farmersCheck.checked === false) {
        farmersMix();
        farmersMix();
        
    } else if (farmersCheck.checked === true) {
        farmersQuanInput.value = document.querySelector(".mix-wrap input[name=farmers-num]").value;
    }
    
    // if ( Number(document.querySelector(".mix-wrap input[name=farmers-num]").value) === 0 ) {
    //     farmersCheck.checked = false;
    // }
    Number(formFarmersQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal(12);
}

function spicyInput() {

    if (Number(document.querySelector(".mix-wrap input[name=spicy-num]").value) >= 4) {
        document.querySelector(".mix-wrap input[name=spicy-num]").value = "3";
    }

    if (bulkMaxBool === true) {
        if (Number(document.querySelector(".mix-wrap input[name=spicy-num]").value) >= 1) {
            document.querySelector(".mix-wrap input[name=spicy-num]").value = "1";
        }
    }

    if (spicyCheck.checked === false) {
        spicyMix();
        spicyMix();

    } else if (spicyCheck.checked === true) {
        spicyQuanInput.value = document.querySelector(".mix-wrap input[name=spicy-num]").value;
    }

    Number(formSpicyQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal(11);
}

function saladInput() {
    if (Number(document.querySelector(".mix-wrap input[name=salad-num]").value) >= 4) {
        document.querySelector(".mix-wrap input[name=salad-num]").value = "3";
    }

    if (bulkMaxBool === true) {
        if (Number(document.querySelector(".mix-wrap input[name=salad-num]").value) >= 1) {
            document.querySelector(".mix-wrap input[name=salad-num]").value = "1";
        }
    }

    if (saladCheck.checked === false) {
        saladMix();
        saladMix();

    } else if (saladCheck.checked === true) {
        saladQuanInput.value = document.querySelector(".mix-wrap input[name=salad-num]").value;
    }

    Number(formSaladQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal(10);
}

function healthyInput() {

    if (Number(document.querySelector(".mix-wrap input[name=healthy-num]").value) >= 4) {
        document.querySelector(".mix-wrap input[name=healthy-num]").value = "3";
    }

    if (bulkMaxBool === true) {
        if (Number(document.querySelector(".mix-wrap input[name=healthy-num]").value) >= 1) {
            document.querySelector(".mix-wrap input[name=healthy-num]").value = "1";
        }
    }

    if (healthyCheck.checked === false) {
        healthyMix();
        healthyMix();

    } else if (healthyCheck.checked === true) {
        healthyQuanInput.value = document.querySelector(".mix-wrap input[name=healthy-num]").value;
    }

    Number(formHealthyQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal(9);
}


