DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

use employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT REFERENCES department(id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30), 
  last_name VARCHAR(30),
  role_id INT REFERENCES role(id),
  manager_id INT REFERENCES employee(id),

);



/*
FOREIGN KEY (role_id),
  REFERENCES role(id)
  manager_id INT,
  REFERENCES employee(id),

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL,
  dname VARCHAR(30),
  PRIMARY KEY (id),
);

CREATE TABLE role (
  id INT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id),
  REFERENCES department(id),
);

CREATE TABLE employees (
  id INT NOT NULL,
  first_name VARCHAR(30), 
  last_name VARCHAR(30),
  role_id INT,
  FOREIGN KEY (role_id),
  REFERENCES role(id),
  manager_id INT
  REFERENCES employee(id),

);


*/
