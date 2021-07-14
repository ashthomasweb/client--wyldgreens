// JavaScript file for "Wyld"





// PLAN SELECTION / FORM CHECK HANDLERS

let weeklyPane = document.querySelector('#weekly-pane');
let weeklyOrderBtn = document.querySelector('#weekly-order-btn');
let weeklyAdded = document.querySelector('#weekly-added');

let oneTimePane = document.querySelector('#one_time-pane');
let oneTimeOrderBtn = document.querySelector('#one_time-order-btn');
let oneTimeAdded = document.querySelector('#one_time-added');

let bulkPane = document.querySelector('#bulk-pane');
let bulkOrderBtn = document.querySelector('#bulk-order-btn');
let bulkAdded = document.querySelector('#bulk-added');

function weeklyOpen() {
    weeklyPane.classList.add('plan-btn-pane-open');
    weeklyOrderBtn.classList.add('center-btn-clicked');
    weeklyAdded.classList.add('plan-added-clicked');
}

function weeklyClose() {
    weeklyDelBool = false;
    weeklyPane.classList.remove('plan-btn-pane-open');
    weeklyOrderBtn.classList.remove('center-btn-clicked');
    weeklyAdded.classList.remove('plan-added-clicked');
}

function oneTimeOpen() {
    oneTimePane.classList.add('plan-btn-pane-open');
    oneTimeOrderBtn.classList.add('sides-btn-clicked');
    oneTimeAdded.classList.add('plan-added-clicked');
}

function oneTimeClose() {
    oneTimeDelBool = false;
    oneTimePane.classList.remove('plan-btn-pane-open');
    oneTimeOrderBtn.classList.remove('sides-btn-clicked');
    oneTimeAdded.classList.remove('plan-added-clicked');
}

function bulkOpen() {
    bulkPane.classList.add('plan-btn-pane-open');
    bulkOrderBtn.classList.add('sides-btn-clicked');
    bulkAdded.classList.add('plan-added-clicked');
}

function bulkClose() {
    bulkDelBool = false;
    bulkPane.classList.remove('plan-btn-pane-open');
    bulkOrderBtn.classList.remove('sides-btn-clicked');
    bulkAdded.classList.remove('plan-added-clicked');
}














let weeklyDelBool = false;
function weeklyDel() {
    if (weeklyDelBool === false) {
        weeklyDelBool = !weeklyDelBool;
        weeklyOpen();
        oneTimeClose();
        bulkClose();
        document.querySelector('.weekly-btn-check').style.display = "block";
        document.querySelector('.one_time-btn-check').style.display = "none";
        document.querySelector('.bulk-btn-check').style.display = "none";
        hideBulkDiscount();
        bulkMaxOff();
        clearPlansForm();
        addToOrder('weekly');
        getPriceTotal();

    } else if (weeklyDelBool === true) {
        weeklyDelBool = !weeklyDelBool;
        weeklyClose();
        clearPlansForm();
        if (formCheckWeekly.checked === false && formCheckBulk === false && formCheckOnetime === false) {
            formTotalPrice.value = '0';
        }
        getPriceTotal();

    }
}

let bulkDelBool = false;
function bulkDel() {
    if (bulkDelBool === false) { // turns ON bulk delivery options
        bulkDelBool = !bulkDelBool;
        weeklyClose();
        bulkOpen();
        oneTimeClose();
        document.querySelector('.weekly-btn-check').style.display = "none";
        document.querySelector('.one_time-btn-check').style.display = "none";
        document.querySelector('.bulk-btn-check').style.display = "block";
        clearPlansForm();
        addToOrder('bulk');
        displayBulkDiscount();
        bulkMax();

        getPriceTotal();
    } else if (bulkDelBool === true) { // turns OFF bulk delivery options
        bulkDelBool = !bulkDelBool;
        clearPlansForm();
        bulkClose();
        if (formCheckWeekly.checked === false && formCheckBulk === false && formCheckOnetime === false) {
            formTotalPrice.value = '0';
        }
        hideBulkDiscount();
        bulkMaxOff();
        getPriceTotal();
    }
}

let oneTimeDelBool = false;
function oneTimeDel() {
    if (oneTimeDelBool === false) { // turns ON one-time delivery options
        oneTimeDelBool = !oneTimeDelBool;
        weeklyClose();
        bulkClose();
        oneTimeOpen();
        document.querySelector('.weekly-btn-check').style.display = "none";
        document.querySelector('.one_time-btn-check').style.display = "block";
        document.querySelector('.bulk-btn-check').style.display = "none";
        hideBulkDiscount();
        bulkMaxOff();
        clearPlansForm();
        addToOrder('one_time');
        getPriceTotal();
    } else if (oneTimeDelBool === true) { // turns OFF one-time delivery options
        oneTimeDelBool = !oneTimeDelBool;
        oneTimeClose();
        clearPlansForm();
        if (formCheckWeekly.checked === false && formCheckBulk === false && formCheckOnetime === false) {
            formTotalPrice.value = '0';
        }
        getPriceTotal();

    }
}














let formQuanList = Array.from(document.querySelectorAll('.wyld-form-mix input[type=number]'));
let formCheckList = Array.from(document.querySelectorAll('.wyld-form-mix input[type=checkbox]'));

let bulkMaxBool = false;
function bulkMax() {
    bulkMaxBool = true;

    formQuanList.forEach((item, i) => {
        if (i !== formCheckList.length - 1) {
            if (formCheckList[i].checked === true) {
                item.value = "1";
            } else {
                item.value = "";
            }
            item.max = "1";
        }
    });

}

