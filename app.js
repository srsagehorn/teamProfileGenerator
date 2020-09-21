const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = [];

function runAgain() {
  // ask if they want to add more employees
  inquirer
    .prompt({
      type: "confirm",
      name: "again",
      message: "Would you like to add another employee?",
    })
    .then(function (addAnother) {
      // if they do, rerun the ?s
      if (addAnother.again == true) {
        init();
      }
      //   if not, render the employees
      if (addAnother.again == false) {
        // render(employees);
        fs.writeFile(outputPath, render(employees), (err) =>
          err ? console.log(err) : console.log(`Generated ${outputPath}`)
        );
      }
    });
}

function init() {
  // ask questions
  inquirer.prompt(questions.employee).then(function (answers) {
    //   create repective objects depending on role and push then to the employees array
    if (answers.role == "Manager") {
      employees.push(
        new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        )
      );
    }
    if (answers.role == "Intern") {
      employees.push(
        new Intern(answers.name, answers.id, answers.email, answers.school)
      );
    }
    if (answers.role == "Engineer") {
      employees.push(
        new Engineer(answers.name, answers.id, answers.email, answers.github)
      );
    }
    // console.log(employees);
    runAgain();
  });
}

init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
