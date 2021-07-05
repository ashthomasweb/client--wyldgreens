// Main JavaScript file for "LumberJack"


// MOCK PAGE MENU

// function mockPage(input) {
//     let host = window.location.hostname;
//     console.log(host);
//     console.log(input);
//     if ( host === 'localhost' ) {
//         window.location.href = 'http://' + host + ':3000/' + input
//     } else {
//         window.location.href = window.location.protocol + '//' + host + '/' + input;
//     }
// }



// LIGHTBOX

let lightboxBool = false;
let lightboxPane = document.querySelector('.lightbox');

function lightbox() {
    if (lightboxBool === true) {
        lightboxPane.style.opacity = "0";
        lightboxPane.pointerEvents = 'none';

    } else if (lightboxBool === false) {
        lightboxPane.pointerEvents = 'auto';
        lightboxPane.style.opacity = "1";
    }
    lightboxBool = !lightboxBool;
}

function runLightbox(input) {
    lightboxPane.pointerEvents = 'auto';

    document.querySelector('.lightbox img').attributes.src.value = `/images/greens/${input}`;
    lightbox();
}

function lightboxOff() {
    lightbox();
    console.log('hi');
}



// ADD CHECK TO FORM

function addToOrder(input) {
    document.querySelector(`[name="${input}"]`).checked = true;
}

function clearPlansForm() {
    document.querySelector('[name=weekly]').checked = false;
    document.querySelector('[name=bulk]').checked = false;
    document.querySelector('[name=one_time]').checked = false;
}

// PLAN SELECTION BUTTONS

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
        clearPlansForm();
        addToOrder('weekly');
    } else if (weeklyDelBool === true) {
        weeklyDelBool = !weeklyDelBool;
        weeklyClose();
        clearPlansForm();
    }
}

let bulkDelBool = false;

function bulkDel() {
    if (bulkDelBool === false) {
        bulkDelBool = !bulkDelBool;
        weeklyClose();
        bulkOpen();
        oneTimeClose();
        document.querySelector('.weekly-btn-check').style.display = "none";
        document.querySelector('.one_time-btn-check').style.display = "none";
        document.querySelector('.bulk-btn-check').style.display = "block";
        clearPlansForm();
        addToOrder('bulk');
    } else if (bulkDelBool === true) {
        bulkDelBool = !bulkDelBool;
        clearPlansForm();
        bulkClose();
    }
}

let oneTimeDelBool = false;

function oneTimeDel() {
    if (oneTimeDelBool === false) {
        oneTimeDelBool = !oneTimeDelBool;
        weeklyClose();
        bulkClose();
        oneTimeOpen();
        document.querySelector('.weekly-btn-check').style.display = "none";
        document.querySelector('.one_time-btn-check').style.display = "block";
        document.querySelector('.bulk-btn-check').style.display = "none";
        clearPlansForm();
        addToOrder('one_time');
    } else if (oneTimeDelBool === true) {
        oneTimeDelBool = !oneTimeDelBool;
        oneTimeClose();
        clearPlansForm();
    }
}

// CUSTOM MIX FORM

let orderBtn = document.querySelector(".custom-order-button");
let hiddenBtn = document.querySelector(".custom-order-hidden");
let ingredChecks = document.querySelectorAll('.custom-check');
let orderBox = document.querySelector('.ingred-box');


function customOrderOn() {
    orderBtn.innerText = "Pick up to 4";
    orderBtn.classList.add('custom-order-btn-clicked');
    hiddenBtn.classList.add('custom-order-hidden-clicked');
    orderBox.classList.add('custom-order-shadow');
    hiddenBtn.style.pointerEvents = 'none';

    for (i = 0; i < ingredChecks.length; i++) {
        ingredChecks[i].style.opacity = '1';
        ingredChecks[i].disabled = false;
        ingredChecks[i].style.cursor = "pointer";
    }
}

