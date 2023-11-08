const mysql = require("mysql2");
const inquirer = require("inquirer");

// const PORT = process.env.PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to database sequelize?
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Murb',
    database: 'employee_db'
  },
  console.log('conmnected to employee_db')
);

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
      "Change employee role"
    ],
  }).then(response => {
    console.log(response.db);
    switch (response.db) {
      case "View all departments": viewDepartments()
        break;
    }
  })
}


function viewDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.log(err, results);
    viewDatabase();
  })
};



viewDatabase();
// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// Query database
// db.query('SELECT * FROM department', function (err, results) {
//   console.log(err);
//   console.log(results);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



/* comments
// get the client
const mysql = require('mysql2');
// create the connection
const con = mysql.createConnection(
  {host:'localhost', user: 'root', database: 'test'}
);
con.promise().query("SELECT 1")
  .then( ([rows,fields]) => {
    console.log(rows);
  })
  .catch(console.log)
  .then( () => con.end());

*/