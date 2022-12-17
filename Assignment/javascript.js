function openTab() {
    var mainmenu = document.getElementById("one");
    mainmenu.style.display = "block";
    var mfp_container = document.getElementById("tow");
    mfp_container.style.display = "block";
}
function openTab2() {
    var mainmenu = document.getElementById("one");
    mainmenu.style.display = "block";
    var shopping_cart = document.getElementById("three");
    shopping_cart.style.display = "block";
    shopping_cart.style.backgroundColor = "#ffffffd3";
}
function closeTab() {
    var mainmenu = document.getElementById("one");
    var mfp_container = document.getElementById("tow");
    var shopping_cart = document.getElementById("three");
    shopping_cart.style.display = "none";
    mainmenu.style.display = "none";
    mfp_container.style.display = "none";
}
function dot1() {
    var transl = document.getElementById("transl");
    transl.style.translate = "0%";
    transl.style.transition = "translate 1s";
    var dotn = document.getElementsByClassName("abcxyz");
    dotn[1].classList.remove('is-selected');
    dotn[0].classList.add('is-selected');
}
function dot2() {
    var transl = document.getElementById("transl");
    transl.style.translate = "-100%";
    transl.style.transition = "translate 1s";
    var dotn = document.getElementsByClassName("abcxyz");
    dotn[0].classList.remove('is-selected');
    dotn[1].classList.add('is-selected');
}
function nextImg() {
    var transl = document.getElementById("transl");
    if (transl.style.translate == "0%") {
        transl.style.translate = "-100%";
        transl.style.transition = "translate 1s";
        var dotn = document.getElementsByClassName("abcxyz");
        dotn[0].classList.remove('is-selected');
        dotn[1].classList.add('is-selected');
    }
}
function preImg() {
    var transl = document.getElementById("transl");
    if (transl.style.translate == "-100%") {
        transl.style.translate = "0%";
        transl.style.transition = "translate 1s";
        var dotn = document.getElementsByClassName("abcxyz");
        dotn[1].classList.remove('is-selected');
        dotn[0].classList.add('is-selected');
    }
}
function loadHeight() {
    var wid = document.getElementsByClassName("flickity-slider");
    var widN = wid[0].clientWidth;
    wid[0].style.height = widN * 0.35 + 'px';
}