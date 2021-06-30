// Main JavaScript file for "LumberJack"


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

let orderBtn = document.querySelector(".custom-order-button");

function addToOrder(input) {
    console.log(input);
    document.querySelector(`[name="${input}"]`).checked = true;
    if (input === 'mix_custom') {
        let orderBtn = document.querySelector(".custom-order-button");

        orderBtn.innerText = "Pick Up To 4";

        customOrder();
    }
}

function customOrder() {
    let customChecks = document.querySelectorAll('.custom-check');

    let hiddenBtn = document.querySelector(".custom-order-hidden");

    // hiddenBtn.style.display = "inline-block";
    // hiddenBtn.style.borderTop = "none";
    // hiddenBtn.style.bottom = "-1px";
    // orderBtn.style.width = "160px";
    // orderBtn.style.left = "0";
    // orderBtn.style.backgroundColor = "whitesmoke";

    orderBtn.classList.add('custom-order-btn-clicked');
    hiddenBtn.classList.add('custom-order-hidden-clicked');


    for (i = 0; i < document.querySelectorAll('.custom-check').length; i++) {
        document.querySelectorAll('.custom-check')[i].style.opacity = '1';
        document.querySelectorAll('.custom-check')[i].disabled = false;
    }

}

// hiddenBtn.addEventListener('click', sendCheck);

function sendCheck() {
    sendToForm();
    hiddenBtn.style.pointerEvents = 'none';
}

function checkCheck() {
    let customChecks = document.querySelectorAll('.custom-check');

    let count = 0;
    for (i = 0; i < customChecks.length; i++) {
        if (customChecks[i].checked == true) {
            count++;
        }
        
    }
    console.log(count);

    

    if (count > 4 ) {
        orderBtn.style.pointerEvents = 'none';
        orderBtn.innerText = "Too many!";
    } else if (count > 0 && count <= 4 ) {
        orderBtn.innerText = "Pick up to 4";
        orderBtn.style.pointerEvents = 'none';
            
    } else if (count === 0 ) {
        orderBtn.innerText = "Ready?";

    }
}

function sendToForm() {
    console.log('hi');
    let prevText = document.querySelector("#message-body").value;
    document.querySelector("#message-body").value = `${prevText} Hi, I would like a custom order with the following:`;
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

document.querySelector("#mix-button").addEventListener('click', () => {
    window.location.href = "#pick-mix";
});

document.querySelector("#plan-button").addEventListener('click', () => {
    window.location.href = "#pick-plan";
});

document.querySelector("#order-button").addEventListener('click', () => {
    window.location.href = "#order-form";
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