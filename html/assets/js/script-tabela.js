
function criarTabela(cabeçalho, conteudo) {
    var divTabela = document.querySelector("#tabelas");
    var nomeTabela = document.querySelector("#nomeTabela").value;
    
    function hasTable(div, tableId) {
        if (div) {
            var table = div.querySelector("#" + tableId);
            return table !== null;
        }
        return false;
    }

    var isExistTable = hasTable(divTabela, nomeTabela);

    if (isExistTable) {
        var td = nomeTabela.querySelector("tr");
        if (td.textContent === cabeçalho) {
            window.alert("Nome do cabeçalho já existe");
        }

      

        return;
    } 

    var tabela = document.createElement("table");
    tabela.setAttribute("id", nomeTabela);
    var thead = document.createElement("thead");
    var tbody=document.createElement("tbody");

    divTabela.appendChild(tabela);
    tabela.appendChild(thead);
    thead.appendChild(tbody);

    var tr = document.createElement("tr");
    tr.setAttribute("id", "id-" + nomeTabela);

    var th = document.createElement("th");

    th.textContent = cabeçalho;

    tbody.appendChild(tr);
    tr.appendChild(th);

    var trBody = document.createElement("tr");
    var td = document.createElement("td");

    td.textContent = conteudo;

    trBody.appendChild(td);
    tbody.appendChild(trBody);

}