class Manager{
  constructor(name,id,email,office){
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.code = 'f7b6'
  }
}
class Engineer{
  constructor(name,id,email,github){
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.code = 'f7b6'
  }
}
class Intern{
  constructor(name,id,email,School){
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.code = 'f7b6'
  }
}

module.exports ={
  Manager,
  Engineer,
  Intern
}