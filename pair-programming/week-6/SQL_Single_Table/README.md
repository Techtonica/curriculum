### NOTE: It is not necessary to memorise SQL queries, most developers look up these commands, and the more you use them, the more familiar they will become to you.

You have been given a starter table in `employees.sql`. Use the subsequent query files to complete your exercise.

#### Keys & Constraints

- Primary Key: A unique identifier for each record in a table. In our example, `EmployeeID` is the primary key.
- Constraints: Rules applied to data columns in a table. For example, the `NOT NULL` constraint ensures that a column cannot have a `NULL` value.

#### Query1 Prompt: INSERT NEW DATA

- Insert multiple rows into a Employees table using a single INSERT statement

- Retrieve and display all rows from the Employees table, including the new data you've inserted

#### Query2 Prompt: DECENDING AND ASCENDING ORDER

- Arrange the data in the Employees table in ascending order by HireDate, use the ORDER BY clause in your SQL query

- Arrange the data in the Employees table in descending order by HireDate, use the ORDER BY clause in your SQL query. This will sort the results so that the employees with the most recent hire dates appear first.

#### Query3 Prompt: SEARCH FOR SPECIFIC EMAIL

- To display all of the data in the Employees table that has an email address ending with "yahoo" or "gmail", you can use the LIKE operator in your SQL query. This operator allows you to search for a specified pattern in a column.

#### Query4 Prompt: ALPHABETICAL ORDER

Display all of the first names in the Employees table in alphabetical order (A to Z), you can use the ORDER BY clause in your SQL query.

#### Query5 Prompt: SEARCH BY HIRE DATE & FIRST NAME RANGE

- Display employees hired on or after "2024-03-01" and whose first names start with the letters "A" to "D", you can use the SELECT statement with a WHERE clause that includes conditions for both the hire date and the first name.
