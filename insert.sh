PSQL="psql -U postgres -t --no-align"

cat arquivosCSV/DESPESAS.csv | while IFS="," read -r NOME_LOJA PRODUTO QTDE VALOR DATA ENTREGA; do
    echo "$($PSQL -c "insert into produtos (nome, quantidade, valor, data_aquisicao, descricao) values('$NOME_LOJA', $QTDE, $VALOR, '$DATA', '$PRODUTO $ENTREGA' );")"
done

cat arquivosCSV/VENDAS.csv | while IFS="," read -r NOME PRODUTO QTDE VALOR UBER FLASH IMPRESSAO DATA PRAZO SITUASAO STATUS OBS ; do
    echo "$($PSQL -c "insert into produtos (nome, quantidade, valor, data_aquisicao, descricao) values('$NOME_LOJA', $QTDE, $VALOR, '$DATA', '$PRODUTO $ENTREGA' );")"
done