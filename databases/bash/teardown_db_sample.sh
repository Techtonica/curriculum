#!/bin/bash

username='postgres'
database_name='test_database'
table_name='account'


read -p "Are you sure you want to drop table $table_name? Reply y or n " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
   echo Dropping table $table_name...
    psql -U $username -d $database_name -c "DROP TABLE $table_name"
fi


read -p "Are you sure you want to drop database $database_name? Reply y or n " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
   echo Dropping database $database_name...
    psql -U $username -c "DROP DATABASE $database_name"
fi