function customOrderOff() {
    orderBtn.classList.remove('custom-order-btn-clicked');
    hiddenBtn.classList.remove('custom-order-hidden-clicked');
    orderBox.classList.remove('custom-order-shadow');

    orderBtn.innerText = "Start A New Custom Order";
    orderBtn.style.pointerEvents = 'auto';
    document.querySelector('.custom-btn-slider').classList.remove('custom-btn-slider-anim');
    hiddenBtn.innerText = "Create Mix!"

    document.querySelector(".custom-text").innerText = "Thanks for the order! If you want more than one you can change the quantity on the form below. Please let us know if you have any other requests."
    for (i = 0; i < ingredChecks.length; i++) {
        ingredChecks[i].style.opacity = '0.4';
        ingredChecks[i].disabled = true;
        ingredChecks[i].checked = false;
        ingredChecks[i].style.cursor = "default";

    }
}

function ingredCheck() {
    let customChecks = document.querySelectorAll('.custom-check');
    let count = 0;
    for (i = 0; i < customChecks.length; i++) {
        if (customChecks[i].checked == true) {
            count++;
        }
    }

    if (count > 4) {
        orderBtn.style.pointerEvents = 'none';
        orderBtn.innerText = "Too many!";
        hiddenBtn.style.pointerEvents = "none";
        hiddenBtn.style.color = 'grey';
        document.querySelector(".custom-quantity p").innerText = "Too Many Items!";
        document.querySelector(".custom-quantity p").style.left = "0px";
        document.querySelector(".custom-quantity p").style.top = "15px";
        document.querySelector(".custom-quantity input").style.display = "none";

    } else if (count > 0 && count <= 4) {
        orderBtn.innerText = "Pick up to 4";
        orderBtn.style.pointerEvents = 'none';
        hiddenBtn.style.pointerEvents = "auto";
        hiddenBtn.style.color = '#222';
        document.querySelector(".custom-quantity p").innerHTML = "How<br>Many?";
        document.querySelector(".custom-quantity p").style.left = "-8px";
        document.querySelector(".custom-quantity p").style.top = "7px";
        document.querySelector(".custom-quantity input").style.display = "inline-block";

    } else if (count === 0) {
        hiddenBtn.style.pointerEvents = "none";

    }
}

let customQuanBool = false;

function promptQuantity() {

    let customChecks = document.querySelectorAll('.custom-check');
    let prevText = document.querySelector("#message-body").value;
    let itemList = [];

    if (customQuanBool === true) {
        customQuanBool = false;

        for (i = 0; i < document.querySelectorAll('.custom-check').length; i++) {
            customChecks[i].checked === true && itemList.push(customChecks[i].name);
        }

        let boxVar = "box";
        if (Number(document.querySelector(".custom-quantity input").value) > 1) {
            boxVar = "boxes";
        }

        document.querySelector(".wyld-form-mix input[name=custom-num]").value = Number(document.querySelector(".wyld-form-mix input[name=custom-num]").value) + Number(document.querySelector(".custom-quantity input").value);
        document.querySelector("#message-body").value = `I would like ${document.querySelector(".custom-quantity input").value} custom order ${boxVar} with the following:${itemList}.\n\n${prevText}`;

        addToOrder('mix_custom');
        hiddenBtn.style.right = "-1px";

        customOrderOff();
    } else if (customQuanBool === false) {
        customQuanBool = true;
        hiddenBtn.innerText = "Add to Order Form";
        document.querySelector('.custom-btn-slider').classList.add('custom-btn-slider-anim');
        hiddenBtn.style.right = "1px";
    }
}

// MIX SELECTION BUTTONS

let healthyBool = false;

function healthyMix() {
    if (healthyBool === false) {
        healthyBool = !healthyBool;
        document.querySelector("#healthy-order-btn").classList.add('mix-button-clicked');
        document.querySelector("#healthy-quantity").classList.add('mix-quantity-clicked');
        document.querySelector("#healthy-order-btn").innerText = "Add to Order Form";
        document.querySelector("#healthy-pane").classList.add("mix-btn-pane-open");
        setTimeout(() => {
            document.querySelector("#healthy-pane.mix-btn-pane").style.transition = "box-shadow .1s ease-out";
        }, 400);

    } else if (healthyBool === true) {
        healthyBool = !healthyBool;
        document.querySelector("#healthy-order-btn").classList.remove('mix-button-clicked');
        document.querySelector("#healthy-quantity").classList.remove('mix-quantity-clicked');
        document.querySelector("#healthy-pane").classList.remove("mix-btn-pane-open");
        setTimeout(() => {
            document.querySelector("#healthy-pane.mix-btn-pane").style.transition = "box-shadow .25s ease-out .1s";
        }, 200);

        document.querySelector("#healthy-order-btn").innerText = "View Order";
        document.querySelector(".wyld-form-mix input[name=healthy-num]").value = document.querySelector("#healthy-quantity input").value;
        addToOrder('mix_healthy');
    }
}

