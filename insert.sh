PSQL="psql -U postgres -t --no-align"

echo "$($PSQL -c 'drop table if exists produto, cliente;')"

CLIENTE="cliente(cliente_id SERIAL PRIMARY KEY, nome varchar(100) DEFAULT NULL, email varchar(100) DEFAULT NULL, whats_app int DEFAULT NULL, localidade varchar(100) DEFAULT NULL);"

PRODUTO="produto(produto_id SERIAL PRIMARY KEY, nome varchar(100), qtde integer, valor numeric(10,2), data date, entrega date);"

VENDA=

DESPESAS_VENDA=

echo "$($PSQL -c "create table if not exists $CLIENTE")"
echo "$($PSQL -c "create table if not exists $PRODUTO")"


# echo "$($PSQL -c 'select * from produto;')"

#echo "$($PSQL "create table if not exists produto();")"

# cat arquivosCSV/DESPESAS.csv | while IFS="," read NOME_LOJA PRODUTO QTDE VALOR DATA ENTREGA; do
    
# done

# cat arquivosCSV/VENDAS.csv | while IFS="," read NOME PRODUTO QTDE VALOR UBER FLASH IMPRESS�O DATA PRAZO SITUA��O STATUS OBS; do

# done