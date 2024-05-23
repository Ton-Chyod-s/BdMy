#!/bin/bash

PSQL="psql -U postgres -d myframecg -t --no-align"

echo "$($PSQL -c 'create table if not exists cliente(nome varchar(100) DEFAULT NULL, email varchar(100) DEFAULT NULL, whats_app int DEFAULT NULL, localidade varchar(100) DEFAULT NULL);')"

echo "$($PSQL -c 'create table if not exists produto(nome varchar(100), qtde integer, valor numeric(10,2), data date, entrega date);')"

# echo "$($PSQL -c 'select * from produto;')"

#echo "$($PSQL "create table if not exists produto();")"

# cat arquivosCSV/DESPESAS.csv | while IFS="," read NOME_LOJA PRODUTO QTDE VALOR DATA ENTREGA; do
    
# done

# cat arquivosCSV/VENDAS.csv | while IFS="," read NOME PRODUTO QTDE VALOR UBER FLASH IMPRESS�O DATA PRAZO SITUA��O STATUS OBS; do

# done
