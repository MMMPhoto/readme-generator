// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your app?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: "What is URL of your app's github repository?",
        name: 'githubURL',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log(`File ${fileName}.md was written to this folder.`)
    );
};

// TODO: Create a function to initialize app
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