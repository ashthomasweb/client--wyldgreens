

// MIX SELECTION BUTTONS

// 'Farmers Mix' order button control booleans
let farmersBool = false;
let farmersUpdateBool = false;

// DOM variables
let farmersOrderBtn = document.querySelector("#farmers-order-btn");
let farmersPane = document.querySelector("#farmers-pane");
let farmersQuan = document.querySelector("#farmers-quantity");
let farmersClose = document.querySelector('.farmers-remove');
let farmersQuanP = document.querySelector("#farmers-quantity p");
let farmersQuanCheck = document.querySelector("#farmers-quantity img");
let farmersQuanCross = document.querySelector('.farmers-btn-cross');
let farmersQuanInput = document.querySelector("#farmers-quantity input");


function farmersMix() { // primary button
    if (farmersUpdateBool === true) { // if updating quantity - data already sent to form
        sendFarmerData();

    } else if (farmersUpdateBool === false) { // if first data submission

        if (farmersBool === false) { // open slider
            farmersBool = !farmersBool;
            farmersOrderBtn.innerText = "Add to Order Form";
            farmersPane.classList.add("mix-btn-pane-open");
            farmersOrderBtn.classList.add('mix-button-clicked');
            farmersQuan.classList.add('mix-quantity-clicked');
            farmersClose.classList.add('mix-remove-clicked');
            setTimeout(() => {
                farmersPane.style.transition = "box-shadow .1s ease-out";
            }, 400);
        } else if (farmersBool === true) { // send to form after quantity selection
            farmersBool = !farmersBool;
            sendFarmerData();
            farmersClose.innerText = "Remove";
        }
    }
}

function farmersUpdate() { // apply styles if data already sent to form
    if (Number(farmersQuanInput.value) > 3 || Number(farmersQuanInput.value) === 0) {
        farmersQuanP.style.opacity = "1";
        farmersQuanCheck.style.display = "none";
        farmersQuanP.innerHTML = "Max 3<br>per week";
        farmersQuanP.style.left = "18px";
        farmersOrderBtn.style.pointerEvents = "none";

    } else if (Number(farmersQuanInput.value) >= 1 || Number(farmersQuanInput.value) <= 3) {
        farmersQuanP.innerHTML = "How<br>Many?";
        farmersQuanP.style.left = "23px";
        farmersOrderBtn.style.pointerEvents = "auto";

        if (document.querySelector('[name=mix_farmers]').checked === true) {
            farmersUpdateBool = true;
            farmersQuanP.style.opacity = "1";
            farmersQuanCheck.style.display = "none";
            farmersOrderBtn.innerText = "Update Quantity";
            farmersOrderBtn.style.pointerEvents = "auto";
        }
    }

}

function farmersCloseBtn() { // hidden tab close button
    farmersBool = false;
    farmersUpdateBool = false;

    function panelClose() { // close button panel
        farmersOrderBtn.innerText = "Add To Order";
        farmersPane.classList.remove("mix-btn-pane-open");
        farmersOrderBtn.classList.remove('mix-button-clicked');
        farmersQuan.classList.remove('mix-quantity-clicked');
        farmersClose.classList.remove('mix-remove-clicked');
        setTimeout(() => {
            farmersPane.style.transition = "border .25s ease-out .1s, box-shadow .25s ease-out .1s";
        }, 200);
    }

    if (farmersClose.innerText === "Remove") { // if product already added
        document.querySelector(".wyld-form-mix input[name=farmers-num]").value = "0";
        document.querySelector('[name=mix_farmers]').checked = false;
        farmersQuanCheck.style.display = "none";
        farmersQuanInput.value = "0";
        farmersOrderBtn.innerText = "Deleted from Order";
        farmersQuanP.style.opacity = "0";
        farmersQuanCross.style.display = "block";
        farmersClose.style.pointerEvents = "none";
        setTimeout(() => {
            farmersOrderBtn.style.pointerEvents = "auto";
            panelClose();
        }, 2000);
        setTimeout(() => {
            farmersQuanCross.style.display = "none";
            farmersQuanP.style.opacity = "1";
            farmersQuanInput.value = "1";
            farmersClose.innerText = "Close";
            farmersClose.style.pointerEvents = "auto";
        }, 2300);
    } else { // if no product added
        panelClose();
    }
}

function sendFarmerData() {
    farmersOrderBtn.innerText = "Added to Order!";
    farmersOrderBtn.style.pointerEvents = "none";
    farmersQuanP.style.opacity = "0";
    farmersQuanCheck.style.display = "block";
    document.querySelector(".wyld-form-mix input[name=farmers-num]").value = farmersQuanInput.value;
    addToOrder('mix_farmers');
}


