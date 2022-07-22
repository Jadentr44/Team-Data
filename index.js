const inquirer = require('inquirer');
const job = require('./jobs')
  
let team = []
function addTeam(){
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
  newMember()
  function newMember(){
    inquirer
  .prompt([
    {
      type: 'list',
      name: 'next',
      message: 'Which member would you like to add?',
      choices: ['Engineer', 'Intern','No more members'],
    },
  ])
  .then(option => {
    if(option.next != 'Engineer' && option.next != 'Intern'){
      console.log(team)
    }else{
      let info;
      option.next == 'Engineer'?(info = {name:'Engineer',question:'github'}):(info = {name:'Intern',question:'school'})


      inquirer
  .prompt([
    {message:`Whats ${info.name}s name?`,name:"name"},
    {message:`Whats ${info.name}s ID?`,name:"ID"},
    {message:`Whats ${info.name}s email?`,name:"email"},
    {message:`Whats ${info.name}s ${info.question}?`,name:"info"}
  ])
  .then((e) => {
    let member;
    if(option.next = 'Engineer'){
      member = new job.Engineer(e.name,e.ID,e.email,e.info)
    }else{
      member = new job.Intern(e.name,e.ID,e.email,e.info)
    }
    team.push(member)
    newMember()
  })
    }
    // if(e.next === 'Engineer'){
    //   team.push("Engineer")
    //   member()
    // }
    // if(e.next === 'Intern'){
    //   team.push("Intern")
    //   member()
    // }
  });
  }
}

addTeam();


