echo "Restarting PostgreSQL service..."
# sudo service postgresql restart

PSQL="psql -U postgres -t --no-align"

BANCODEDADOS=$($PSQL -c "select datname from pg_database;")

IFS=$'\n' read -rd '' -a database_array <<< "$BANCODEDADOS"

found=0

for element in "${database_array[@]}"; do
    if [[ "$element" == "myframecg" ]]
    then
        found=1
        break
    fi
done

if [[ $found == 0 ]]
then
    echo "$($PSQL -c "create database myframecg;")"
fi

PSQL="psql -U postgres -d myframecg -t --no-align"
#LISTABANCODADOS="$($PSQL -c "\dt;")"

cat BD.SQL | while IFS=";" read -r SQL; do
    if [[ -z $LISTABANCODADOS ]]
    then
        echo "$($PSQL -c "$SQL")"
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
#         echo "$($PSQL -c "insert into clientes (nome, email, whats_app, localidade) values( '$NOME', null, null, null);")"
#         CLIENTE_ID="$($PSQL -c "select cliente_id from clientes where nome = '$NOME';")"
        
#         echo "$($PSQL -c "insert into vendas (cliente_id, produto, status, data_aquisicao) values( $CLIENTE_ID, '$PRODUTO', '$SITUACAO', '$DATA' );")"
#     fi
# done