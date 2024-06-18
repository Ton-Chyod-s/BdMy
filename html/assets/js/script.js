var menuSite = document.getElementById("menuSite");
var corpoSite = document.getElementById("corpoSite");
var cabecalhoSite = document.getElementById("cabecalhoSite");
var buttonMenu = document.getElementById("buttonMenu");
var buttonMenu1 = document.getElementById("buttonMenu1");
var buttonMenu2 = document.getElementById("buttonMenu2");
var buttonMenu3 = document.getElementById("buttonMenu3");

function abrirMenu(td) {
    td.style.marginLeft = "-48px";
    td.style.width = "138px";
    td.style.transition = "0.1s";
    td.style.backgroundcolor = "#D7E5F1";
}

function fecharMenu(td) {
    td.style.width = "41px";
    td.style.marginLeft = "0px";
    td.style.transition = "0.3s";
    td.style.backgroundcolor = "#F6FAFF";
}

menuSite.addEventListener("mouseenter", function() {
    menuSite.style.padding = "58px";
    menuSite.style.transition = "0.2s";
    menuSite.style.marginTop = "-50px";
    abrirMenu(buttonMenu);
    abrirMenu(buttonMenu1);
    abrirMenu(buttonMenu2);
    abrirMenu(buttonMenu3);
    
});


menuSite.addEventListener("scrol", function() {
    menuSite.style.display = "none";
});

menuSite.addEventListener("mouseleave", function() {
    menuSite.style.padding = "8px";
    menuSite.style.transition = "0.2s";
    menuSite.style.marginTop = "0px";
    fecharMenu(buttonMenu);
    fecharMenu(buttonMenu1);
    fecharMenu(buttonMenu2);
    fecharMenu(buttonMenu3);
});
