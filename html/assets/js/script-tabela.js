
function criarTabela() {  
    var divTabela = document.querySelector("#tabelas");
    var nomeTabela = document.querySelector("#nomeTabela").value;
    var cabecalho = document.querySelector("#cabecalhoTabela").value; // Define the specific header text to check

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

        headerCells.forEach(function(th) {
            if (th.textContent === cabecalho) {
                window.alert("Nome do cabeçalho já existe");
            } else {
                var tbody = tabela.querySelector("tbody");
                var trBody = document.createElement("tr");
                var td = document.createElement("td");

                trBody.textContent = cabecalho;
                td.textContent = "Your cell content";

                trBody.appendChild(td);
                tbody.appendChild(trBody);
            }
        });

        


    
    } else {
        // Create the table if it doesn't exist
        var tabela = document.createElement("table");
        tabela.id = nomeTabela; // Set the ID of the table to nomeTabela
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");

        // Append the table elements to the correct parents
        divTabela.appendChild(tabela);
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        // Create a table row and header
        var tr = document.createElement("tr");
        var th = document.createElement("th");

        // Set content for the header
        th.textContent = cabecalho; // Use the specified header text

        // Append the row and header to the table head
        thead.appendChild(tr);
        tr.appendChild(th);

        // Optionally, create a second row and a table data cell
        var trBody = document.createElement("tr");
        var td = document.createElement("td");
        td.textContent = "Cell Content";
        trBody.appendChild(td);
        tbody.appendChild(trBody);

    }
}

