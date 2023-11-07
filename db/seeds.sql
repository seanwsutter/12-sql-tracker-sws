INSERT INTO department (id, name)
VALUES 
    ( 001, "Marketing"),
    ( 002, "Advertising"),
    ( 003, "Sales"),
    ( 004, "Legal"),
    ( 005, "Development");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES
    ("Marketing Director", 125000, 1),
    ("Advertising Consultant", 75000, 2),
    ("Sales Consultant", 75000, 3),
    ("Legal Advisor", 150000, 4),
    ("Head of Development", 175000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ( "Johnny", "Smithers", 1, 1 );