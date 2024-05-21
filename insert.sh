export PGPASSWORD=postgres
PSQL="psql -U postgres -t --no-align"
# PSQL="--username=postgres --dbname=myframecg -t --no-align -c";
echo "$($PSQL)"

# Do not change code above this line. Use the PSQL variable above to query your database.

# echo "$($PSQL "TRUNCATE TABLE cliente, produto")"

# cat arquivosCSV/DESPESAS.csv | while IFS="," read NOME_LOJA PRODUTO QTDE VALOR DATA ENTREGA; do
    

# done

# cat arquivosCSV/VENDAS.csv | while IFS="," read NOME PRODUTO QTDE VALOR UBER FLASH IMPRESS�O DATA PRAZO SITUA��O STATUS OBS; do


# done
