//Packages/Modules needed for the application to run
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your app?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your app.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage instructions.',
        name: 'usage',
    },
     {
        type: 'list',
        message: 'Please choose a license.',
        choices: ['creative commons', 'MIT', 'Apache'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please provide a list of features.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidlines.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please describe what testing you have done.',
        name: 'tests',
    },
    {
        type: 'input',
        message: "Please enter your email address.",
        name: 'email',
    },
    {
        type: 'input',
        message: "Please enter your github profile name.",
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./output/README.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log(`Your README.md file was written to the output folder.`)
    );
};

// TODO: Function to initialize app
function init() {
    console.log('App Initialized..');
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile(data.title, data);
    })
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();