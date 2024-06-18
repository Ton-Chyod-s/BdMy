var menuSite = document.getElementById("menuSite");
var corpoSite = document.getElementById("corpoSite");
var cabecalhoSite = document.getElementById("cabecalhoSite");

menuSite.addEventListener("mouseenter", function() {
    menuSite.style.padding = "58px";
    menuSite.style.transition = "0.2s";
});

menuSite.addEventListener("scrol", function() {
    menuSite.style.display = "none";
    
});

menuSite.addEventListener("mouseleave", function() {
    menuSite.style.padding = "8px";
    menuSite.style.transition = "0.2s";
});