PSQL="psql -U postgres -t --no-align"

cat BD.SQL | while IFS=";" read -r SQL; do
    echo "$($PSQL -c "$SQL")"
done

# echo "$($PSQL -c 'select * from produto;')"

#echo "$($PSQL "create table if not exists produto();")"

# cat arquivosCSV/DESPESAS.csv | while IFS="," read NOME_LOJA PRODUTO QTDE VALOR DATA ENTREGA; do
    
# done

# cat arquivosCSV/VENDAS.csv | while IFS="," read NOME PRODUTO QTDE VALOR UBER FLASH IMPRESS�O DATA PRAZO SITUA��O STATUS OBS; do

# done