function bulkMaxOff() {

    if (bulkMaxBool === true) {

        formQuanList.forEach((item, i) => {
            if (formCheckList[i].checked === false) {
                item.value = "";
            } else {
                item.value = "1";
            }
            item.max = "3";
        });

    }

    bulkMaxBool = false;
}

let bulkDiscount = document.querySelector('.bulk-discount-pane');

function displayBulkDiscount() {
    bulkDiscount.style.display = "block";
}

function hideBulkDiscount() {
    let discountBool = false
    formQuanList.forEach((item) => {
        if (item.value === "3") {
            discountBool = true;
        }
    });
    if (discountBool === false) {
        bulkDiscount.style.display = "none";
    }
}















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

function getPriceTotal() {
    let planPrice;

    function getPlanPrice(input) {
        planPrice = input;
    }

    formCheckWeekly.checked === true && getPlanPrice(10);
    formCheckOnetime.checked === true && getPlanPrice(12);
    formCheckBulk.checked === true && getPlanPrice(30);


    function getTotalQuantity() {
        let checkList = Array.from(document.querySelectorAll('.wyld-form-mix input[type=number]'));
        let totalQuantity = 0;

        for (let i = 0; i <= checkList.length - 1; i++) {

            totalQuantity += Number(checkList[i].value);
        }
        return totalQuantity;

    }
    let price = getTotalQuantity() * planPrice;

    formTotalPrice.value = price;
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


let customFormCheck = document.querySelector('.wyld-form-mix input[name=mix_custom]');

function customQuantityVerify() { // NEEDS to check if pane is open before applying styles

    // if (Number(formCustomQuan.value) >= 4) {
    //     formCustomQuan.value = "3";
    // }

    if (bulkMaxBool === true) {
        if (Number(formCustomQuan.value) >= 1) {
            formCustomQuan.value = "1";
        }
    }

    customFormCheck.checked = true;

    let total = Number(document.querySelector(".wyld-form-mix input[name=custom-num]").value);

    if (total >= 10) {
        // console.log('more')
        customOrderBtn.style.pointerEvents = "none";
        customOrderBtn.innerHTML = "Max 3 per week<br>Please Check Quantity On Form";

    } else if (total <= 2) {
        customOrderBtn.style.pointerEvents = "auto";
        customOrderBtn.innerHTML = "Start A New Custom Order";
        // console.log('less');
    }
    // console.log('input');
    getPriceTotal();

}



function checkCustomQuantities() {
    if ( customOrder3.quantity === 20 ) {
        console.log('max');
        customOrderBtn.style.pointerEvents = "none";
        customOrderBtn.innerHTML = "Max 3 per week<br>Please Check Order Form"
    } else {
        customOrderBtn.style.pointerEvents = "auto";
        customOrderBtn.innerHTML = "Start A New Custom Order";
    }
}

function getTotalCustom() {
    let total = customOrder1.quantity + customOrder2.quantity + customOrder3.quantity;

    document.querySelector(".wyld-form-mix input[name=custom-num]").value = total;

    
    if ( customOrder1.ingredients !== "" && customOrder2.ingredients !== "" && customOrder3.ingredients !== "" ) {
        customOrderBtn.style.pointerEvents = "none";
        customOrderBtn.innerHTML = "Max 3 per week<br>Please Check Quantity On Form";
    }

    getPriceTotal();

}

function order1Input() {
    customOrder1.quantity = Number(document.querySelector('.num-1 input').value);
    customNewOrder();
    getTotalCustom();
}

function order2Input() {
    customOrder2.quantity = Number(document.querySelector('.num-2 input').value);
    customNewOrder();
    getTotalCustom();
}

function order3Input() {
    customOrder3.quantity = Number(document.querySelector('.num-3 input').value);
    customNewOrder();
    getTotalCustom();
}


function newCustomDisplay() {
    document.querySelector(".num-1 p").innerHTML = `Custom order with the following:<br>  - ${customOrder1.ingredients}`;
    document.querySelector(".num-1 input").value = customOrder1.quantity.toString();

    if (customOrder2.quantity !== 0) {
        document.querySelector('.num-2').style.display = "block";
        document.querySelector(".num-2 p").innerHTML = `Custom order with the following:<br>  - ${customOrder2.ingredients}`;
        document.querySelector(".num-2 input").value = customOrder2.quantity.toString();
    }

    if (customOrder3.quantity !== 0) {
        document.querySelector('.num-3').style.display = "block";

        document.querySelector(".num-3 p").innerHTML = `Custom order with the following:<br>  - ${customOrder3.ingredients}`;
        document.querySelector(".num-3 input").value = customOrder3.quantity.toString();
    }
}



function addIngredientForm() {
    window.location.href = "#ingred-box";
    window.scrollBy(0, -180);
}



function removeCustomOrder(input) {
    if ( input === 1 ) {
        customOrder1.quantity = 0;
        customOrder1.ingredients = "";
        document.querySelector(".num-1 p").innerHTML = "Add Ingredients";
        document.querySelector(".num-1 input").value = "0";
        customNewOrder();

    } else if ( input === 2 ) {
        customOrder2.quantity = 0;
        customOrder2.ingredients = "";
        document.querySelector(".num-2 p").innerHTML = "Add Ingredients";
        document.querySelector(".num-2 input").value = "0";
        customNewOrder();

    } else if ( input === 3 ) {
        customOrder3.quantity = 0;
        customOrder3.ingredients = "";
        document.querySelector(".num-3 p").innerHTML = "Add Ingredients";
        document.querySelector(".num-3 input").value = "0";
        customNewOrder();

    }
    
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























