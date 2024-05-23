PSQL="psql -U postgres -t --no-align"

cat BD.SQL | while IFS=";" read -r SQL; do
    echo "$($PSQL -c "$SQL")"
done
