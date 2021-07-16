function customObjectUpdate(quantity, currentOrder) {
    if (currentOrder === 1) {
        customOrder1.quantity = quantity;
    } else if (currentOrder === 2) {
        customOrder2.quantity = quantity;
    } else if (currentOrder === 3) {
        customOrder3.quantity = quantity;
    }
}

let customOrder1 = {
    quantity: 0,
    ingredients: ""
};
let customOrder2 = {
    quantity: 0,
    ingredients: ""
};
let customOrder3 = {
    quantity: 0,
    ingredients: ""
};

let currentOrder;

function customObjectHandling(quantity, ingredients) {
    if (customOrder1.ingredients === "") {
        customOrder1.quantity = quantity;
        customOrder1.ingredients = ingredients;
        // checkCustomQuantities();
        currentOrder = 1;
    } else if (customOrder2.ingredients === "") {
        customOrder2.quantity = quantity;
        customOrder2.ingredients = ingredients;
        // checkCustomQuantities();
        currentOrder = 2;

    } else if (customOrder3.ingredients === "") {
        customOrder3.quantity = quantity;
        customOrder3.ingredients = ingredients;
        // checkCustomQuantities();
        currentOrder = 3;

    }
}

function newCustomDisplay() {
    document.querySelector(".num-1 p").innerHTML = `Custom order with the following:<br>  - ${customOrder1.ingredients}`;
    document.querySelector(".num-1 input").value = customOrder1.quantity.toString();
    document.querySelector(".num-2 ").style.display = "block";

    if (customOrder2.ingredients !== "" ) {
        document.querySelector('.num-2').style.display = "block";
        document.querySelector(".num-2 p").innerHTML = `Custom order with the following:<br>  - ${customOrder2.ingredients}`;
        document.querySelector(".num-2 input").value = customOrder2.quantity.toString();
        document.querySelector(".num-3 ").style.display = "block";
    }

    if (customOrder3.ingredients !== "" ) {
        document.querySelector('.num-3').style.display = "block";
        document.querySelector(".num-3 p").innerHTML = `Custom order with the following:<br>  - ${customOrder3.ingredients}`;
        document.querySelector(".num-3 input").value = customOrder3.quantity.toString();
    }
}

function addIngredientForm() {
    customNewOrder();
    customOrderOn();
    window.location.href = "#ingred-box";
    window.scrollBy(0, -180);
}

function removeCustomOrder(input) {
    if (input === 1) {
        customOrder1.quantity = 0;
        customOrder1.ingredients = "";
        document.querySelector(".num-1 p").innerHTML = "Add Ingredients";
        document.querySelector(".num-1 input").value = "";
        customNewOrder();

    } else if (input === 2) {
        customOrder2.quantity = 0;
        customOrder2.ingredients = "";
        document.querySelector(".num-2 p").innerHTML = "Add Ingredients";
        document.querySelector(".num-2 input").value = "";
        customNewOrder();

    } else if (input === 3) {
        customOrder3.quantity = 0;
        customOrder3.ingredients = "";
        document.querySelector(".num-3 p").innerHTML = "Add Ingredients";
        document.querySelector(".num-3 input").value = "";
        customNewOrder();

    }
    getPriceTotal();
}

function maxOutCustom() {
    if (customOrder1.ingredients !== "" && customOrder2.ingredients !== "" && customOrder3.ingredients !== "") {
        customOrderBtn.style.pointerEvents = "none";
        customOrderBtn.innerHTML = "Max 3 per week<br>Please Check Quantity On Form";
    }
}

let formCustomCheck = document.querySelector('.wyld-form-mix input[name=mix_custom]');

function getTotalCustom() {
    let num1Quan = Number(document.querySelector('.num-1 input').value);
    let num2Quan = Number(document.querySelector('.num-2 input').value);
    let num3Quan = Number(document.querySelector('.num-3 input').value);

    let total = num1Quan + num2Quan + num3Quan;

    if ( total === 0 ) {
        total = "";
    }

    document.querySelector(".wyld-form-mix input[name=custom-num]").value = total;

    maxOutCustom();

    if ( customOrder1.quantity === 0 &&  customOrder2.quantity === 0 &&  customOrder3.quantity === 0 ) {
        formCustomCheck.checked = false;
    }
}

