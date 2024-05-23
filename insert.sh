PSQL="psql -U postgres -t --no-align"

cat arquivosCSV/DESPESAS.csv | while IFS="," read -r NOME_LOJA PRODUTO QUANTIDADE VALOR DATA ENTREGA; do
    echo "$($PSQL -c "insert into produtos (nome, quantidade, valor, data_aquisicao, descricao) values('$NOME_LOJA', $QUANTIDADE, $VALOR, '$DATA', '$PRODUTO $ENTREGA' );")"
done

cat arquivosCSV/VENDAS.csv | while IFS="," read -r NOME PRODUTO QUANTIDADE VALOR UBER FLASH IMPRESSAO DATA PRAZO SITUASAO STATUS OBS ; do
    echo "$($PSQL -c "insert into clientes (nome, email, whats_app, localidade) values('$NOME', null, null, null);")"
    CLIENTE_ID= echo "$($PSQL -c "select cliente_id from clientes where nome = '$NOME';")"
    
    echo "$($PSQL -c "insert into vendas (cliente_id, produto, status, data) values($CLIENTE_ID, $PRODUTO, $SITUASAO, '$DATA'")"
    
done