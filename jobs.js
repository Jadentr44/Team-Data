class Member{
  constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
class Manager extends Member{
  constructor(name,id,email,office){
    super(name,id,email)
    this.office = office;
    this.code = 'f7b6'
  }
}
class Engineer extends Member{
  constructor(name,id,email,github){
    super(name,id,email)
    this.github = github;
    this.code = 'f7b6'
  }
}
class Intern extends Member{
  constructor(name,id,email,school){
    super(name,id,email)
    this.school = school;
    this.code = 'f7b6'
  }
}

module.exports ={
  Manager,
  Engineer,
  Intern
}