// 'Spicy Mix' order button control booleans
let spicyBool = false;
let spicyUpdateBool = false;

// DOM variables
let spicyOrderBtn = document.querySelector("#spicy-order-btn");
let spicyPane = document.querySelector("#spicy-pane");
let spicyQuan = document.querySelector("#spicy-quantity");
let spicyClose = document.querySelector('.spicy-remove');
let spicyQuanP = document.querySelector("#spicy-quantity p");
let spicyQuanCheck = document.querySelector("#spicy-quantity img");
let spicyQuanCross = document.querySelector('.spicy-btn-cross');
let spicyQuanInput = document.querySelector("#spicy-quantity input");


function spicyMix() { // primary button
    if (spicyUpdateBool === true) { // if updating quantity - data already sent to form
        sendSpicyData();

    } else if (spicyUpdateBool === false) { // if first data submission

        if (spicyBool === false) { // open slider
            spicyBool = !spicyBool;
            spicyOrderBtn.innerText = "Add to Order Form";
            spicyPane.classList.add("mix-btn-pane-open");
            spicyOrderBtn.classList.add('mix-button-clicked');
            spicyQuan.classList.add('mix-quantity-clicked');
            spicyClose.classList.add('mix-remove-clicked');
            setTimeout(() => {
                spicyPane.style.transition = "box-shadow .1s ease-out";
            }, 400);
        } else if (spicyBool === true) { // send to form after quantity selection
            spicyBool = !spicyBool;
            sendSpicyData();
            spicyClose.innerText = "Remove";
        }
    }
}

function spicyUpdate() { // apply styles if data already sent to form
    if (Number(spicyQuanInput.value) > 3 || Number(spicyQuanInput.value) === 0) {
        spicyQuanP.style.opacity = "1";
        spicyQuanCheck.style.display = "none";
        spicyQuanP.innerHTML = "Max 3<br>per week";
        spicyQuanP.style.left = "18px";
        spicyOrderBtn.style.pointerEvents = "none";

    } else if (Number(spicyQuanInput.value) >= 1 || Number(spicyQuanInput.value) <= 3) {
        spicyQuanP.innerHTML = "How<br>Many?";
        spicyQuanP.style.left = "23px";
        spicyOrderBtn.style.pointerEvents = "auto";

        if (document.querySelector('[name=mix_spicy]').checked === true) {
            spicyUpdateBool = true;
            spicyQuanP.style.opacity = "1";
            spicyQuanCheck.style.display = "none";
            spicyOrderBtn.innerText = "Update Quantity";
            spicyOrderBtn.style.pointerEvents = "auto";
        }
    }

}

function spicyCloseBtn() { // hidden tab close button
    spicyBool = false;
    spicyUpdateBool = false;

    function panelClose() { // close button panel
        spicyOrderBtn.innerText = "Add To Order";
        spicyPane.classList.remove("mix-btn-pane-open");
        spicyOrderBtn.classList.remove('mix-button-clicked');
        spicyQuan.classList.remove('mix-quantity-clicked');
        spicyClose.classList.remove('mix-remove-clicked');
        setTimeout(() => {
            spicyPane.style.transition = "border .25s ease-out .1s, box-shadow .25s ease-out .1s";
        }, 200);
    }

    if (spicyClose.innerText === "Remove") { // if product already added
        document.querySelector(".wyld-form-mix input[name=spicy-num]").value = "0";
        document.querySelector('[name=mix_spicy]').checked = false;
        spicyQuanCheck.style.display = "none";
        spicyQuanInput.value = "0";
        spicyOrderBtn.innerText = "Deleted from Order";
        spicyQuanP.style.opacity = "0";
        spicyQuanCross.style.display = "block";
        spicyClose.style.pointerEvents = "none";
        setTimeout(() => {
            spicyOrderBtn.style.pointerEvents = "auto";
            panelClose();
        }, 2000);
        setTimeout(() => {
            spicyQuanCross.style.display = "none";
            spicyQuanP.style.opacity = "1";
            spicyQuanInput.value = "1";
            spicyClose.innerText = "Close";
            spicyClose.style.pointerEvents = "auto";
        }, 2300);
    } else { // if no product added
        panelClose();
    }
}

function sendSpicyData() {
    spicyOrderBtn.innerText = "Added to Order!";
    spicyOrderBtn.style.pointerEvents = "none";
    spicyQuanP.style.opacity = "0";
    spicyQuanCheck.style.display = "block";
    document.querySelector(".wyld-form-mix input[name=spicy-num]").value = spicyQuanInput.value;
    addToOrder('mix_spicy');
    discountDisplayHandler();
}

