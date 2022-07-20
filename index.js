const inquirer = require('inquirer');


inquirer
  .prompt([
    {message:"What is the project managers name?",name:"managerName"}
  ])
  .then((answers) => {
    console.log(answers.managerName)
  })