const diacritics = require('diacritics');

function criarTabela() {
    const divTabela = document.querySelector("#tabelas");
    let nomeTabela = document.querySelector("#nomeTabela").value.trim().replace(/\s+/g, "_");

    const cabecalho = document.querySelector("#cabecalhoTabela").value.trim();

    if (nomeTabela === "") {
        window.alert("Por favor, preencha todos o nome da tabela.");
        return;
    }

    if (hasTable(divTabela, nomeTabela)) {
        const tabela = divTabela.querySelector("#" + nomeTabela);
        if (!headerExists(tabela, cabecalho)) {
            addHeaderCell(tabela, cabecalho);
            return;
        } 
    } else {
        if (!cabecalho.includes('id')) {
            const newCabecalho = 'id-' + nomeTabela.replace(/s\b/g, "");
            createNewTable(divTabela, nomeTabela, newCabecalho);

            const tabela = divTabela.querySelector("#" + nomeTabela);
            if (!headerExists(tabela, cabecalho)) {
                addHeaderCell(tabela, cabecalho);
                
            } 

        } else {
            createNewTable(divTabela, nomeTabela, cabecalho);
        }

        // Adicionar o nome da nova tabela ao select
        const tabelaSelect = document.getElementById('select');
        const option = document.createElement("option");
        option.value = nomeTabela;
        option.text = nomeTabela;
        tabelaSelect.appendChild(option);
    }
    const nome = document.querySelector("#nomeTabela");
    if (nome) nome.remove();

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
    if (cabecalho.includes(' ')) {
        cabecalho = cabecalho.replace(/\s+/g, "-");
    }

    th.textContent = cabecalho;
    thead.appendChild(th);
}

function createNewTable(divTabela, nomeTabela, cabecalho) {
    const headerDiv = document.createElement("header");
    headerDiv.id = `${nomeTabela}-header`;
    divTabela.appendChild(headerDiv);

    const label = document.createElement("label");
    label.textContent = `Tabela: ${nomeTabela}`;
    headerDiv.appendChild(label);

    const buttonDel = document.createElement("input");
    buttonDel.type = "button";
    buttonDel.value = "Deletar Planilha";
    buttonDel.onclick = deletarTabela;
    buttonDel.id = `${nomeTabela}-button`;
    buttonDel.className = "delete";
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

function deletarTabela() {
    const divTabela = document.querySelector("#tabelas");
    const nome = this.previousSibling.textContent.split(": ")[1];
    const headerDiv = divTabela.querySelector(`#${nome}-header`);
    const tabela = divTabela.querySelector(`#${nome}`);
    if (headerDiv && tabela) {
        headerDiv.remove();
        tabela.remove();

        // Remover o nome da tabela do select
        const tabelaSelect = document.getElementById('select');
        for (const option of tabelaSelect.options) {
            if (option.value === nome) {
                option.remove();
                break;
            }
        }
    } else {
        window.alert("Tabela não existe");
    }
}

function novaPlanilha() {
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
    criarButton.value = "Adicionar Cabeçalho";
    criarButton.type = "button";
    criarButton.id = "criar";
    criarButton.onclick = criarTabela;

    div.appendChild(inputNomeTabela);
    div.appendChild(inputcabecalhoTabela);
    div.appendChild(criarButton);

    const adicionarTabela = document.createElement("input");
    adicionarTabela.value = "Adicionar Tabela";
    adicionarTabela.type = "button";
    adicionarTabela.id = "adicionar";
    adicionarTabela.onclick = nomeTabela;
    div.appendChild(adicionarTabela);

    const confirmarButton = document.createElement("input");
    confirmarButton.value = "Confirmar";
    confirmarButton.type = "button";
    confirmarButton.id = "confirmar";
    confirmarButton.onclick = confirmarPlanilha;
    div.appendChild(confirmarButton);
}

function nomeTabela() {
    const div = document.querySelector("#id-tabela");
    const adicionarCabecalho = document.querySelector("#criar");
    const confirmar = document.querySelector("#confirmar");
    const adicionar = document.querySelector("#adicionar");
    const nomeTabela = document.querySelector("#nomeTabela");
    const cabecalho = document.querySelector("#cabecalhoTabela");
    const select = document.querySelector("#select");

    // if (nomeTabela) nomeTabela.remove();
    // if (select) select.remove();
    
    const inputNomeTabela = document.createElement("input");
    inputNomeTabela.id = "nomeTabela";
    inputNomeTabela.placeholder = "Nome da Tabela";

    div.appendChild(inputNomeTabela);

}

function confirmarPlanilha() {
    const div = document.querySelector("#id-tabela");
    div.querySelector("#nomeTabela").remove();
    div.querySelector("#cabecalhoTabela").remove();
    div.querySelector("#criar").remove();
    div.querySelector("#confirmar").remove();
    div.querySelector("#adicionar").remove();

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
    const nomeTabela = "tabelaExemplo";
    const headers = [
        "id-exemplo",
        "nome",
        "idade",
        "sexo",
        "cidade",
        "estado",
        "pais",
    ];

    if (hasTable(div, nomeTabela)) {
        const tabela = div.querySelector("#" + nomeTabela);
        headers.forEach(header => {
            if (!headerExists(tabela, header)) {
                addHeaderCell(tabela, header);
            }
        });
    } else {
        createNewTable(div, nomeTabela, headers[0]); 
        headers.slice(1).forEach(header => { 
            addHeaderCell(div.querySelector(`#${nomeTabela}`), header);
        });

        
        const tabelaSelect = document.getElementById('select');
        const option = document.createElement("option");
        option.value = nomeTabela;
        option.text = nomeTabela;
        tabelaSelect.appendChild(option);
    }
}

function atualizarLinha() {
    window.alert("Sem planilha no banco de dados");
}

function deletarLinha() {
    window.alert("Sem planilha no banco de dados");
}

