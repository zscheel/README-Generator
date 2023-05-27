// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        message: "What is the title of your project?",
        name: 'title',
    },
    {
        type: "input",
        message: "What is the description?",
        name: 'description',
    },
    {
        type: "input",
        message: "What is your project used for?",
        name: 'usage',
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: 'installation',
    },
    {
        type: "input",
        message: "Write any tests you created",
        name: "tests",
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT License', 'Apache Liscense 2.0', 'Boost Software Liscense 1.0']
    },
    {
        type: "input",
        message: "Who contributed to your project?",
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Give the link to your github profile.',
        name: 'github',
    },
    {
        type: 'type',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
    fs.writeFile(fileName, generateMarkdown(data))
    .then(err => {
        if (err) {
            console.log(err);
        }
        return false;
    });}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions).then(data => 
        {
            writeToFile('README.md', data)
        });
}

// Function call to initialize app
init();
