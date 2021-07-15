// JavaScript file for "Wyld"
























let farmersCheck = document.querySelector(".mix-wrap input[name=mix_farmers]");

function farmersCheckbox() {
    if (farmersCheck.checked === false) {
        farmersCloseBtn();
    } else if (farmersCheck.checked === true) {
        farmersMix();
        farmersMix();
    }
    getPriceTotal();
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
    Number(formFarmersQuan.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    getPriceTotal();

}

let spicyCheck = document.querySelector(".mix-wrap input[name=mix_spicy]");

function spicyCheckbox() {
    if (spicyCheck.checked === false) {
        spicyCloseBtn();
    } else if (spicyCheck.checked === true) {
        spicyMix();
        spicyMix();
    }
    getPriceTotal();
    discountDisplayHandler();
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
    getPriceTotal();

}

let saladCheck = document.querySelector(".mix-wrap input[name=mix_salad]");

function saladCheckbox() {
    if (saladCheck.checked === false) {
        saladCloseBtn();
    } else if (saladCheck.checked === true) {
        saladMix();
        saladMix();
    }
    getPriceTotal();

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
    getPriceTotal();

}

let healthyCheck = document.querySelector(".mix-wrap input[name=mix_healthy]");

function healthyCheckbox() {
    if (healthyCheck.checked === false) {
        healthyCloseBtn();
    } else if (healthyCheck.checked === true) {
        healthyMix();
        healthyMix();
    }
    getPriceTotal();

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
    getPriceTotal();

}













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

function clearPlansForm() {
    document.querySelector('[name=weekly]').checked = false;
    document.querySelector('[name=bulk]').checked = false;
    document.querySelector('[name=one_time]').checked = false;
}


// || Contact form check for field input then change button color 

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





























// function customTotalHandler() {
//     let inputGroup = Array.from(document.querySelectorAll('.order input'));


// }

















// function bulkPriceDisplay() {
//     if (formCheckBulk.checked === true) {
//         formFarmersQuan.value = "3";
//         formHealthyQuan.value = "3";
//         formSaladQuan.value = "3";
//         formSpicyQuan.value = "3";
//         formCustomQuan.value = "3";
//         document.querySelector('.num-2').style.opacity = "0";
//         document.querySelector('.num-3').style.opacity = "0";
//     } else {
//         // formFarmersQuan.value = "";
//         // formHealthyQuan.value = "";
//         // formSaladQuan.value = "";
//         // formSpicyQuan.value = "";
//         // formCustomQuan.value = "";
//         document.querySelector('.num-2').style.opacity = "1";
//         document.querySelector('.num-3').style.opacity = "1";
//     }
// }