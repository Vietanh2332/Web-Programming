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
function Tab1() {
    var tab_1 = document.getElementById("tab-1");
    var tab_2 = document.getElementById("tab-2");
    var tab_3 = document.getElementById("tab-3");
    tab_1.classList.add('tab-products');
    tab_2.classList.remove('tab-products');
    tab_3.classList.remove('tab-products');
    var tabd_1 = document.getElementById("tabd-1");
    var tabd_2 = document.getElementById("tabd-2");
    var tabd_3 = document.getElementById("tabd-3");
    tabd_2.classList.remove("display-block");
    tabd_3.classList.remove("display-block");
    tabd_1.classList.add("display-block");
    tabd_2.classList.add("display-none");
    tabd_3.classList.add("display-none");
}
function Tab2() {
    var tab_1 = document.getElementById("tab-1");
    var tab_2 = document.getElementById("tab-2");
    var tab_3 = document.getElementById("tab-3");
    tab_2.classList.add('tab-products');
    tab_1.classList.remove('tab-products');
    tab_3.classList.remove('tab-products');
    var tabd_1 = document.getElementById("tabd-1");
    var tabd_2 = document.getElementById("tabd-2");
    var tabd_3 = document.getElementById("tabd-3");
    tabd_1.classList.remove("display-block");
    tabd_3.classList.remove("display-block");
    tabd_2.classList.add("display-block");
    tabd_1.classList.add("display-none");
    tabd_3.classList.add("display-none");
}
function Tab3() {
    var tab_1 = document.getElementById("tab-1");
    var tab_2 = document.getElementById("tab-2");
    var tab_3 = document.getElementById("tab-3");
    tab_3.classList.add('tab-products');
    tab_2.classList.remove('tab-products');
    tab_1.classList.remove('tab-products');
    var tabd_1 = document.getElementById("tabd-1");
    var tabd_2 = document.getElementById("tabd-2");
    var tabd_3 = document.getElementById("tabd-3");
    tabd_2.classList.remove("display-block");
    tabd_1.classList.remove("display-block");
    tabd_3.classList.add("display-block");
    tabd_2.classList.add("display-none");
    tabd_1.classList.add("display-none");
}