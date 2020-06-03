const ghUser = require('gh-user');

function generateMarkdown(data) {
  let text;
  
  let {title, description, contents, installation, usage, license, contributors, tests, questions, email, github, badge} = data
  if(title)
    text = `# Project Title: ${title} \n
# Project Description: ${description} \n
# Project Contents: ${contents} \n
# Installation Info: ${installation} \n
# Usage: ${usage} \n
# License: ${license} \n
# Contributors: ${contributors} \n
# Tests: ${tests} \n
# Questions: ${questions} \n
# Email Address: ${email} \n
GitHub Profile Image: [GitHub](https://github.com/${github}.png) \n
GitHub Profile Link: [GitHub](https://github.com/${github}) 
    `
    if ( badge.toLowerCase() === 'yes') {
      text +=`# Badges: [![Badge](https://img.shields.io/github/followers/${github}?color=blueviolet&label=Github%20Followers&style=plastic)]()`;
    }
      else {
        text +=`# Badges: None`
    }
    return text;
   
}





// API for github details: https://api.github.com/users/hrempson



module.exports = generateMarkdown;
