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
        message: "License: ",
        name: "license"
    },
    {
        type: "input",
        message: "Contributing: ",
        name: "contributing"
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
    }
    
];

function writeToFile(fileName, data) {
    fs.writeFile( fileName, createMarkdown(data), function (err){
        if (err) console.log (error);
        else {
            // console.log(path.)
            console.log("Success!");
        }

    });
}

function init() {
    // inquirer
    // .prompt(questions)
    // .then( (response) => {
    //     //console.log(response);
    //     writeToFile('README.md', response);
    // });

    /* Remove this hack */
    fs.writeFile( "README.md", createMarkdown(), function (err){
        if (err) console.log (error);
        else {
            // console.log(path.)
            console.log("Success!");
        }
    });
}

init();
