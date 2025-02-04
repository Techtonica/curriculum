-- DO NOT EDIT

-- set up
.headers on
.mode column

-- load database
.read employee.sql
.read department.sql

-- run query prompts

-- display header
.print "\n---------------------------------------------\n QUERY 1️⃣: JOIN QUERY ON BOTH TABLES \n---------------------------------------------\n"
-- run query
.read query1.sql
-- display footer

.print "\n---------------------------------------------\n QUERY 2️⃣: EMAILS WITH SALARY >= $70,000 \n---------------------------------------------\n"
-- run query
.read query2.sql
-- display footer

.print "\n---------------------------------------------\n QUERY 3️⃣: INCLUDE DEPARTMENT NAME \n---------------------------------------------\n"
-- run query
.read query3.sql
-- display footer

.print "\n---------------------------------------------\n QUERY 4️⃣: SORT BY DEPARTMENT NAME \n---------------------------------------------\n"
-- run query
.read query4.sql
-- display footer
