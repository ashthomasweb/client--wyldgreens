


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



// || Blog post url character matching - Not working.

// function postReplace(x) {
//     let objA = "location.href='./posts/"
//     let temp = x.replace(/ /g, "-").replace(/\'/g, "").replace(/\,/g, "").replace(/\!/g, "").replace(/\?/g, "").replace(/\./g, "").replace(/\//g, "").replace(/\"/g, "");
//     let z = objA + temp;
//     console.log(z);
//     return z
// }

/* || END of document  */