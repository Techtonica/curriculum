-- DO NOT EDIT 

CREATE TABLE employee(
   ID int PRIMARY KEY,
   Email VARCHAR(255),
   City VARCHAR(20),
   DEPT_ID VARCHAR(255),
   FOREIGN KEY (DEPT_ID) REFERENCES department(DEPT_ID)
);

INSERT INTO employee (ID, Email, City, DEPT_ID)
VALUES
    (1, 'john.doe@example.com', 'New York', 'ENG'),
    (2, 'jane.smith@example.com', 'Los Angeles', 'MKT'),
    (3, 'billy.johnson@example.com', 'Chicago', 'SLS'),
    (4, 'miranda.brown@example.com', 'Houston', 'HR'),
    (5, 'alex.williams@example.com', 'Phoenix', 'FIN'),
    (6, 'sophia.davis@example.com', 'Seattle', 'IT'),
    (7, 'daaimah.tibrey@example.com', 'Fort Worth', 'SLS'),
    (8, 'pepper.anne@example.com', 'San Francisco', 'MKT');
