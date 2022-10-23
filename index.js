//Include packages needed for this application
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const { generateHtml } = require("./lib/employee.js");


const addEmployee = () => {
    return inquirer 
        .prompt([
            {
                type: "checkbox",
                name: "addEmployee",
                message: "Choose the employee role",
                choices: ["manager", "intern", "engineer"],
            },
        ])
        .then((input) => {
            return input;
        });
};

//Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log("Your HTML file has been generated");
    });
  }
  
  // Function to initialize app
  function init() {
    addEmployee()
      .then((input) => {
        return generateHtml(input);
      })
      .then((html) => {
        writeToFile("./index.html", html);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  // Function call to initialize app
  init();
