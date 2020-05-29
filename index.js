const inquirer = require("inquirer");
const createMarkdown = require ("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
    type: "input",
    message: "What is the project title? ",
    name: "Title"
    },
    {
        type: "input",
        message: "Provide a project description: ",
        name: "Description"
    },
    {
        type: "input",
        message: "Provide a table of contents: ",
        name: "Iontents"
    },
    {
        type: "input",
        message: "Installation: ",
        name: "Installation"
    },
    {
        type: "input",
        message: "License: ",
        name: "License"
    },
    {
        type: "input",
        message: "Contributing: ",
        name: "Contributing"
    },
    {
        type: "input",
        message: "Tests: ",
        name: "Tests"
    },
    {
        type: "input",
        message: "Questions: ",
        name: "Questions"
    },
    
];

function writeToFile(fileName, data) {
    fs.writeFile( fileName, createMarkdown (data), function (err){
        if (err) console.log (error);
        else console.log("Success!");

    });
}

function init() {
    inquirer
    .prompt(questions)
    .then( (response) => {
        console.log();
        writeToFile('README.md', response);
    });
}

init();
