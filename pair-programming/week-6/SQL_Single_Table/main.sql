-- DO NOT EDIT

-- set up
.headers on
.mode column

-- load database
.read employees.sql

-- run query prompts

-- display header
.print "\n---------------------------------------------\n QUERY 1️⃣: INSERT NEW DATA \n---------------------------------------------\n"
-- run query
.read query1.sql
-- display footer

.print "\n---------------------------------------------\n QUERY 2️⃣: DECENDING AND ASCENDING ORDER \n---------------------------------------------\n"
-- run query
.read query2.sql
-- display footer

.print "\n---------------------------------------------\n QUERY 3️⃣: SEARCH FOR SPECIFIC EMAIL \n---------------------------------------------\n"
-- run query
.read query3.sql
-- display footer

.print "\n---------------------------------------------\n QUERY 4️⃣: ALPHABETICAL ORDER \n---------------------------------------------\n"
-- run query
.read query4.sql
-- display footer

.print "\n---------------------------------------------\n QUERY 5️⃣: SEARCH BY HIRE DATE & FIRST NAME RANGE \n---------------------------------------------\n"
-- run query
.read query5.sql
-- display footer
