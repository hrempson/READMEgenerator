const ghUser = require('gh-user');

function generateMarkdown(data ) {

  /* Testing HACK  */
  // data = {
  //   title: "Heather's Project",
  //   description: 'This is a very cool project',
  //   contents: 'Has amazing code',
  //   installation: 'It is so super easy',
  //   license: 'MIT',
  //   contributing: '',
  //   tests: '',
  //   questions: '',
  //   github: 'hrempson'
  // }
  /* Testing HACK  */

  const NEWLINE = `\n`;
  var userData = null;

console.log(data);
  let fileContent = '';
  if(data.title)
    fileContent += generateTitle(data.title) + NEWLINE;
    fileContent += generateDescription(data.description) + NEWLINE;
    fileContent += generateContents("contents",data.contents) + NEWLINE;
    fileContent += generateInstallation("installation",data.installation) + NEWLINE;
    fileContent += generateUsage(data.usage) + NEWLINE;
    fileContent += generateLicense(data.license) + NEWLINE;
    fileContent += generateContributors(data.contributors) + NEWLINE;
    fileContent += generateTests(data.tests) + NEWLINE;
    fileContent += generateQuestions(data.questions) + NEWLINE;
    fileContent += generateEmail(data.email) + NEWLINE;
    fileContent += renderImage(data.github) + NEWLINE;
    fileContent += githubPortfolio(data.github) + NEWLINE;
    fileContent += generateBadge(data.badge, data.github) + NEWLINE;
  return fileContent;
}

function generateTitle (title) {
  return `# Project Title: ${title}`;
}

function generateDescription (description) {
  return `# Project Description: ${description}`;
}

function generateContents (contents) {
  return `# Project Contents: ${contents}`;
}

function renderImage (github) {
  return `GitHub Profile Image: [GitHub](https://github.com/${github}.png)`;
}

function githubPortfolio (github) {
  return `GitHub Profile Link: [GitHub](https://github.com/${github})`;
}

function generateInstallation (installation) {
  return `# Installation Info: ${installation}`;
}

function generateUsage (usage) {
  return `# Usage: ${usage}`;
}

function generateLicense (license) {
  return `# License: ${license}`;
  // return `![NPM](https://img.shields.io/npm/l/${license}?color=hotpink&style=plastic)`;
  // return `# License: ![NPM](https://img.shields.io/endpoint?url='${license}'&style=plastic)`;
  
}

function generateContributors (contributors) {
  return `# Contributors: ${contributors}`;
}

function generateTests (tests) {
  return `# Tests: ${tests}`;
}

function generateQuestions (questions) {
  return `# Questions: ${questions}`;
}

function generateEmail (email) {
  return `# Email Address: ${email}`;
}

function generateBadge (badge, github) {
  if ( badge === "Yes" || "yes") {
  return `# Badges: [Badge](https://img.shields.io/github/followers/${github}?color=blueviolet&label=Github%20Followers&style=plastic)`
  }
  else {
    return `# Badges: None`
}};
// function generateSection (name, value) {
//   return `# ${name}\n${value}`;
// }



// API for github details: https://api.github.com/users/hrempson



module.exports = generateMarkdown;
