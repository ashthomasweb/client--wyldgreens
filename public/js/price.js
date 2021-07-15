

let formQuanList = Array.from(document.querySelectorAll('.wyld-form-mix input[type=number]'));
let formCustomQuanList = Array.from(document.querySelectorAll('.order input'));
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

    formCustomQuanList.forEach((item) => {
        if (Number(item.value) > 0) {
            item.value = "1";
        } else {
            item.value = "";
        }
        item.max = "1";
    });
    getTotalCustom();
    getPriceTotal();


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

        formCustomQuanList.forEach((item) => {
            if (Number(item.value) > 0) {
                item.value = "1";
            } else {
                item.value = "";
            }
            item.max = "3";
        });

    }

    bulkMaxBool = false;
    getTotalCustom();

    getPriceTotal();

}

let bulkDiscount = document.querySelector('.bulk-discount-pane');

function discountDisplayHandler() {
    displayBulkDiscount();
    hideBulkDiscount();
}

function displayBulkDiscount() {
    bulkDiscount.style.display = "block";
    // console.log('hi')
}

function hideBulkDiscount() {
    let discountBool = false
    let temp = [...formQuanList];
    temp.pop();
    let list = temp.concat(formCustomQuanList);
    console.log(list)
    list.forEach((item) => {
        if (Number(item.value) === 3) {
            discountBool = true;
        } else if (Number(item.value) < 3) {
            discounBool = false;
        }
    });
    if (discountBool === false) {
        bulkDiscount.style.display = "none";
    }
}





function getPriceTotal() {
    let planPrice;

    function getPlanPrice(input) {
        planPrice = input;
    }

    formCheckWeekly.checked === true && getPlanPrice(10);
    formCheckOnetime.checked === true && getPlanPrice(12);
    formCheckBulk.checked === true && getPlanPrice(30);

    getTotalCustom();

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
