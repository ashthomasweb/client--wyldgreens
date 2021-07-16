// DOM OBJECT ASSIGNMENTS

let weeklyPane = document.querySelector('#weekly-pane');
let weeklyOrderBtn = document.querySelector('#weekly-order-btn');
let weeklyAdded = document.querySelector('#weekly-added');
let weeklyCheck = document.querySelector('.weekly-btn-check');

let oneTimePane = document.querySelector('#one_time-pane');
let oneTimeOrderBtn = document.querySelector('#one_time-order-btn');
let oneTimeAdded = document.querySelector('#one_time-added');
let oneTimeCheck = document.querySelector('.one_time-btn-check');

let bulkPane = document.querySelector('#bulk-pane');
let bulkOrderBtn = document.querySelector('#bulk-order-btn');
let bulkAdded = document.querySelector('#bulk-added');
let bulkCheck = document.querySelector('.bulk-btn-check');

let oneTimeDelBool = false;
let weeklyDelBool = false;
let bulkDelBool = false;


// PLAN SELECTION STYLES

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

// PLAN SELECTION HANDLERS

function weeklyDel() {
    if (weeklyDelBool === false) {
        weeklyDelBool = !weeklyDelBool;
        weeklyOpen();
        oneTimeClose();
        bulkClose();
        weeklyCheck.style.display = 'block';
        oneTimeCheck.style.display = 'none';
        bulkCheck.style.display = 'none';
        hideBulkDiscount();
        bulkMaxOff();
        clearPlansForm();
        addToOrder('weekly');
        getPriceTotal(8);
    } else if (weeklyDelBool === true) {
        weeklyDelBool = !weeklyDelBool;
        weeklyClose();
        clearPlansForm();
        if (formCheckWeekly.checked === false && formCheckBulk.checked === false && formCheckOnetime.checked === false) {
            formTotalPrice.value = '0';
        }
        getPriceTotal(7);
    }
}

function bulkDel() {
    if (bulkDelBool === false) { // turns ON bulk delivery options
        bulkDelBool = !bulkDelBool;
        weeklyClose();
        bulkOpen();
        oneTimeClose();
        weeklyCheck.style.display = 'none';
        oneTimeCheck.style.display = 'none';
        bulkCheck.style.display = 'block';
        clearPlansForm();
        addToOrder('bulk');
        displayBulkDiscount();
        bulkMax();
        changeMixMax();
        bulkQuantityAdjust();
        getPriceTotal(6);
    } else if (bulkDelBool === true) { // turns OFF bulk delivery options
        bulkDelBool = !bulkDelBool;
        clearPlansForm();
        bulkClose();
        if (formCheckWeekly.checked === false && formCheckBulk.checked === false && formCheckOnetime.checked === false) {
            formTotalPrice.value = '0';
        }
        hideBulkDiscount();
        changeMixMax();
        bulkMaxOff();
        getPriceTotal(5);
    }
}

function oneTimeDel() {
    if (oneTimeDelBool === false) { // turns ON one-time delivery options
        oneTimeDelBool = !oneTimeDelBool;
        weeklyClose();
        bulkClose();
        oneTimeOpen();
        weeklyCheck.style.display = 'none';
        oneTimeCheck.style.display = 'block';
        bulkCheck.style.display = 'none';
        hideBulkDiscount();
        bulkMaxOff();
        clearPlansForm();
        addToOrder('one_time');
        getPriceTotal(4);
    } else if (oneTimeDelBool === true) { // turns OFF one-time delivery options
        oneTimeDelBool = !oneTimeDelBool;
        oneTimeClose();
        clearPlansForm();
        if (formCheckWeekly.checked === false && formCheckBulk.checked === false && formCheckOnetime.checked === false) {
            formTotalPrice.value = '0';
        }
        getPriceTotal(3);
    }
}

