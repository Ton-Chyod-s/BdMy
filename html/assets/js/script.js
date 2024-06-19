var menuSite = document.getElementById("menuSite");
var buttonMenu = document.getElementById("buttonMenu");
var buttonMenu1 = document.getElementById("buttonMenu1");
var buttonMenu2 = document.getElementById("buttonMenu2");
var buttonMenu3 = document.getElementById("buttonMenu3");

function abrirMenu(td) {
    td.style.marginLeft = "-48px";
    td.style.width = "138px";
    td.style.transition = "0.1s";
    td.style.backgroundColor = "#D7E5F1";
}

function fecharMenu(td) {
    td.style.width = "41px";
    td.style.marginLeft = "0px";
    td.style.transition = "0.3s";
    td.style.backgroundColor = "#F6FAFF";
}

function imagemMenu(td) {
    document.getElementById("imageoption").src = "assets/images/icon/home.png";
}

menuSite.addEventListener("mouseenter", function() {
    menuSite.style.padding = "58px";
    menuSite.style.transition = "0.2s";
    menuSite.style.marginTop = "-50px";
    
    abrirMenu(buttonMenu);
    buttonMenu.innerText = "Home";
    
    abrirMenu(buttonMenu1);
    buttonMenu1.innerText = "Lista de Clientes";
    
    abrirMenu(buttonMenu2);
    buttonMenu2.innerText = "Myframe";
    
    abrirMenu(buttonMenu3);
    buttonMenu3.innerText = "Banco de dados";
});

menuSite.addEventListener("scroll", function() {
    menuSite.style.display = "none";
});

menuSite.addEventListener("mouseleave", function() {
    menuSite.style.padding = "8px";
    menuSite.style.transition = "0.2s";
    menuSite.style.marginTop = "0px";
    
    
    fecharMenu(buttonMenu);

    buttonMenu.innerText = "";
    buttonMenu
    var img = buttonMenu.querySelector("img");

    if (img) {
        buttonMenu.createElement("img").src = "assets/images/icon/home.png";
    }
    
    fecharMenu(buttonMenu1);
    buttonMenu1.innerText = "";
    
    fecharMenu(buttonMenu2);
    buttonMenu2.innerText = "";
    
    fecharMenu(buttonMenu3);
    buttonMenu3.innerText = "";
});
