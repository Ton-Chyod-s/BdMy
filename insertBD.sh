PSQL="psql -U postgres -d myframecg -t --no-align"

cat BD.SQL | while IFS=";" read -r SQL; do
    echo "$($PSQL -c "$SQL")"
done
