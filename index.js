const inquirer = require("inquirer");
const createMarkdown = require ("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

const questions = [
    {
    type: "input",
    message: "What is the project title? ",
    name: "title"
    },
    {
        type: "input",
        message: "Provide a project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Provide a table of contents: ",
        name: "contents"
    },
    {
        type: "input",
        message: "Installation: ",
        name: "installation"
    },
    {
        type: "input",
        message: "What is this app used for?",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter your license number: ",
        name: "license"
    },
    {
        type: "input",
        message: "Contributors: ",
        name: "contributors"
    },
    {
        type: "input",
        message: "Tests: ",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions: ",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email? ",
        name: "email"
    },
    {
        type: "input",
        message: "Would you like to include GitHub follower badge? (Yes/No): ",
        name: "badge"
    }
    
];

function writeToFile(fileName, data) {
    fs.writeFile( fileName, createMarkdown(data), function (err){
        if (err) console.log (error);
        else {
            console.log("Success!");
        }

    });
}
function init() {
    inquirer
    .prompt(questions)
    .then( (response) => {
        writeToFile('README.md', response);
    });
}

init();
