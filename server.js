// packages
const mysql = require("mysql2");
const inquirer = require("inquirer");

// database connection
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Murb',
    database: 'employee_db'
  },
  console.log('connected to db..')
);

// start & view database
function viewDatabase() {
  inquirer.prompt({
    name: "db",
    message: "Employee Database Options",
    type: "list",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Change employee role",
      "EXIT",
    ],
  })
    .then(res => {
      console.log(res.db);
      switch (res.db) {
        case "View all departments": viewDepartments();
          break;
        case "View all roles": viewRoles();
          break;
        case "View all employees": viewEmployees();
          break;
        case "Add a department": addDepartment();
          break;
        case "Add a role": addRole();
          break;
        case "Add an employee": addEmployee();
          break;
        case "Change employee role": changeRole();
          break;
        case "EXIT": exitDatabase();
      }
    })
};

// view departments 
function viewDepartments() {
  db.query("SELECT * FROM department", (err, results) => {
    console.log(err, results)
    viewDatabase();
  })
};

// view roles
function viewRoles() {
  db.query("SELECT * FROM role", (err, results) => {
    console.log(err, results)
    viewDatabase();
  })
};

// view employees
function viewEmployees() {
  db.query("SELECT * FROM employee", (err, results) => {
    console.log(err, results)
    viewDatabase();
  })
};

// add department
function addDepartment() {
  inquirer.prompt(
    {
      message: "Name of new department?",
      name: "department",
      type: "input",
    }
  ).then((res) => {
    db.query("INSERT INTO department (name) VALUES (?)",
      [res.department], (err, results) => {
        console.log(err, results);
        console.log("New department has been added!");
        viewDepartments();
      })
  })
};

// add department
function addRole() {
  inquirer.prompt([
    {
      message: "Title of new role?",
      name: "title",
      type: "input",
    },
    {
      message: "Enter salary of new role, example.) 85000",
      name: "salary",
      type: "number",
    },
    {
      message: "What department is this role for? (must enter department id",
      name: "department_id",
      type: "number",
    }
  ]).then((res) => {
    db.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",
      [res.title, res.salary, res.department_id], (err, results) => {
        console.log(err, results);
        console.log("New role has been added!");
        viewRoles();
      })
  })
};

// add employee
function addEmployee() {
  inquirer.prompt([
    {
      message: "Enter employee's first name",
      name: "first_name",
      type: "input",
    },
    {
      message: "Enter employee's last name",
      name: "last_name",
      type: "input",
    },
    {
      message: "What is the employee's role? (must enter role id)",
      name: "role_id",
      type: "number",
    },
    {
      message: "Enter the employee's manager (must enter manager id)",
      name: "manager_id",
      type: "number",
    }]
  ).then((res) => {
    db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
      [res.first_name, res.last_name, res.role_id, res.manager_id], (err, results) => {
        console.log(err, results);
        console.log("New employee has been added!");
        viewEmployees();
      })
  })
};

// change role
function changeRole() {
  inquirer.prompt([
    {
      message: "Enter current employee's first name",
      name: "first_name",
      type: "input",
    },
    {
      message: "What is the employee's new role? (must enter role id)",
      name: "role_id",
      type: "number",
    }]
  ).then((res) => {
    db.query("UPDATE employee SET role_id=? WHERE first_name=?",
      [res.role_id, res.first_name], (err, results) => {
        console.log(err, results);
        console.log("Changed employee's role!");
        viewEmployees();
      })
  })
};

// exit db
function exitDatabase() {
  db.end();
  process.exit();
};

viewDatabase();



