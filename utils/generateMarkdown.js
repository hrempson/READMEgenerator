const ghUser = require('gh-user');

function generateMarkdown(/* data */) {

  /* REMOVE THIS HACK  */
  data = {
    title: "Heather's Project",
    description: 'This is a very cool project',
    contents: 'Has amazing code',
    installation: 'It is so super easy',
    license: 'MIT',
    contributing: '',
    tests: '',
    questions: '',
    github: 'hrempson'
  }
  /* REMOVE THIS HACK  */

  const NEWLINE = `\n`;
  var userData = null;

  (async () => {
    userData = await ghUser(data.github);
  })();

console.log(data);
  let fileContent = '';
  if(data.title)
    fileContent += generateTitle(data.title) + NEWLINE;
    fileContent += generateDescription(data.description) + NEWLINE;
    fileContent += generateSection("Contents",data.contents) + NEWLINE;
    fileContent += generateSection("Installation",data.installation) + NEWLINE;
    fileContent += renderImage(data.github) + NEWLINE;
    fileContent += githubPortfolio(data.github) + NEWLINE;
  return fileContent;
}

function generateTitle (title) {
  return `# ${title}`;
}

function generateDescription (description) {
  return `${description}`;
}

function generateSection (name, value){
  return `# ${name}\n${value}`;
}

function renderImage (github){
    if(this.userData != null){
      return `![GitHub Image](${userData.avatar_url})`;
    }
}

function githubPortfolio (github){
  return `[GitHub](https://github.com/${github})`;
}


// API for github details: https://api.github.com/users/hrempson
// https://avatars2.githubusercontent.com/u/19823395?v=4


module.exports = generateMarkdown;
