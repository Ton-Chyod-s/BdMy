PSQL="psql -U postgres -t --no-align"

BANCODEDADOS="$($PSQL -c "select datname from pg_database;")"


while IFS=" " read -r BANCO; do
    if [[ $BANCO != 'postgres' ]]
    then
        echo $BANCO
    fi
done 

# cat arquivosCSV/DESPESAS.csv | while IFS="," read -r NOME_LOJA PRODUTO QUANTIDADE VALOR DATA ENTREGA; do
#     if [[ $QUANTIDADE != 'QUANTIDADE' ]]
#     then
#         echo "$($PSQL -c "insert into produtos (nome, quantidade, valor, data_aquisicao, descricao) values('$NOME_LOJA', $QUANTIDADE, $VALOR, '$DATA', '$PRODUTO $ENTREGA' );")"
#     fi
# done

# cat arquivosCSV/VENDAS.csv | while IFS="," read -r NOME PRODUTO QUANTIDADE VALOR UBER FLASH IMPRESSAO DATA PRAZO SITUACAO STATUS OBS ; do
#     if [[ $QUANTIDADE != 'QUANTIDADE' ]]
#     then
#         echo "$($PSQL -c "insert into clientes (nome, email, whats_app, localidade) values('$NOME', null, null, null);")"
#         CLIENTE_ID="$($PSQL -c "select cliente_id from clientes where nome = '$NOME';")"
        
#         echo "$($PSQL -c "insert into vendas (cliente_id, produto, status, data_aquisicao) values($CLIENTE_ID, '$PRODUTO', '$SITUACAO', '$DATA' );")"
    
#     fi
# done
