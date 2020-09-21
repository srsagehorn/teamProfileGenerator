const questions = {
  employee: [
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "list",
      name: "role",
      message: "Select your role.",
      choices: ["Engineer", "Intern", "Manager"],
    },
    {
      // run only when user has selected engineer
      type: "input",
      name: "github",
      message: "What is your github?",
      when: (answers) => answers.role === "Engineer",
    },
    {
      // run only when user has selected intern
      type: "input",
      name: "school",
      message: "What is your school?",
      when: (answers) => answers.role === "Intern",
    },
    {
      // run only when user has selected manager
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
      when: (answers) => answers.role === "Manager",
    },
  ],
};

module.exports = questions;
