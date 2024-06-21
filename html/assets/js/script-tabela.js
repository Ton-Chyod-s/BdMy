
function criarTabela() {  
    var divTabela = document.querySelector("#tabelas");
    var nomeTabela = document.querySelector("#nomeTabela").value;
    var cabecalho = document.querySelector("#cabecalhoTabela").value; 

    nomeTabela = nomeTabela.replace(" ", "_");
    
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
        var div = document.createElement("header");
        div.id = `${nomeTabela}-header`;
        divTabela.appendChild(div);

        var label = document.createElement("label");
        label.textContent = `tabela:${nomeTabela}`;
        div.appendChild(label);

        var buttonDel = document.createElement("input");
        buttonDel.type = "button";
        buttonDel.value = "Deletar";
        buttonDel.onclick = deletarTabela;
        buttonDel.id = `${nomeTabela}-button`;
        div.appendChild(buttonDel);
        
        var tabela = document.createElement("table");
        tabela.id = nomeTabela;
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");

        divTabela.appendChild(tabela);
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        var tr = document.createElement("tr");
        var select = document.createElement("select");
        select.id = "select";
        select.name = "select";
        select.options[0] = new Option("id", "id");
        select.options[1] = new Option("text", "text");
        


        var th = document.createElement("th");
        th.id = cabecalho;
        
        if (cabecalho === "" || cabecalho.includes("id")) {
            th.textContent = `id-${nomeTabela}`; 
        } else {
            th.textContent = cabecalho; 
        }
    
        thead.appendChild(tr);
        tr.appendChild(select);
        tr.appendChild(th);

        return;
    }
}

function deletarTabela() {

    var divTabela = document.querySelector("#tabelas");
    var nome = this.previousSibling.textContent.split(":")[1];

    var div = divTabela.querySelector(`#${nome}-header`);
    var table = divTabela.querySelector(`#${nome}`);
    var button = divTabela.querySelector(`#${nome}-button`);

    if (div) {
        div.remove();
        table.remove();
        button.remove();
    } else {
        window.alert("Tabela não existe");
    }
}

function novaPlanilha() {
    var criar = document.querySelector("#criar");
    criar.remove();

    var div = document.querySelector("#id-tabela");

    var inputNomeTabela = document.createElement("input");
    inputNomeTabela.id = "nomeTabela";
    inputNomeTabela.placeholder = "Nome da Tabela";

    var inputcabecalhoTabela = document.createElement("input");
    inputcabecalhoTabela.id = "cabecalhoTabela";
    inputcabecalhoTabela.placeholder = "Nome do Cabeçalho";

    var button = document.createElement("input");
    button.value = "Criar Tabela";
    button.type = "button";
    button.id = "criar";
    button.onclick = criarTabela;

    div.appendChild(inputNomeTabela);
    div.appendChild(inputcabecalhoTabela);
    div.appendChild(button);
    
    var confimar = document.createElement("input");
    confimar.value = "Confirmar";
    confimar.type = "button";
    confimar.id = "confirmar";
    confimar.onclick = confirmarPlanilha;
    div.appendChild(confimar);
    
}

function confirmarPlanilha() {
    var div = document.querySelector("#id-tabela");
    var inputNomeTabela = document.querySelector("#nomeTabela");
    var inputcabecalhoTabela = document.querySelector("#cabecalhoTabela");
    var button = document.querySelector("#criar");
    var confimar = document.querySelector("#confirmar");

    inputNomeTabela.remove();
    inputcabecalhoTabela.remove();
    button.remove();
    confimar.remove();

    var button = document.createElement("input");
    button.type = "button";
    button.value = "Criar";
    button.id = "criar";
    button.onclick = novaPlanilha;

    div.appendChild(button);

}