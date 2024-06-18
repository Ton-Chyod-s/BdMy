var menuSite = document.getElementById("menuSite");
var corpoSite = document.getElementById("corpoSite");
var cabecalhoSite = document.getElementById("cabecalhoSite");

function mudarCssMenu(td) {
    td.style.padding = "58px";
};

function sumirHeader(td) {
    td.style.display = "none";
};

function mouseLeave(td) {
    td.style.padding = "8px";
};

menuSite.addEventListener("mouseenter", function() {
    mudarCssMenu(menuSite);
});

menuSite.addEventListener("scrol", function() {
    mudarCssMenu(menuSite);
    sumirHeader(cabecalhoSite);
});

menuSite.addEventListener("mouseleave", function() {
    mouseLeave(menuSite);
});