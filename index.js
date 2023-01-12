// 1.
const Manager=require('./lib/Manager');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');
const inquirer=require('inquirer');

const path=require('path');
// import fs with require()
const fs=require('fs');
const createTeam = require('./src/page-template');

// 2.
// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html
const html=require('./src/page-template');

// 4.
// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns
const employeeMember = [];
// create an empty employee id array to store the employee ids
const employeeId=[];

// 5.
// print user of usage

// 6.
// make call to create manager function to start the main process
addManager();
// 7.
// create manager function
// - ask the questions for name, id, email, office number for manager using inquirer
// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor
// - push the manager object to the employee member array
// - push the manager id to the employee id array
// - make call to the create team function
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

// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee
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



// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function
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





// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function
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




// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable


function buildHtml () {
    console.log("File Created")

    fs.writeFile('index.html', createTeam(employeeMember), (err) =>
      err ? console.log(err) : console.log('Successfully created')
    );

}

