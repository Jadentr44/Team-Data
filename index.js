const inquirer = require('inquirer');
const job = require('./jobs')
  
  
const manager = new Promise((resolve, reject) => {
  inquirer
  .prompt([
    {message:"What is the project managers name?",name:"name"},
    {message:"What is the project managers ID?",name:"ID"},
    {message:"What is the project managers email?",name:"email"},
    {message:"What is the project managers office number?",name:"office"}
  ])
  .then((e) => {
    let Manager = new job.Manager(e.name,e.ID,e.email,e.office)
     resolve(Manager)
  })
});

const members = new Promise((resolve, reject) => {
  function addMember(){

  }
});



//
Promise.all([manager])
.then((values) => {
  console.log(values);
})