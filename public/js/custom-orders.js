// Custom Order Form JavaScript for "Wyldgreens"

// DOM OBJECT ASSIGMENTS 

let customOrder1Pane = document.querySelector('.num-1');
let customOrder1P = document.querySelector('.num-1 textarea');
let customOrder1Input = document.querySelector('.num-1 input');
let customOrder1Img = document.querySelector('.num-1 img');

let customOrder2Pane = document.querySelector('.num-2')
let customOrder2P = document.querySelector('.num-2 textarea')
let customOrder2Input = document.querySelector('.num-2 input')
let customOrder2Img = document.querySelector('.num-2 img')

let customOrder3Pane = document.querySelector('.num-3')
let customOrder3P = document.querySelector('.num-3 textarea')
let customOrder3Input = document.querySelector('.num-3 input')
let customOrder3Img = document.querySelector('.num-3 img')

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
    ingredients: ''
};
let customOrder2 = {
    quantity: 0,
    ingredients: ''
};
let customOrder3 = {
    quantity: 0,
    ingredients: ''
};

let currentOrder;

function customObjectHandling(quantity, ingredients) {
    if (customOrder1.ingredients === '') {
        customOrder1.quantity = quantity;
        customOrder1.ingredients = ingredients;
        currentOrder = 1;
    } else if (customOrder2.ingredients === '') {
        customOrder2.quantity = quantity;
        customOrder2.ingredients = ingredients;
        currentOrder = 2;

    } else if (customOrder3.ingredients === '') {
        customOrder3.quantity = quantity;
        customOrder3.ingredients = ingredients;
        currentOrder = 3;
    }
}

function applyIngredOffset() {
    let order1Length;
    let order2Length;
    let order3Length;

    if ( customOrder1.quantity > 0 ) {
        order1Length = customOrder1.ingredients.join().length;
    } else {
        order1Length = 1;
    }

    if ( customOrder2.quantity > 0 ) {
        order2Length = customOrder2.ingredients.join().length;
    } else {
        order2Length = 1;
    }

    if ( customOrder3.quantity > 0 ) {
        order3Length = customOrder3.ingredients.join().length;
    } else {
        order3Length = 1;
    }

    if (order1Length >= 22 ) {
        customOrder1P.style.top = '-10px';
    } else if ( order1Length <= 21 ) {
        customOrder1P.style.top = '-3px';
    }

    if ( order2Length >= 22 ) {
        customOrder2P.style.top = '-10px';
    } else if ( order2Length <= 21 ) {
        customOrder2P.style.top = '-3px';
    }

    if ( order3Length >= 22 ) {
        customOrder3P.style.top = '-10px';
    } else if ( order3Length <= 21 ) {
        customOrder3P.style.top = '-3px';
    }
}

function newCustomDisplay() {

    customOrder1P.innerHTML = `${customOrder1.ingredients}`;
    customOrder1P.innerHTML = customOrder1P.value.slice(1);
    customOrder1Input.value = customOrder1.quantity.toString();
    customOrder2Pane.style.display = 'block';

    if (customOrder2.ingredients !== '') {
        document.querySelector('.num-2').style.display = 'block';
        customOrder2P.innerHTML = `${customOrder2.ingredients}`;
        customOrder2P.innerHTML = customOrder2P.value.slice(1);
        customOrder2Input.value = customOrder2.quantity.toString();
        customOrder3Pane.style.display = 'block';
    }

    if (customOrder3.ingredients !== '') {
        customOrder3Pane.style.display = 'block';
        customOrder3P.innerHTML = `${customOrder3.ingredients}`;
        customOrder3P.innerHTML = customOrder3P.value.slice(1);
        customOrder3Input.value = customOrder3.quantity.toString();
    }

    applyIngredOffset();
}

function addIngredientForm(event) {
    if ( event.target.innerHTML.includes('Ingredients') ) {
        customNewOrder();
        customOrderOn();
        window.location.href = '#custom-box';
    }
}

