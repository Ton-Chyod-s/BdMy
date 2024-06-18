var menuSite = document.getElementById("menuSite");
var corpoSite = document.getElementById("corpoSite");
var cabecalhoSite = document.getElementById("cabecalhoSite");
var buttonMenu = document.getElementById("buttonMenu");
var buttonMenu1 = document.getElementById("buttonMenu1");
var buttonMenu2 = document.getElementById("buttonMenu2");

function abrirMenu(td) {
    td.style.marginLeft = "-48px";
    td.style.width = "138px";
}

function fecharMenu(td) {
    td.style.width = "41px";
    td.style.marginLeft = "0px";
}

menuSite.addEventListener("mouseenter", function() {
    menuSite.style.padding = "58px";
    menuSite.style.transition = "0.2s";
    abrirMenu(buttonMenu);
    abrirMenu(buttonMenu1);
    abrirMenu(buttonMenu2);
    
});

menuSite.addEventListener("scrol", function() {
    menuSite.style.display = "none";
    
});

menuSite.addEventListener("mouseleave", function() {
    menuSite.style.padding = "8px";
    menuSite.style.transition = "0.2s";
    fecharMenu(buttonMenu);
    fecharMenu(buttonMenu1);
    fecharMenu(buttonMenu2);
    
});

