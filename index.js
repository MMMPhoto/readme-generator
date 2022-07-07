// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your app?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'Name',
    },
    {
        type: 'input',
        message: "What is URL of your app's github repository?",
        name: 'githubURL',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // generateMarkdown() {
    //     let title = 'Sample Title';
    // }
}

// TODO: Create a function to initialize app
function init() {
    console.log('App Initialized..');
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err));
};


// Function call to initialize app
init();