// 'Salad Mix' order button control booleans
let saladBool = false;
let saladUpdateBool = false;

// DOM variables
let saladOrderBtn = document.querySelector("#salad-order-btn");
let saladPane = document.querySelector("#salad-pane");
let saladQuan = document.querySelector("#salad-quantity");
let saladClose = document.querySelector('.salad-remove');
let saladQuanP = document.querySelector("#salad-quantity p");
let saladQuanCheck = document.querySelector("#salad-quantity img");
let saladQuanCross = document.querySelector('.salad-btn-cross');
let saladQuanInput = document.querySelector("#salad-quantity input");


function saladMix() { // primary button
    if (saladUpdateBool === true) { // if updating quantity - data already sent to form
        sendSaladData();

    } else if (saladUpdateBool === false) { // if first data submission

        if (saladBool === false) { // open slider
            saladBool = !saladBool;
            saladOrderBtn.innerText = "Add to Order Form";
            saladPane.classList.add("mix-btn-pane-open");
            saladOrderBtn.classList.add('mix-button-clicked');
            saladQuan.classList.add('mix-quantity-clicked');
            saladClose.classList.add('mix-remove-clicked');
            setTimeout(() => {
                saladPane.style.transition = "box-shadow .1s ease-out";
            }, 400);
        } else if (saladBool === true) { // send to form after quantity selection
            saladBool = !saladBool;
            sendSaladData();
            saladClose.innerText = "Remove";
        }
    }
}

function saladUpdate() { // apply styles if data already sent to form
    if (Number(saladQuanInput.value) > 3 || Number(saladQuanInput.value) === 0) {
        saladQuanP.style.opacity = "1";
        saladQuanCheck.style.display = "none";
        saladQuanP.innerHTML = "Max 3<br>per week";
        saladQuanP.style.left = "18px";
        saladOrderBtn.style.pointerEvents = "none";

    } else if (Number(saladQuanInput.value) >= 1 || Number(saladQuanInput.value) <= 3) {
        saladQuanP.innerHTML = "How<br>Many?";
        saladQuanP.style.left = "23px";
        saladOrderBtn.style.pointerEvents = "auto";

        if (document.querySelector('[name=mix_salad]').checked === true) {
            saladUpdateBool = true;
            saladQuanP.style.opacity = "1";
            saladQuanCheck.style.display = "none";
            saladOrderBtn.innerText = "Update Quantity";
            saladOrderBtn.style.pointerEvents = "auto";
        }
    }

}

function saladCloseBtn() { // hidden tab close button
    saladBool = false;
    saladUpdateBool = false;

    function panelClose() { // close button panel
        saladOrderBtn.innerText = "Add To Order";
        saladPane.classList.remove("mix-btn-pane-open");
        saladOrderBtn.classList.remove('mix-button-clicked');
        saladQuan.classList.remove('mix-quantity-clicked');
        saladClose.classList.remove('mix-remove-clicked');
        setTimeout(() => {
            saladPane.style.transition = "border .25s ease-out .1s, box-shadow .25s ease-out .1s";
        }, 200);
    }

    if (saladClose.innerText === "Remove") { // if product already added
        document.querySelector(".wyld-form-mix input[name=salad-num]").value = "0";
        document.querySelector('[name=mix_salad]').checked = false;
        saladQuanCheck.style.display = "none";
        saladQuanInput.value = "0";
        saladOrderBtn.innerText = "Deleted from Order";
        saladQuanP.style.opacity = "0";
        saladQuanCross.style.display = "block";
        saladClose.style.pointerEvents = "none";
        setTimeout(() => {
            saladOrderBtn.style.pointerEvents = "auto";
            panelClose();
        }, 2000);
        setTimeout(() => {
            saladQuanCross.style.display = "none";
            saladQuanP.style.opacity = "1";
            saladQuanInput.value = "1";
            saladClose.innerText = "Close";
            saladClose.style.pointerEvents = "auto";
        }, 2300);
    } else { // if no product added
        panelClose();
    }
}

function sendSaladData() {
    saladOrderBtn.innerText = "Added to Order!";
    saladOrderBtn.style.pointerEvents = "none";
    saladQuanP.style.opacity = "0";
    saladQuanCheck.style.display = "block";
    document.querySelector(".wyld-form-mix input[name=salad-num]").value = saladQuanInput.value;
    addToOrder('mix_salad');
}

