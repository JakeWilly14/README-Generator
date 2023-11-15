// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create a function to write README file
const generateReadMe = ({
  title,
  description,
  installation,
  usage,
  contributors,
  test,
  license,
  github,
  email,
}) =>
  `#${title}

##Description
${description}

##Table of Contents

*[Installation](###Installation)
*[Usage](###Usage)
*[Contributors](###Contributors)
*[Test Instructions](###Test-Instructions)
*[License](###License)
*[Questions](###Questions)
  
###Installation
${installation}

###Usage
${usage}

###Contributors
${contributors}

###Test Instructions
${test}

###License
${license}

###Questions
${github}
${email}`;

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
    type: "input",
    name: "license",
    message: "Choose a license for your project.",
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

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const readMeContent = generateReadMe(answers);
      
      fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md!")
      );
    });
}

// Function call to initialize app
init();