let customOrderInput1 = document.querySelector('.num-1 input');
let customOrderInput2 = document.querySelector('.num-2 input');
let customOrderInput3 = document.querySelector('.num-3 input');

window.document.querySelector('.num-1 input').addEventListener('change', () => {
  
});


function order1Input() {
    if (Number(document.querySelector('.num-1 input').value) >= 4) {
        customOrderInput1.value = "3";
    }
    customOrder1.quantity = Number(document.querySelector('.num-1 input').value);
    Number(document.querySelector('.num-1 input').value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    formCustomCheck.checked = true;
    if ( customOrderInput1.value === "0" || customOrderInput1.value === "" ) {
        customOrderInput1.value = "";
        removeCustomOrder(1);
    }
    customNewOrder();
    getPriceTotal(21);
}

function order2Input() {
    if (Number(document.querySelector('.num-2 input').value) >= 4) {
        customOrderInput2.value = "3";
    }
    customOrder2.quantity = Number(document.querySelector('.num-2 input').value);
    Number(document.querySelector('.num-2 input').value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    formCustomCheck.checked = true;
    if ( customOrderInput2.value === "0" ) {
        customOrderInput2.value = "";
    }
    customNewOrder();
    getPriceTotal(20);
}

function order3Input() {
    if (Number(document.querySelector('.num-3 input').value) >= 4) {
        customOrderInput3.value = "3";
    }
    customOrder3.quantity = Number(document.querySelector('.num-3 input').value);
    Number(document.querySelector('.num-3 input').value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    formCustomCheck.checked = true;
    if ( customOrderInput3.value === "0" ) {
        customOrderInput3.value = "";
    }
    customNewOrder();
    getPriceTotal(19);
}

function customRemoveDisplayHandler() {
    if ( customOrderInput1.value === "0" || customOrderInput1.value === "" || Number(customOrderInput1.value) === 0 ) {
        document.querySelector('.num-1 img').style.opacity = "0.3";
    } else {
        document.querySelector('.num-1 img').style.opacity = "1";
    }

    if ( customOrderInput2.value === "0" || customOrderInput2.value === "" || Number(customOrderInput2.value) === 0 ) {
        document.querySelector('.num-2 img').style.opacity = "0.3";
    } else {
        document.querySelector('.num-2 img').style.opacity = "1";
    }

    if ( customOrderInput3.value === "0" || customOrderInput3.value === "" || Number(customOrderInput3.value) === 0 ) {
        document.querySelector('.num-3 img').style.opacity = "0.3";
    } else {
        document.querySelector('.num-3 img').style.opacity = "1";
    }
}


// function checkCustomQuantities() {
//     if (customOrder3.quantity === 20) {
//         console.log('max');
//         customOrderBtn.style.pointerEvents = "none";
//         customOrderBtn.innerHTML = "Max 3 per week<br>Please Check Order Form"
//     } else {
//         customOrderBtn.style.pointerEvents = "auto";
//         customOrderBtn.innerHTML = "Start A New Custom Order";
//     }
// }


let customFormCheck = document.querySelector('.wyld-form-mix input[name=mix_custom]');

function customQuantityVerify() { // NEEDS to check if pane is open before applying styles

    if (bulkMaxBool === true) {
        if (Number(formCustomQuan.value) >= 1) {
            formCustomQuan.value = "1";
        }
    }

    customFormCheck.checked = true;

    let total = Number(document.querySelector(".wyld-form-mix input[name=custom-num]").value);

    if (total <= 2) {
        customOrderBtn.style.pointerEvents = "auto";
        customOrderBtn.innerHTML = "Start A New Custom Order";
    }
    getPriceTotal(18);

}

function bulkQuantityAdjust() {
    if (customOrder1.quantity != 0) {
        customOrder1.quantity = 1;
    }
    if (customOrder2.quantity != 0) {
        customOrder2.quantity = 1;
    }
    if (customOrder3.quantity != 0) {
        customOrder3.quantity = 1;
    }
}