DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

use employee_db;

-- SELECT DATABASE();

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),  
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id), 
  first_name VARCHAR(30), 
  last_name VARCHAR(30),
  role_id INT, 
  manager_id INT
);


-- INSERT INTO departments (id, name)
-- VALUES 
--     ( 001, "English"),
--     ( 002, "Math");




-- FOREIGN KEY (role_id),
--   REFERENCES role(id)
--   manager_id INT,
--   REFERENCES employee(id),

-- DROP DATABASE IF EXISTS employee_db;
-- CREATE DATABASE employee_db;

-- USE employee_db;

-- CREATE TABLE department (
--   id INT NOT NULL,
--   dname VARCHAR(30),
--   PRIMARY KEY (id),
-- );

-- CREATE TABLE role (
--   id INT NOT NULL,
--   title VARCHAR(30),
--   salary DECIMAL,
--   department_id INT,
--   FOREIGN KEY (department_id),
--   REFERENCES department(id),
-- );

-- CREATE TABLE employees (
--   id INT NOT NULL,
--   first_name VARCHAR(30), 
--   last_name VARCHAR(30),
--   role_id INT,
--   FOREIGN KEY (role_id),
--   REFERENCES role(id),
--   manager_id INT
--   REFERENCES employee(id),

-- );



