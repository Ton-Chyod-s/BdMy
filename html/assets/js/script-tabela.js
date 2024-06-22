function criarTabela() {
    const divTabela = document.querySelector("#tabelas");
    let nomeTabela = document.querySelector("#nomeTabela").value;
    const cabecalho = document.querySelector("#cabecalhoTabela").value;

    nomeTabela = nomeTabela.replace(" ", "_");

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
    const thead = tabela.querySelector("thead");
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.id = cabecalho;
    th.textContent = cabecalho;
    tr.appendChild(th);
    thead.appendChild(tr);
}

function createNewTable(divTabela, nomeTabela, cabecalho) {
    const div = document.createElement("header");
    div.id = `${nomeTabela}-header`;
    divTabela.appendChild(div);

    const label = document.createElement("label");
    label.textContent = `tabela:${nomeTabela}`;
    div.appendChild(label);

    const buttonDel = document.createElement("input");
    buttonDel.type = "button";
    buttonDel.value = "Deletar";
    buttonDel.onclick = deletarTabela;
    buttonDel.id = `${nomeTabela}-button`;
    div.appendChild(buttonDel);

    const tabela = document.createElement("table");
    tabela.id = nomeTabela;
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    divTabela.appendChild(tabela);
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.id = cabecalho;
    th.textContent = cabecalho ? cabecalho : `id-${nomeTabela}`;
    tr.appendChild(th);
    thead.appendChild(tr);
}

function deletarTabela() {
    const divTabela = document.querySelector("#tabelas");
    const nome = this.previousSibling.textContent.split(":")[1];
    const div = divTabela.querySelector(`#${nome}-header`);
    const table = divTabela.querySelector(`#${nome}`);
    const button = divTabela.querySelector(`#${nome}-button`);

    if (div && table && button) {
        div.remove();
        table.remove();
        button.remove();
    } else {
        window.alert("Tabela não existe");
    }
}

function novaPlanilha() {
    const criar = document.querySelector("#criar");
    criar.remove();

    const div = document.querySelector("#id-tabela");

    const inputNomeTabela = document.createElement("input");
    inputNomeTabela.id = "nomeTabela";
    inputNomeTabela.placeholder = "Nome da Tabela";

    const inputcabecalhoTabela = document.createElement("input");
    inputcabecalhoTabela.id = "cabecalhoTabela";
    inputcabecalhoTabela.placeholder = "Nome do Cabeçalho";

    const button = document.createElement("input");
    button.value = "Criar Tabela";
    button.type = "button";
    button.id = "criar";
    button.onclick = criarTabela;

    div.appendChild(inputNomeTabela);
    div.appendChild(inputcabecalhoTabela);
    div.appendChild(button);

    const confirmar = document.createElement("input");
    confirmar.value = "Confirmar";
    confirmar.type = "button";
    confirmar.id = "confirmar";
    confirmar.onclick = confirmarPlanilha;
    div.appendChild(confirmar);
}

function confirmarPlanilha() {
    const div = document.querySelector("#id-tabela");
    document.querySelector("#nomeTabela").remove();
    document.querySelector("#cabecalhoTabela").remove();
    document.querySelector("#criar").remove();
    document.querySelector("#confirmar").remove();

    const button = document.createElement("input");
    button.type = "button";
    button.value = "Criar";
    button.id = "criar";
    button.onclick = novaPlanilha;

    div.appendChild(button);
}
