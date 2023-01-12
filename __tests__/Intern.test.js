// Import Engineer class with require()
const Intern = require('../lib/Intern');

//test school 
test('school',()=>{
const theSchool = 'rutgers';
const employeeInstance = new Intern('ruochen',112,'ruochen@test.com',theSchool);
expect(employeeInstance.school).toBe(theSchool);


});

//test method getSchool 
test('getSchool',()=>{
    const theSchool ='rutgers';
    const employeeInstance= new Intern('ruochen',112, 'ruochen@test.com',theSchool);
    expect(employeeInstance.getSchool()).toBe(theSchool);
});

//test method getRole
test('getRole',()=>{
    const testRole ='Intern';
    const employeeInstance = new Intern ('ruochen', 110, 'ruochen@test.com');
  expect (employeeInstance.getRole()).toBe(testRole);
    
});