function healthyInputCheck() {
    let input = Number(document.querySelector("#healthy-quantity input").value);
    let button = document.querySelector("#healthy-order-btn");
    if (input === 0) {
        button.style.pointerEvents = "none";
        button.style.color = "#666";
    } else if (input > 0) {
        button.style.pointerEvents = "auto";
        button.style.color = "#222";
    }
}



let saladBool = false;

function saladMix() {
    if (saladBool === false) {
        saladBool = !saladBool;
        document.querySelector("#salad-order-btn").classList.add('mix-button-clicked');
        document.querySelector("#salad-quantity").classList.add('mix-quantity-clicked');
        document.querySelector("#salad-order-btn").innerText = "Add to Order Form";
        document.querySelector("#salad-pane").classList.add("mix-btn-pane-open");
        setTimeout(() => {
            document.querySelector("#salad-pane.mix-btn-pane").style.transition = "box-shadow .1s ease-out";
        }, 400);
    } else if (saladBool === true) {
        saladBool = !saladBool;
        document.querySelector("#salad-order-btn").classList.remove('mix-button-clicked');
        document.querySelector("#salad-quantity").classList.remove('mix-quantity-clicked');
        document.querySelector("#salad-pane").classList.remove("mix-btn-pane-open");

        setTimeout(() => {
            document.querySelector("#salad-pane.mix-btn-pane").style.transition = "box-shadow .25s ease-out .1s";
        }, 200);
        document.querySelector("#salad-order-btn").innerText = "View Order";
        document.querySelector(".wyld-form-mix input[name=salad-num]").value = document.querySelector("#salad-quantity input").value;
        addToOrder('mix_salad');
    }
}

let spicyBool = false;

function spicyMix() {
    if (spicyBool === false) {
        spicyBool = !spicyBool;
        document.querySelector("#spicy-order-btn").classList.add('mix-button-clicked');
        document.querySelector("#spicy-quantity").classList.add('mix-quantity-clicked');
        document.querySelector("#spicy-order-btn").innerText = "Add to Order Form";
        document.querySelector("#spicy-pane").classList.add("mix-btn-pane-open");
        setTimeout(() => {
            document.querySelector("#spicy-pane.mix-btn-pane").style.transition = "box-shadow .1s ease-out";
        }, 400);
    } else if (spicyBool === true) {
        spicyBool = !spicyBool;
        document.querySelector("#spicy-order-btn").classList.remove('mix-button-clicked');
        document.querySelector("#spicy-quantity").classList.remove('mix-quantity-clicked');
        document.querySelector("#spicy-pane").classList.remove("mix-btn-pane-open");

        setTimeout(() => {
            document.querySelector("#spicy-pane.mix-btn-pane").style.transition = "box-shadow .25s ease-out .1s";
        }, 200);
        document.querySelector("#spicy-order-btn").innerText = "View Order";
        document.querySelector(".wyld-form-mix input[name=spicy-num]").value = document.querySelector("#spicy-quantity input").value;
        addToOrder('mix_spicy');
    }
}


let farmersBool = false;
let farmersUpdateBool = false;

function farmersUpdate() {
    if ( document.querySelector('[name=mix_farmers]').checked === true ) {
        document.querySelector("#farmers-quantity p").style.opacity = "1";
        document.querySelector("#farmers-quantity img").style.display = "none";
        farmersUpdateBool = true;
        document.querySelector("#farmers-order-btn").innerText = "Update Quantity";
        // sendData();
        console.log('yes')

    }
    console.log('no')

}

function sendData() {
    document.querySelector("#farmers-order-btn").innerText = "Added to Order!";
        document.querySelector("#farmers-order-btn").pointerEvents = "none";

        document.querySelector("#farmers-quantity p").style.opacity = "0";
        document.querySelector("#farmers-quantity img").style.display = "block";

        document.querySelector(".wyld-form-mix input[name=farmers-num]").value = document.querySelector("#farmers-quantity input").value;
        addToOrder('mix_farmers');
}

