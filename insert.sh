PSQL="psql -U postgres -t --no-align"

cat arquivos/DESPESAS.cvs | while IFS="," read -r NOME_LOJA PRODUTO QTDE VALOR DATA ENTREGA; do
    echo "$($PSQL -c "$SQL")"
done