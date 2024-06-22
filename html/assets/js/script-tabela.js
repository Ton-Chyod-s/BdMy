function criarTabela() {
    const divTabela = document.querySelector("#tabelas");
    let nomeTabela = document.querySelector("#nomeTabela").value.trim().replace(" ", "_");
    const cabecalho = document.querySelector("#cabecalhoTabela").value.trim();

    if (nomeTabela === "" || cabecalho === "") {
        window.alert("Por favor, preencha todos os campos.");
        return;
    }

    if (hasTable(divTabela, nomeTabela)) {
        const tabela = divTabela.querySelector("#" + nomeTabela);
        if (!headerExists(tabela, cabecalho)) {
            addHeaderCell(tabela, cabecalho);
        }
    } else {
        createNewTable(divTabela, nomeTabela, cabecalho);
    }
}

function hasTable(div, tableId) {
    return div.querySelector(`#${tableId}`) !== null;
}

function headerExists(tabela, cabecalho) {
    const headerCells = tabela.querySelectorAll("thead th");
    for (const th of headerCells) {
        if (th.textContent === cabecalho) {
            window.alert("Nome do cabeçalho já existe");
            return true;
        }
    }
    return false;
}

function addHeaderCell(tabela, cabecalho) {
    const thead = tabela.querySelector("thead tr");
    const th = document.createElement("th");
    th.textContent = cabecalho;
    thead.appendChild(th);
}

function createNewTable(divTabela, nomeTabela, cabecalho) {
    document.addEventListener("DOMContentLoaded", function() {
        // Define the table name
        const nomeTabela = "Example Table Name";

        // Select the <select> element
        const select = document.querySelector("#select");

        // Create a new <option> element
        const option = document.createElement("option");

        // Set the value and text content
        option.value = "exemplo";
        option.textContent = nomeTabela;

        // Append the new option to the select element
        select.appendChild(option);
       
    });

    const headerDiv = document.createElement("header");
    headerDiv.id = `${nomeTabela}-header`;
    divTabela.appendChild(headerDiv);

    const label = document.createElement("label");
    label.textContent = `Tabela: ${nomeTabela}`;
    headerDiv.appendChild(label);

    const buttonDel = document.createElement("input");
    buttonDel.type = "button";
    buttonDel.value = "Deletar";
    buttonDel.onclick = deletarTabela;
    buttonDel.id = `${nomeTabela}-button`;
    headerDiv.appendChild(buttonDel);

    const tabela = document.createElement("table");
    tabela.id = nomeTabela;
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = cabecalho;
    headerRow.appendChild(th);
    thead.appendChild(headerRow);

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    divTabela.appendChild(tabela);
}

/* 
function createNewTable(divTabela, nomeTabela, cabecalho) {
    const headerDiv = document.createElement("header");
    headerDiv.id = `${nomeTabela}-header`;
    divTabela.appendChild(headerDiv);

    const label = document.createElement("label");
    label.textContent = `Tabela: ${nomeTabela}`;
    headerDiv.appendChild(label);

    const buttonDel = document.createElement("input");
    buttonDel.type = "button";
    buttonDel.value = "Deletar";
    buttonDel.onclick = deletarTabela;
    buttonDel.id = `${nomeTabela}-button`;
    headerDiv.appendChild(buttonDel);

    const tabela = document.createElement("table");
    tabela.id = nomeTabela;
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = cabecalho;
    headerRow.appendChild(th);
    thead.appendChild(headerRow);

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    divTabela.appendChild(tabela);
}
*/

function deletarTabela() {
    const divTabela = document.querySelector("#tabelas");
    const nome = this.previousSibling.textContent.split(": ")[1];
    const headerDiv = divTabela.querySelector(`#${nome}-header`);
    const tabela = divTabela.querySelector(`#${nome}`);
    if (headerDiv && tabela) {
        headerDiv.remove();
        tabela.remove();
    } else {
        window.alert("Tabela não existe");
    }
}

function novaPlanilha() {
    const select = document.querySelector("#select");
    select.remove();

    const criarBtn = document.querySelector("#criar");
    const exemploBtn = document.querySelector("#exemplo");
    if (criarBtn) criarBtn.remove();
    if (exemploBtn) exemploBtn.remove();

    const div = document.querySelector("#id-tabela");

    const inputNomeTabela = document.createElement("input");
    inputNomeTabela.id = "nomeTabela";
    inputNomeTabela.placeholder = "Nome da Tabela";

    const inputcabecalhoTabela = document.createElement("input");
    inputcabecalhoTabela.id = "cabecalhoTabela";
    inputcabecalhoTabela.placeholder = "Nome do Cabeçalho";

    const criarButton = document.createElement("input");
    criarButton.value = "Criar Tabela";
    criarButton.type = "button";
    criarButton.id = "criar";
    criarButton.onclick = criarTabela;

    div.appendChild(inputNomeTabela);
    div.appendChild(inputcabecalhoTabela);
    div.appendChild(criarButton);

    const confirmarButton = document.createElement("input");
    confirmarButton.value = "Confirmar";
    confirmarButton.type = "button";
    confirmarButton.id = "confirmar";
    confirmarButton.onclick = confirmarPlanilha;
    div.appendChild(confirmarButton);
    
}

function confirmarPlanilha() {
    const div = document.querySelector("#id-tabela");
    div.querySelector("#nomeTabela").remove();
    div.querySelector("#cabecalhoTabela").remove();
    div.querySelector("#criar").remove();
    div.querySelector("#confirmar").remove();

    const criarButton = document.createElement("input");
    criarButton.type = "button";
    criarButton.value = "Criar";
    criarButton.id = "criar";
    criarButton.onclick = novaPlanilha;

    const exemploButton = document.createElement("input");
    exemploButton.type = "button";
    exemploButton.value = "Exemplo";
    exemploButton.onclick = tabelaExemplo;
    exemploButton.id = "exemplo";
    div.appendChild(criarButton);
    div.appendChild(exemploButton);
}

function tabelaExemplo() {
    const div = document.querySelector("#tabelas");
    const nomeTabela = "exemplo";
    const cabecalho = "id-exemplo";
    const cabecalho2 = "nome-exemplo";

    if (hasTable(div, nomeTabela)) {
        const tabela = div.querySelector("#" + nomeTabela);
        if (!headerExists(tabela, cabecalho)) {
            addHeaderCell(tabela, cabecalho);
            
        }
    } else {
        createNewTable(div, nomeTabela, cabecalho);
    }
}