function farmersMix() {

    if (farmersUpdateBool === true) {
        sendData();

    } else if (farmersUpdateBool === false) {



        if (farmersBool === false) { // open slider
            farmersBool = !farmersBool;
            document.querySelector("#farmers-order-btn").classList.add('mix-button-clicked');
            document.querySelector("#farmers-quantity").classList.add('mix-quantity-clicked');
            document.querySelector("#farmers-order-btn").innerText = "Add to Order Form";
            document.querySelector("#farmers-pane").classList.add("mix-btn-pane-open");
            setTimeout(() => {
                document.querySelector("#farmers-pane.mix-btn-pane").style.transition = "box-shadow .1s ease-out";
            }, 400);
        } else if (farmersBool === true) {
            farmersBool = !farmersBool;
            // document.querySelector("#farmers-order-btn").classList.remove('mix-button-clicked');
            // document.querySelector("#farmers-quantity").classList.remove('mix-quantity-clicked');
            // document.querySelector("#farmers-pane").classList.remove("mix-btn-pane-open");
            // setTimeout(() => {
            //     document.querySelector("#farmers-pane.mix-btn-pane").style.transition = "box-shadow .25s ease-out .1s";
            // }, 200);

            sendData();
        }

    }
}





// || Contact form check for field input then change button color 

function formFieldCheck() {
    let name = document.forms["contact"]["user_name"].value;
    let email = document.forms["contact"]["user_email"].value;
    let message = document.forms["contact"]["message"].value;
    let elem = document.getElementById("contact-button");

    if (name == "" || email == "" || message == "") {
        elem.style.backgroundColor = "var(--primary-light)";
        elem.style.pointerEvents = "none";
        elem.style.color = "var(--copy-dark)";

    } else {
        elem.style.backgroundColor = "var(--primary-color)";
        elem.style.pointerEvents = "auto";
        elem.style.color = "var(--highlight)";
    }
}

function sendingText() {
    let elem = document.getElementById("contact-button");
    elem.innerText = "Sending";
}


// || Hamburger Menu for "LumberJack"


function hamburger() {

    let bar1 = document.getElementById("h-bar1");
    let bar2 = document.getElementById("h-bar2");
    let bar3 = document.getElementById("h-bar3");
    let menu = document.getElementById("h-menu");

    function menuOpen() {

        let barsPos = 0;
        let barsRot = 0;
        let bar2Vis = 1;
        let menuPos = 20;

        let animA = setInterval(barMid, 8);

        // middle bar disappear
        function barMid() {
            if (bar2Vis < 0.1) {
                // normally clearInterval would be executed when value reaches 0, but due to bit arithmetic 
                // 0.1 - 0.1 is displayed in extended notation. 
                clearInterval(animA);
                // reset opacity to typical value for consistency.
                bar2Vis = 0;
                bar2.style.opacity = bar2Vis;
            } else {
                bar2Vis = bar2Vis - 0.1;
                bar2.style.opacity = bar2Vis;
            }
        }

        // top and bottom bars move and rotate
        setTimeout(function () {

            let animB = setInterval(barMove, 30);

            function barMove() {
                if (barsPos == 8) {
                    clearInterval(animB);
                } else {
                    barsPos++;
                    bar1.style.top = barsPos + "px";
                    bar3.style.bottom = barsPos + "px";
                }
            }

            setTimeout(function () {

                let animC = setInterval(barRotation, 2);

                function barRotation() {
                    if (barsRot == 45) {
                        clearInterval(animC);
                    } else {
                        barsRot++;
                        bar1.style.transform = "rotate(" + barsRot + "deg)";
                        bar3.style.transform = "rotate(-" + barsRot + "deg)";
                    }
                }
            }, 70);

        }, 50);

        let animD = setInterval(menuAppear, 1);

        function menuAppear() {
            if (menuPos == 65) {
                clearInterval(animD);
            } else {
                menuPos++;
                menu.style.top = menuPos + "px";
            }
        }

    }

    function menuClose() {
        let barsPos = 8;
        let barsRot = 45;
        let bar2Vis = 0;
        let menuPos = 65;

        setTimeout(function () {

            let animA = setInterval(barMid, 8);

            function barMid() {
                if (bar2Vis > 0.9) {
                    clearInterval(animA);
                } else {
                    bar2Vis = bar2Vis + 0.1;
                    bar2.style.opacity = bar2Vis;
                }
            }
        }, 150);

        let animB = setInterval(barMove, 30);

        function barMove() {
            if (barsPos == 0) {
                clearInterval(animB);
            } else {
                barsPos--;
                bar1.style.top = barsPos + "px";
                bar3.style.bottom = barsPos + "px";
            }
        }

        setTimeout(function () {
            let animC = setInterval(barRotation, 2);

            function barRotation() {
                if (barsRot == 0) {
                    clearInterval(animC);
                } else {
                    barsRot--;
                    bar1.style.transform = "rotate(" + barsRot + "deg)";
                    bar3.style.transform = "rotate(-" + barsRot + "deg)";
                }
            }
        }, 30);

        let animD = setInterval(menuAppear, 1);

        function menuAppear() {
            if (menuPos == 20) {
                clearInterval(animD);
            } else {
                menuPos--;
                menu.style.top = menuPos + "px";
            }
        }

    }

    // Boolean check for menu checkbox 

    if (document.getElementById("h-menu-input").checked == true) {
        menuOpen();
        document.getElementById("h-box").style.backgroundColor = "var(--highlight)";
    } else {
        menuClose();
        document.getElementById("h-box").style.backgroundColor = "var(--primary-pale)";
    }

}

