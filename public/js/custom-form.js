
// CUSTOM MIX FORM

let customOrderBtn = document.querySelector(".custom-order-button");
let hiddenBtn = document.querySelector(".custom-order-hidden");
let ingredChecks = document.querySelectorAll('.custom-check');
let orderBox = document.querySelector('.ingred-box');
let customClose = document.querySelector('.custom-close');
let orderWrap = document.querySelector('.ingred-wrap');
let customQuanP = document.querySelector('.custom-quantity p');
let customQuanCheck = document.querySelector('.custom-btn-check');
let customQuanCross = document.querySelector('.custom-btn-cross');
let customNew = document.querySelector('.custom-new');
let customQuanInput = document.querySelector('.custom-quantity input');
let customRemove = document.querySelector('.custom-remove');

function customOrderOn() { // open pane, apply styles
    customOrderBtn.innerText = "Pick up to 4";
    customOrderBtn.classList.add('custom-order-btn-clicked');
    customOrderBtn.style.pointerEvents = 'none';

    hiddenBtn.classList.add('custom-order-hidden-clicked');
    orderWrap.classList.add('custom-order-shadow');
    hiddenBtn.style.pointerEvents = 'none';
    hiddenBtn.style.color = 'grey';
    customClose.classList.add('custom-close-clicked');
    for (i = 0; i < ingredChecks.length; i++) {
        ingredChecks[i].style.opacity = '1';
        // ingredChecks[i].disabled = false;
        ingredChecks[i].style.cursor = "pointer";
        document.querySelectorAll('.custom-ingredients label')[i].style.cursor = "pointer";
        document.querySelectorAll('.custom-ingredients label')[i].style.pointerEvents = "auto";
    }
}

function customOrderOff() { // close pane
    customQuanBool = false;
    currentOrderSubmitted = false;

    customOrderBtn.classList.remove('custom-order-btn-clicked');
    hiddenBtn.classList.remove('custom-order-hidden-clicked');
    orderWrap.classList.remove('custom-order-shadow');
    customClose.classList.remove('custom-close-clicked');
    customNew.classList.remove('custom-close-clicked');
    customQuanCheck.style.display = "none";
    customQuanP.style.opacity = "1";

    customOrderBtn.innerText = "Start A New Custom Order";
    customOrderBtn.style.pointerEvents = 'auto';
    document.querySelector('.custom-btn-slider').classList.remove('custom-btn-slider-anim');
    hiddenBtn.innerText = "Create Mix!"
    customQuanInput.value = 1;

    for (i = 0; i < ingredChecks.length; i++) {
        ingredChecks[i].style.opacity = '0.4';
        // ingredChecks[i].disabled = true;
        ingredChecks[i].checked = false;
        ingredChecks[i].style.cursor = "default";
        document.querySelectorAll('.custom-ingredients label')[i].style.cursor = "default";
    }
}

function customNewOrder() {
    customQuanBool = false;
    customUpdateBool = false;
    currentOrderSubmitted = false;
    customNew.classList.remove('custom-remove-clicked');
    customOrderOff();
    getTotalCustom();
    checkCustomQuantities();
    // customOrderOn();
}

let currentOrderSubmitted = false;

function customUpdate() { // apply styles if data already sent to form
    if (Number(customQuanInput.value) > 3 || Number(customQuanInput.value) === 0) {
        customQuanP.style.opacity = "1";
        customQuanCheck.style.display = "none";
        customQuanP.innerHTML = "Max 3<br>per week";
        customQuanP.style.left = "23px";
        hiddenBtn.style.pointerEvents = "none";

    } else if (Number(customQuanInput.value) >= 1 || Number(customQuanInput.value) <= 3) {
        customQuanP.innerHTML = "How<br>Many?";
        customQuanP.style.left = "31px";
        hiddenBtn.style.pointerEvents = "auto";

        if (currentOrderSubmitted === true) {
            customUpdateBool = true;
            customQuanP.style.opacity = "1";
            customQuanCheck.style.display = "none";
            hiddenBtn.innerText = "Update Quantity";
            hiddenBtn.style.pointerEvents = "auto";
        }
    }

}

