function criarTabela(cabeçalho, conteudo) {
    var divTabela = document.querySelector("#id-tabela");

    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody=document.createElement("tbody");

    divTabela.appendChild(tabela);
    tabela.appendChild(thead);
    thead.appendChild(tbody);

    var tr = document.createElement("tr");
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