document.querySelector("#plan-button").addEventListener('click', () => {
    window.location.href = "#pick-plan";
    window.scrollBy(0, -50);
});

document.querySelector("#mix-button").addEventListener('click', () => {
    window.location.href = "#pick-mix";
    window.scrollBy(0, -50);
});

document.querySelector("#order-button").addEventListener('click', () => {
    window.location.href = "#order-form";
    window.scrollBy(0, -50);
});

// || Blog Main hover event - Needs refactor. Does not work in firefox, produces error if inspector is open.

function mouseHover(event) {
    let path = event.path;
    let parent;
    let btn;

    path.forEach(findName);

    function findName(item) {
        if (item.className == "card card--blog-main") {
            parent = item;
            btn = parent.children[0].children[1].children[0].children[2];
            btn.style.backgroundColor = "var(--secondary-color)";
            btn.style.color = "white";
            parent.addEventListener("mouseout", function () {
                btn.style.backgroundColor = "var(--secondary-pale)";
                btn.style.color = "var(--copy-dark)";
            })
        }

    }

}


// || Footer Social Share Menu 

let shareBool = true;
let menuPos = 0;

function footerShare() {

    let shareMenu = document.getElementById("share-menu");
    let menuButton = document.getElementById("footer-share");

    function shareOpen() {

        let shareAnimA = setInterval(menuOn, 1);

        function menuOn() {
            if (menuPos == -56) {
                clearInterval(shareAnimA);
                shareBool = false;
            } else {
                menuPos--
                shareMenu.style.top = menuPos + "px";
            }
        }
    }

    function shareClose() {

        let shareAnimB = setInterval(menuOff, 1);

        function menuOff() {
            if (menuPos == 0) {
                clearInterval(shareAnimB);
                shareBool = true;
            } else {
                menuPos++;
                shareMenu.style.top = menuPos + "px";
            }
        }
    }

    if (shareBool == true) {
        shareOpen();
        menuButton.style.backgroundColor = "var(--primary-color)";
    } else {
        shareClose();
        menuButton.style.backgroundColor = "var(--secondary-light)";
    }

}


// || Open share menu on load 

function shareIfBlog() {
    let check = document.title;
    if (check == "Blog Post" || check == "Blog") {
        footerShare();
    }
}



// || Blog post url character matching - Not working.

// function postReplace(x) {
//     let objA = "location.href='./posts/"
//     let temp = x.replace(/ /g, "-").replace(/\'/g, "").replace(/\,/g, "").replace(/\!/g, "").replace(/\?/g, "").replace(/\./g, "").replace(/\//g, "").replace(/\"/g, "");
//     let z = objA + temp;
//     console.log(z);
//     return z
// }

/* || END of document  */