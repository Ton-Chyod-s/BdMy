
function criarTabela() {  
    var divTabela = document.querySelector("#tabelas");
    var nomeTabela = document.querySelector("#nomeTabela").value;
    var cabecalho = document.querySelector("#cabecalhoTabela").value; 

    function hasTable(div, tableId) {
        if (div && tableId !== "") {
            var table = div.querySelector(`#${tableId}`);
            return table !== null;
        }
        return false;
    }

    var isExistTable = hasTable(divTabela, nomeTabela);

    if ( isExistTable ) {
        var tabela = divTabela.querySelector("#" + nomeTabela);
        var headerCells = tabela.querySelectorAll("thead th");
        
        var headerExists = false; 

        headerCells.forEach(function(th) {
            if (th.textContent === cabecalho) {
                window.alert("Nome do cabeçalho já existe");
                headerExists = true;
                return; 
            }
        });

        if (!headerExists) {
            var thead = tabela.querySelector("thead");
            var tr = document.createElement("tr");
            var th = document.createElement("th");
            th.id = cabecalho;
            th.textContent = cabecalho;

            tr.appendChild(th);
            thead.appendChild(tr);
        }

        return;
    } else {
        var tabela = document.createElement("table");
        tabela.id = nomeTabela;
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");

        divTabela.appendChild(tabela);
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.id = cabecalho;

        th.textContent = cabecalho; 

        thead.appendChild(tr);
        tr.appendChild(th);

        return;
    }
}