function removeCustomOrder(input) {

    if (input === 1) {
        customOrder1.quantity = 0;
        customOrder1.ingredients = '';
        customOrder1P.textContent = 'Add Ingredients';
        customOrder1Input.value = '';
        customNewOrder();

    } else if (input === 2) {
        customOrder2.quantity = 0;
        customOrder2.ingredients = '';
        customOrder2P.textContent = 'Add Ingredients';
        customOrder2Input.value = '';
        customNewOrder();

    } else if (input === 3) {
        customOrder3.quantity = 0;
        customOrder3.ingredients = '';
        customOrder3P.textContent = 'Add Ingredients';
        customOrder3Input.value = '';
        customNewOrder();
    }

    applyIngredOffset();
    getPriceTotal(26);
}

function disableIngred() {
    for (i = 0; i < ingredChecks.length; i++) {
        customIngredList[i].style.pointerEvents = 'none';
    }
}

function enableIngred() {
    for (i = 0; i < ingredChecks.length; i++) {
        customIngredList[i].style.pointerEvents = 'auto';
    }
}

function maxOutCustomHandler() {
    if (customOrder1.ingredients !== '' && customOrder2.ingredients !== '' && customOrder3.ingredients !== '') {
        customOrderBtn.style.pointerEvents = 'none';
        customOrderBtn.innerHTML = 'Max 3 per week<br>Please Check Quantity On Form';
        disableIngred();
    }
}

function getTotalCustom() {
    let num1Quan = Number(customOrder1Input.value);
    let num2Quan = Number(customOrder2Input.value);
    let num3Quan = Number(customOrder3Input.value);

    let total = num1Quan + num2Quan + num3Quan;

    if (total === 0) {
        total = '';
    }

    formCustomQuan.value = total;

    maxOutCustomHandler();

    if (customOrder1.quantity === 0 && customOrder2.quantity === 0 && customOrder3.quantity === 0) {
        customCheck.checked = false;
    }
}

function order1Input() {
    if (Number(customOrder1Input.value) >= 4) {
        customOrder1Input.value = '3';
    }
    customOrder1.quantity = Number(customOrder1Input.value);
    Number(customOrder1Input.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    customCheck.checked = true;
    if (customOrder1Input.value === '0' || customOrder1Input.value === '') {
        customOrder1Input.value = '';
        removeCustomOrder(1);
    }
    customNewOrder();
    getPriceTotal(21);
}

function order2Input() {
    if (Number(customOrder2Input.value) >= 4) {
        customOrder2Input.value = '3';
    }
    customOrder2.quantity = Number(customOrder2Input.value);
    Number(customOrder2Input.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    customCheck.checked = true;
    if (customOrder2Input.value === '0'  || customOrder2Input.value === '') {
        customOrder2Input.value = '';
        removeCustomOrder(2);
    }
    customNewOrder();
    getPriceTotal(20);
}

function order3Input() {
    if (Number(customOrder3Input.value) >= 4) {
        customOrderInput3.value = '3';
    }
    customOrder3.quantity = Number(customOrder3Input.value);
    Number(customOrder3Input.value) === 3 ? displayBulkDiscount() : hideBulkDiscount();
    customCheck.checked = true;
    if (customOrder3Input.value === '0' || customOrder3Input.value === '') {
        customOrder3Input.value = '';
        removeCustomOrder(3);
    }
    customNewOrder();
    getPriceTotal(19);
}

function customRemoveDisplayHandler() {
    if (customOrder1Input.value === '0' || customOrder1Input.value === '' || Number(customOrder1Input.value) === 0) {
        customOrder1Img.style.opacity = '0.3';
    } else {
        customOrder1Img.style.opacity = '1';
    }

    if (customOrder2Input.value === '0' || customOrder2Input.value === '' || Number(customOrder2Input.value) === 0) {
        customOrder2Img.style.opacity = '0.3';
    } else {
        customOrder2Img.style.opacity = '1';
    }

    if (customOrder3Input.value === '0' || customOrder3Input.value === '' || Number(customOrder3Input.value) === 0) {
        customOrder3Img.style.opacity = '0.3';
    } else {
        customOrder3Img.style.opacity = '1';
    }
}

function customQuantityVerify() {
    console.log('test')
    if (bulkMaxBool === true) {
        if (Number(formCustomQuan.value) >= 1) {
            formCustomQuan.value = '1';
        }
    }

    customCheck.checked = true;

    let total = Number(formCustomQuan.value);

    if (total <= 2) {
        customOrderBtn.style.pointerEvents = 'auto';
        customOrderBtn.innerHTML = 'Start A New Custom Order';

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

// END of document
