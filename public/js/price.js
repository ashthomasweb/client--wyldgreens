let formQuanList = Array.from(document.querySelectorAll('.wyld-form-mix input[type=number]'));
let formCustomQuanList = Array.from(document.querySelectorAll('.order input'));
let formCheckList = Array.from(document.querySelectorAll('.wyld-form-mix input[type=checkbox]'));
let bulkDiscount = document.querySelector('.bulk-discount-pane');
let pricePerP = document.querySelector('.price-per-pane p');
let priceTotal = document.querySelector('[name=total-quan]');

let bulkMaxBool = false;

function bulkMax() {
    bulkMaxBool = true;

    formQuanList.forEach((item, i) => {
        if (i !== formCheckList.length - 1) {
            if (formCheckList[i].checked === true) {
                item.value = '1';
            } else {
                item.value = '';
            }
            item.max = '1';
        }
    });

    formCustomQuanList.forEach((item) => {
        if (Number(item.value) > 0) {
            item.value = '1';
        } else {
            item.value = '';
        }
        item.max = '1';
    });
    getPriceTotal(2);
}

function bulkMaxOff() {

    if (bulkMaxBool === true) {

        formQuanList.forEach((item, i) => {
            if (formCheckList[i].checked === false) {
                item.value = '';
            } else {
                item.value = '1';
            }
            item.max = '3';
        });

        formCustomQuanList.forEach((item) => {
            if (Number(item.value) > 0) {
                item.value = '1';
            } else {
                item.value = '';
            }
            item.max = '3';
        });
    }

    bulkMaxBool = false;
    getPriceTotal(1);
}

function displayBulkDiscount() {
    bulkDiscount.style.opacity = '1';
}

function hideBulkDiscount() {
    let discountBool = false
    let temp = [...formQuanList];
    temp.pop();
    let list = temp.concat(formCustomQuanList);
    list.forEach((item) => {
        if (Number(item.value) === 3) {
            discountBool = true;
        }
    });
    if (bulkDelBool === true) {
        discountBool = true;
    }
    if (discountBool === false) {
        bulkDiscount.style.opacity = '0.2';
    }
}

function changeMixMax() {
    if (bulkDelBool === true) {
        farmersQuanInput.max = '1';
        farmersQuanInput.value = '1';
        healthyQuanInput.max = '1';
        healthyQuanInput.value = '1';
        saladQuanInput.max = '1';
        saladQuanInput.value = '1';
        spicyQuanInput.max = '1';
        spicyQuanInput.value = '1';
        customQuanInput.max = '1';
        customQuanInput.value = '1';

    } else if (bulkDelBool === false) {
        farmersQuanInput.max = '3';
        healthyQuanInput.max = '3';
        saladQuanInput.max = '3';
        spicyQuanInput.max = '3';
        customQuanInput.max = '3';
    }
}

function getPriceTotal(id) {
    function updateDisplay() {
        formTotalPrice.value = price.toString();
    }
    
    function applyDiscount() {
        price = price - getBulkDiscount();
    }

    customRemoveDisplayHandler();

    let planPrice;
    let price;

    function getPlanPrice(input) {
        planPrice = input;
    }

    getTotalCustom();

    formCheckWeekly.checked === true && getPlanPrice(10);
    formCheckOnetime.checked === true && getPlanPrice(12);
    formCheckBulk.checked === true && getPlanPrice(30);

    // let checkList = Array.from(document.querySelectorAll('.wyld-form-mix input[type=number]'));
    let discountList = [...formQuanList];
    discountList.pop();
    let comboList = discountList.concat(formCustomQuanList)

    // console.log(comboList);

    function getBulkDiscount() {
        let quantity = 0;
        let discount;
        comboList.forEach((item) => {
            if (item.value == 3) {
                quantity++;
            }
        });

        if (formCheckWeekly.checked === true) {
            discount = 2;
        } else if (formCheckOnetime.checked === true) {
            discount = 6;
        }

        console.log(quantity * discount);
        return quantity * discount;
    }

    let totalQuantity = 0;

    for (let i = 0; i <= formQuanList.length - 1; i++) {
        totalQuantity += Number(formQuanList[i].value);
    }

    priceTotal.value = totalQuantity;

    if (planPrice === undefined) {
        pricePerP.innerHTML = `Each Box<br>$ 0`;
    } else if (planPrice !== undefined) {
        pricePerP.innerHTML = `Each Box<br>$ ${planPrice}`;
    }
   
    price = totalQuantity * Number(planPrice);

    formFieldCheckTest();
    !isNaN(getBulkDiscount()) && applyDiscount();
    !isNaN(price) && updateDisplay();
    displayBulkDiscount();
    hideBulkDiscount();
}