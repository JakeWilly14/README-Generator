// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information for your project.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Enter contributors for your project.",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project.",
    choices: [
      'Apache 2.0',
      'GNU GPL v3.0',
      'MIT',
      'BSD 2-Clause',
      'BSD 3-Clause',
      'Boost',
      'The Unilicense',
      'Other'
    ]
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github Username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];

// TODO: Create a function to write README file
function createReadMe(data) {
  fs.writeFile('README.md', data, (err) => {
  err ? console.log(err) : console.log("Successfully created README.md!")
  });
}


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => createReadMe(generateMarkdown(answers)));
}

// Function call to initialize app
init();