function ingredCheck() {
    if ( customOrderBtn.innerText != "Pick up to 4" ) {
        customOrderOn();
    } 
    let customChecks = document.querySelectorAll('.custom-check');
    let count = 0;
    for (i = 0; i < customChecks.length; i++) {
        if (customChecks[i].checked == true) {
            count++;
        }
    }

    if (count > 4) {
        customOrderBtn.style.pointerEvents = 'none';
        customOrderBtn.innerText = "Too many!";
        hiddenBtn.style.pointerEvents = "none";
        hiddenBtn.style.color = 'grey';
        document.querySelector(".custom-quantity p").innerText = "Too Many Items!";
        // document.querySelector(".custom-quantity p").style.left = "px";
        document.querySelector(".custom-quantity p").style.top = "15px";
        document.querySelector(".custom-quantity input").style.display = "none";

    } else if (count > 0 && count <= 4) {
        customOrderBtn.innerText = "Pick up to 4";
        customOrderBtn.style.pointerEvents = 'none';
        hiddenBtn.style.pointerEvents = "auto";
        hiddenBtn.style.color = '#222';
        document.querySelector(".custom-quantity p").innerHTML = "How<br>Many?";
        document.querySelector(".custom-quantity p").style.left = "31px";
        document.querySelector(".custom-quantity p").style.top = "7px";
        document.querySelector(".custom-quantity input").style.display = "inline-block";

    } else if (count === 0) {
        hiddenBtn.style.pointerEvents = "none";

    }
}

let customQuanBool = false;
let customUpdateBool = false;

function sendCustomData(update) {

    currentOrderSubmitted = true;
    hiddenBtn.innerText = "Added to Order!";
    hiddenBtn.style.pointerEvents = "none";
    customQuanP.style.opacity = "0";
    customQuanCheck.style.display = "block";
    document.querySelector(".wyld-form-mix input[name=custom-num]").value = customQuanInput.value;
    addToOrder('mix_custom');

    // data gathering and packaging

    let boxVar = "box";
    let newOrderQuan = Number(customQuanInput.value);
    let itemList = [];

    for (i = 0; i < ingredChecks.length; i++) {
        ingredChecks[i].checked === true && itemList.push(ingredChecks[i].name);
    }
    if (Number(customQuanInput.value) > 1) {
        boxVar = "boxes";
    }

    // custom order object update
    if (update === true) {
        customObjectUpdate(newOrderQuan, currentOrder);
    } else {
        // custom order object handling
        customObjectHandling(newOrderQuan, itemList);
    }

    // getTotalCustom();
    newCustomDisplay();
    discountDisplayHandler();
    getPriceTotal(17);
}

function promptQuantity() {

    if (customUpdateBool === true) { // if updating quantity - data already sent to form
        sendCustomData(true);
    } else if (customUpdateBool === false) {

        if (customQuanBool === true) { // action when quantity box displayed and ingredients selected - data submission
            customQuanBool = false;

            // update form checkbox
            addToOrder('mix_custom');
            sendCustomData();

            // display new option buttons
            customNew.classList.add('custom-remove-clicked');
            customClose.classList.remove('custom-close-clicked');
            customNew.style.pointerEvents = "auto";

            // turn off ingredient selection
            for (i = 0; i < ingredChecks.length; i++) {
                ingredChecks[i].style.cursor = "default";
                if (ingredChecks[i].checked === false) {
                    ingredChecks[i].style.opacity = '0.5';
                }
                // document.querySelectorAll('.custom-ingredients label')[i].style.pointerEvents = "none";
            }

        } else if (customQuanBool === false) { // first click after adding ingredient
            if (bulkDelBool === true) {
                customQuanP.innerHTML = "Bulk<br>Order";
                customQuanInput.value = "4";
            }
            customQuanBool = true;
            hiddenBtn.innerText = "Add to Order Form";
            document.querySelector('.custom-btn-slider').classList.add('custom-btn-slider-anim');
            hiddenBtn.style.right = "1px";
        }
    }
}
