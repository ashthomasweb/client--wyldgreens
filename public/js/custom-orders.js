
function customObjectUpdate(quantity, currentOrder) {
    if ( currentOrder === 1 ) {
        customOrder1.quantity = quantity;
    } else if (currentOrder === 2 ) {
        customOrder2.quantity = quantity;
    } else if ( currentOrder === 3 ) {
        customOrder3.quantity = quantity;
    }

    // if (customOrder2.ingredients === "") {
    // } else if (customOrder2.ingredients !== "") {
    //     if (customOrder3.ingredients === "") {
    //         customOrder2.quantity = quantity;
    //     } else {
    //         customOrder3.quantity = quantity;
    //     }
    // }
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
        checkCustomQuantities();
        currentOrder = 1;
    } else if (customOrder2.ingredients === "") {
        customOrder2.quantity = quantity;
        customOrder2.ingredients = ingredients;
        checkCustomQuantities();
        currentOrder = 2;

    } else if (customOrder3.ingredients === "") {
        customOrder3.quantity = quantity;
        customOrder3.ingredients = ingredients;
        checkCustomQuantities();
        currentOrder = 3;

    }
}




function newCustomDisplay() {
    document.querySelector(".num-1 p").innerHTML = `Custom order with the following:<br>  - ${customOrder1.ingredients}`;
    document.querySelector(".num-1 input").value = customOrder1.quantity.toString();
    // document.querySelector(".num-1 p").innerHTML = "Add Ingredients";
    document.querySelector(".num-2 ").style.display = "block";
    if (customOrder2.quantity !== 0) {
        document.querySelector('.num-2').style.display = "block";
        document.querySelector(".num-2 p").innerHTML = `Custom order with the following:<br>  - ${customOrder2.ingredients}`;
        document.querySelector(".num-2 input").value = customOrder2.quantity.toString();
        document.querySelector(".num-3 ").style.display = "block";

    }

    if (customOrder3.quantity !== 0) {
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
        document.querySelector(".num-1 input").value = "0";
        customNewOrder();

    } else if (input === 2) {
        customOrder2.quantity = 0;
        customOrder2.ingredients = "";
        document.querySelector(".num-2 p").innerHTML = "Add Ingredients";
        document.querySelector(".num-2 input").value = "0";
        customNewOrder();

    } else if (input === 3) {
        customOrder3.quantity = 0;
        customOrder3.ingredients = "";
        document.querySelector(".num-3 p").innerHTML = "Add Ingredients";
        document.querySelector(".num-3 input").value = "0";
        customNewOrder();

    }

}



function getTotalCustom() {
    let num1Quan = Number(document.querySelector('.num-1 input').value);
    let num2Quan = Number(document.querySelector('.num-2 input').value);
    let num3Quan = Number(document.querySelector('.num-3 input').value);

    let total = num1Quan + num2Quan + num3Quan;

    console.log(total)
    document.querySelector(".wyld-form-mix input[name=custom-num]").value = total;


    if (customOrder1.ingredients !== "" && customOrder2.ingredients !== "" && customOrder3.ingredients !== "") {
        customOrderBtn.style.pointerEvents = "none";
        customOrderBtn.innerHTML = "Max 3 per week<br>Please Check Quantity On Form";
    }

    // getPriceTotal();

}


function order1Input() {
    customOrder1.quantity = Number(document.querySelector('.num-1 input').value);
    Number(document.querySelector('.num-1 input').value) === 3 ? displayBulkDiscount() : hideBulkDiscount();

    customNewOrder();
    getTotalCustom();
    getPriceTotal();

}

function order2Input() {
    customOrder2.quantity = Number(document.querySelector('.num-2 input').value);
    Number(document.querySelector('.num-2 input').value) === 3 ? displayBulkDiscount() : hideBulkDiscount();

    customNewOrder();
    getTotalCustom();
    getPriceTotal();

}

function order3Input() {
    customOrder3.quantity = Number(document.querySelector('.num-3 input').value);
    Number(document.querySelector('.num-3 input').value) === 3 ? displayBulkDiscount() : hideBulkDiscount();

    customNewOrder();
    getTotalCustom();
    getPriceTotal();
}




function checkCustomQuantities() {
    if (customOrder3.quantity === 20) {
        console.log('max');
        customOrderBtn.style.pointerEvents = "none";
        customOrderBtn.innerHTML = "Max 3 per week<br>Please Check Order Form"
    } else {
        customOrderBtn.style.pointerEvents = "auto";
        customOrderBtn.innerHTML = "Start A New Custom Order";
    }
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

