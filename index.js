const inquirer = require('inquirer');
const job = require('./jobs')
  
let team = []
function addManager(){
  inquirer
  .prompt([
    {message:"What is the project managers name?",name:"name"},
    {message:"What is the project managers ID?",name:"ID"},
    {message:"What is the project managers email?",name:"email"},
    {message:"What is the project managers office number?",name:"office"}
  ])
  .then((e) => {
    let Manager = new job.Manager(e.name,e.ID,e.email,e.office)
     team.push(Manager)
     addMembers()
  })
}

function addMembers(){
  memberList = []
  member()
  function member(){
    inquirer
  .prompt([
    {
      type: 'list',
      name: 'next',
      message: 'Which member would you like to add?',
      choices: ['Engineer', 'Intern','No more members'],
    },
  ])
  .then(e => {
    if(e.next === 'Engineer'){
      team.push("Engineer")
      member()
    }
    if(e.next === 'Intern'){
      team.push("Intern")
      member()
    }
  });
  }
}

addManager();


// function askQuestion(){
//   inquirer
//   .prompt([
//     {message:'testing',name:'test'}
//   ])
//   .then((answers) => {
//     console.log(answers.test)
//     askQuestion()
//   })
  
// }
// askQuestion()