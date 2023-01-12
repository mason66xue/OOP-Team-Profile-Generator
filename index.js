// require all neccesities 
const Manager=require('./lib/Manager');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');
const inquirer=require('inquirer');
const path=require('path');
const fs=require('fs');
const createTeam = require('./src/page-template');


// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html
const html=require('./src/page-template');


// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns
const employeeMember = [];
// create an empty employee id array to store the employee ids
const employeeId=[];

// make call to create manager function to start the main process
addManager();

// create manager function
function addManager(){

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the manager name?',
      },
    {
        type: 'input',
        name: 'id',
        message: 'What is the manager id?',
      },
    {
      type: 'input',
      name: 'office',
      message: 'What is the office number?',
    },
    

])


.then(answer=>{
    const manager = new Manager(answer.name, answer.id, answer.office)
    employeeMember.push(manager);
    employeeId.push(manager);
    team();

})
}


// create team function
function team(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'teamList',
            message: 'What type of employee do you want to add to your profile?',
            choices:[
                'Engineer',
                'Intern',
                'I am all done',
            ]
        }]).then(answer=>{
          console.log(answer);
          if (answer.teamList === 'Engineer'){
            addEngineer();
          }else if (answer.teamList === 'Intern'){
            addIntern();
          }else {
            buildHtml();
          }
    })
  }




// add engineer function
function addEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer name?',
          },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id?',
          },
        {
          type: 'input',
          name: 'email',
          message: 'What is the email?',
        },
        
        {
          type: 'input',
          name: 'github',
          message: 'What is the github?',
        },

    ]).then(answer=>{
        const engineer = new Engineer(answer.name, answer.id, answer.office)
        employeeMember.push(engineer);
        employeeId.push(engineer);
        team();
    
    })

}

// add intern function
function addIntern(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern name?',
          },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id?',
          },
        {
          type: 'input',
          name: 'email',
          message: 'What is the email?',
        },
        
        {
          type: 'input',
          name: 'school',
          message: 'What is the school?',
        },
    ]).then(answer=>{
        const intern = new Intern(answer.name, answer.id, answer.office)
        employeeMember.push(intern);
        employeeId.push(intern);
        team();
    
    })

}





// build team function
function buildHtml () {
    console.log("File Created")

    fs.writeFile('index.html', createTeam(employeeMember), (err) =>
      err ? console.log(err) : console.log('Successfully created')
    );

}

