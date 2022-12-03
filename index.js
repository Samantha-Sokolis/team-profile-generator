//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const { generateHtml } = require("./lib/employee.js");
let idCounter = 1;
let htmlCards = [];

// <!-- Hint: At index.js, you're going to write to team.html: first part of HTML + htmlCards.join() + last part of HTML -->

//Alternative that requires Classes
//let employees = [new Manager, new Intern, ...]
//employees[i].getRole() === "Manager" // <-- inside a for loop
//depending on what type of role, you have different HTML, for example, a label for "School"

// - THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const addManager = () => {
    return inquirer 
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager’s name?",
            },
              
            {
                  type: "input",
                  name: "email",
                  message: "Enter email address",
              },
            
            {
                type: "input",
                name: "number",
                message: "Enter office number",
            },
        ])
        .then((input) => {
            return input;
        });
  // Need to add additional questions here for Manager, Engineer and Intern
};

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
// Need to add additional questions here for Manager, Engineer and Intern
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
    addManager()
      .then((input) => {
        const manager = new Manager(input.name, idCounter, input.email, input.officeNumber);
        idCounter++; 
        const html = `<div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Manager: ${input.name}</span>
            <span>Office Number: ${input.officeNumber}</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>`;
      htmlCards.push(html); // That array now has the new element

        console.log(input)
        //return generateHtml(input);
        //add new Manager
      })
      //.then((html) => {
       // writeToFile("./team.html", html);
      //})
      //.catch((err) => {
       // console.log(err);
      //});
  }
  
  // Function call to initialize app
  init();
