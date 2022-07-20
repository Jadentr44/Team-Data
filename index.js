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
  memberList = []
  addMember()
  function addMember(){
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
    console.info('You chose :', e.next);
  });
  }
});



//
Promise.all([manager,members])
.then((values) => {
  console.log(values);
})