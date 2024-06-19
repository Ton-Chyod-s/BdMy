var menuSite = document.getElementById("menuSite");
var buttonMenu = document.getElementById("buttonMenu");
var buttonMenu1 = document.getElementById("buttonMenu1");
var buttonMenu2 = document.getElementById("buttonMenu2");
var buttonMenu3 = document.getElementById("buttonMenu3");

function abrirMenu(td) {
    td.style.marginLeft = "-48px";
    td.style.width = "138px";
    td.style.transition = "0.1s";
    
}

function fecharMenu(td) {
    td.style.width = "41px";
    td.style.marginLeft = "0px";
    td.style.transition = "0.3s";
    
}

function corMenuEnter(td) {
    td.addEventListener("mouseenter", function() {
        td.style.backgroundColor = "#D7E5F1";
        td.style.transition = "0.3s";
    });
}

function corMenuLeave(td) {
    td.addEventListener("mouseleave", function() {
        td.style.backgroundColor = "#F6FAFF";
    });
}

function corMenuClick(td) {
    td.addEventListener("click", function() {
        td.style.backgroundColor = "#D7E5F1";
    });
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

menuSite.addEventListener("scroll", function() {
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

corMenuEnter(buttonMenu);
corMenuLeave(buttonMenu);
corMenuEnter(buttonMenu1);
corMenuLeave(buttonMenu1);
corMenuEnter(buttonMenu2);
corMenuLeave(buttonMenu2);
corMenuEnter(buttonMenu3);
corMenuLeave(buttonMenu3);

corMenuClick(buttonMenu);

buttonMenu.addEventListener("mouseenter", function() {
    var newLink = document.createElement("a");
    newLink.innerText = "Home";
    newLink.id = "linkHome";
    newLink.href = "index.html";

    buttonMenu.appendChild(newLink);
});

buttonMenu1.addEventListener("mouseenter", function() {
    var newLink = document.createElement("a");
    newLink.innerText = "Lista de Clientes";
    newLink.id = "linkHome";
    newLink.href = "index.html";

    buttonMenu1.appendChild(newLink);
});

buttonMenu2.addEventListener("mouseenter", function() {
    var newLink = document.createElement("a");
    newLink.innerText = "Myframe";
    newLink.id = "linkHome";
    newLink.href = "index.html";

    buttonMenu2.appendChild(newLink);
});

buttonMenu3.addEventListener("mouseenter", function() {
    var newLink = document.createElement("a");
    newLink.innerText = "Banco de Dados";
    newLink.id = "linkHome";
    newLink.href = "index.html";

    buttonMenu3.appendChild(newLink);
});


menuSite.addEventListener("mouseleave", function() {
    var newLink = document.getElementById("linkHome");
    newLink.remove();
    newLink.removeChild();


    menuSite.appendChild(newLink);
});
