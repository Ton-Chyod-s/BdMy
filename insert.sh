#! %windir%\system32\cmd.exe

PSQL="psql --username=postgres --dbname=myframecg -t --no-align"

# Do not change code above this line. Use the PSQL variable above to query your database.

# echo "$($PSQL "TRUNCATE TABLE cliente, produto")"

# cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS; 