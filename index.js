const inquirer = require('inquirer');

function runScript(){
  const members = []
inquirer
  .prompt([
    {message:"What is the project managers name?",name:"managerName"},
    {message:"What is the project managers ID?",name:"ID"},
    {message:"What is the project managers email?",name:"email"},
    {message:"What is the project managers office number?",name:"office"}
  ])
  .then((answers) => {
    console.log(answers.managerName)
  })
}

runScript()