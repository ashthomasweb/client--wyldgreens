// PLAN SELECTION / FORM CHECK HANDLERS

let oneTimeDelBool = false;
let weeklyDelBool = false;
let bulkDelBool = false;


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
        // getTotalCustom();

        getPriceTotal(8);

    } else if (weeklyDelBool === true) {
        weeklyDelBool = !weeklyDelBool;
        weeklyClose();
        clearPlansForm();
        if (formCheckWeekly.checked === false && formCheckBulk.checked === false && formCheckOnetime.checked === false) {
            formTotalPrice.value = '0';
        }
        // getTotalCustom();

        getPriceTotal(7);
    }
}

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
        // getTotalCustom();

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
        bulkMaxOff();
        // getTotalCustom();
        getPriceTotal(5);
    }
}

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
        // getTotalCustom();

        getPriceTotal(4);
    } else if (oneTimeDelBool === true) { // turns OFF one-time delivery options
        oneTimeDelBool = !oneTimeDelBool;
        oneTimeClose();
        clearPlansForm();
        if (formCheckWeekly.checked === false && formCheckBulk.checked === false && formCheckOnetime.checked === false) {
            formTotalPrice.value = '0';
        }
        // getTotalCustom();

        getPriceTotal(3);
    }
}