// 'Healthy Mix' order button control booleans
let healthyBool = false;
let healthyUpdateBool = false;

// DOM variables
let healthyOrderBtn = document.querySelector("#healthy-order-btn");
let healthyPane = document.querySelector("#healthy-pane");
let healthyQuan = document.querySelector("#healthy-quantity");
let healthyClose = document.querySelector('.healthy-remove');
let healthyQuanP = document.querySelector("#healthy-quantity p");
let healthyQuanCheck = document.querySelector("#healthy-quantity img");
let healthyQuanCross = document.querySelector('.healthy-btn-cross');
let healthyQuanInput = document.querySelector("#healthy-quantity input");


function healthyMix() { // primary button
    if (healthyUpdateBool === true) { // if updating quantity - data already sent to form
        sendHealthyData();

    } else if (healthyUpdateBool === false) { // if first data submission

        if (healthyBool === false) { // open slider
            healthyBool = !healthyBool;
            healthyOrderBtn.innerText = "Add to Order Form";
            healthyPane.classList.add("mix-btn-pane-open");
            healthyOrderBtn.classList.add('mix-button-clicked');
            healthyQuan.classList.add('mix-quantity-clicked');
            healthyClose.classList.add('mix-remove-clicked');
            setTimeout(() => {
                healthyPane.style.transition = "box-shadow .1s ease-out";
            }, 400);
        } else if (healthyBool === true) { // send to form after quantity selection
            healthyBool = !healthyBool;
            sendHealthyData();
            healthyClose.innerText = "Remove";
        }
    }
}

function healthyUpdate() { // apply styles if data already sent to form
    if (Number(healthyQuanInput.value) > 3 || Number(healthyQuanInput.value) === 0) {
        healthyQuanP.style.opacity = "1";
        healthyQuanCheck.style.display = "none";
        healthyQuanP.innerHTML = "Max 3<br>per week";
        healthyQuanP.style.left = "18px";
        healthyOrderBtn.style.pointerEvents = "none";

    } else if (Number(healthyQuanInput.value) >= 1 || Number(healthyQuanInput.value) <= 3) {
        healthyQuanP.innerHTML = "How<br>Many?";
        healthyQuanP.style.left = "23px";
        healthyOrderBtn.style.pointerEvents = "auto";

        if (document.querySelector('[name=mix_healthy]').checked === true) {
            healthyUpdateBool = true;
            healthyQuanP.style.opacity = "1";
            healthyQuanCheck.style.display = "none";
            healthyOrderBtn.innerText = "Update Quantity";
            healthyOrderBtn.style.pointerEvents = "auto";
        }
    }

}

function healthyCloseBtn() { // hidden tab close button
    healthyBool = false;
    healthyUpdateBool = false;

    function panelClose() { // close button panel
        healthyOrderBtn.innerText = "Add To Order";
        healthyPane.classList.remove("mix-btn-pane-open");
        healthyOrderBtn.classList.remove('mix-button-clicked');
        healthyQuan.classList.remove('mix-quantity-clicked');
        healthyClose.classList.remove('mix-remove-clicked');
        setTimeout(() => {
            healthyPane.style.transition = "border .25s ease-out .1s, box-shadow .25s ease-out .1s";
        }, 200);
    }

    if (healthyClose.innerText === "Remove") { // if product already added
        document.querySelector(".wyld-form-mix input[name=healthy-num]").value = "0";
        document.querySelector('[name=mix_healthy]').checked = false;
        healthyQuanCheck.style.display = "none";
        healthyQuanInput.value = "0";
        healthyOrderBtn.innerText = "Deleted from Order";
        healthyQuanP.style.opacity = "0";
        healthyQuanCross.style.display = "block";
        healthyClose.style.pointerEvents = "none";
        setTimeout(() => {
            healthyOrderBtn.style.pointerEvents = "auto";
            panelClose();
        }, 2000);
        setTimeout(() => {
            healthyQuanCross.style.display = "none";
            healthyQuanP.style.opacity = "1";
            healthyQuanInput.value = "1";
            healthyClose.innerText = "Close";
            healthyClose.style.pointerEvents = "auto";
        }, 2300);
    } else { // if no product added
        panelClose();
    }
}

function sendHealthyData() {
    healthyOrderBtn.innerText = "Added to Order!";
    healthyOrderBtn.style.pointerEvents = "none";
    healthyQuanP.style.opacity = "0";
    healthyQuanCheck.style.display = "block";
    document.querySelector(".wyld-form-mix input[name=healthy-num]").value = healthyQuanInput.value;
    addToOrder('mix_healthy');
}


