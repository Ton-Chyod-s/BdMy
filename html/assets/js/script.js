var menuSite = document.getElementById("menuSite");
var corpoSite = document.getElementById("corpoSite");
var cabecalhoSite = document.getElementById("cabecalhoSite");


function mudarCssMenu(td) {
    td.style.padding = "58px";
}

function sumirHeader(td) {
    td.style.display = "none";
}

menuSite.addEventListener("mouseover", function() {
    mudarCssMenu(menuSite);
    
}) ;

menuSite.addEventListener("scrollend", function() {
    mudarCssMenu(menuSite);
    sumirHeader(cabecalhoSite);
}) ;