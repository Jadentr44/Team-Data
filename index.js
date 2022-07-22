const inquirer = require('inquirer');
const job = require('./jobs')
const path = require('path')
const fs = require('fs')
  
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
      console.log('check your new index.html in the public folder')
      fs.writeFile('./public/index.html', makeHtml(), (err) =>
      err ? console.error(err) : console.log('Check your new read me!')
      );
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
    if(option.next == 'Engineer'){
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

function makeHtml(){
  let cards = ``
  console.log(team)
  team.forEach(e =>{
    let different;
    if(e.constructor.name == 'Manager'){different = `Office:${e.office}`}
    if(e.constructor.name == 'Engineer'){different = `Github:<a href="https://github.com/${e.github}">${e.github}</a>`}
    if(e.constructor.name == 'Intern'){different = `School:${e.school}`}
    let card = `<div class="col-3 card ">
    <div class="card-header bg-info"><h3>${e.name}</h3><h3>${e.constructor.name}</h3></div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${e.id}</li>
        <li class="list-group-item">Email:${e.email}</li>
        <li class="list-group-item">${different}</li>
      </ul>
    </div>
  </div>
    `
    cards += card
  })


return`<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <script src="https://kit.fontawesome.com/b67ea000ee.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">

    <title>Team Data</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid bg-danger">
      <div class="container ">
        <h1 class="display-4 text-center">Team Data</h1>
      </div>
    </div>
    <main class="container">
      <div class="row justify-content-around">
        ${cards}
    </div>
    </main>

    <!-- jquery and bootstrap -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <!-- moment JS -->
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"
    ></script>

  </body>
</html>

`

}
addTeam();


