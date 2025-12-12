CREATE TABLE department(
   ID int PRIMARY KEY,
   SALARY int,
   NAME VARCHAR(20),
   DEPT_ID VARCHAR(255)
);

INSERT INTO department (ID, SALARY, NAME, DEPT_ID)
VALUES
    (1, 50000, 'Engineering', 'ENG'),
    (2, 60000, 'Marketing', 'MKT'),
    (3, 70000, 'Sales', 'SLS'),
    (4, 80000, 'HR', 'HR'),
    (5, 90000, 'Finance', 'FIN'),
    (6, 100000, 'IT', 'IT');
    (7, 750000, 'Sales', 'SLS'),  
    (8, 750000, 'Marketing', 'MKT'),  
