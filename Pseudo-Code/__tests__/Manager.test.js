// Import Engineer class with require()
const Employee = require('../lib/Employee');
const Engineer=require('../lib/Manager');

//test office
test('officeNumber',()=>{
const theOffice = 1;
const employeeInstance = new Employee('ruochen',112,'ruochen@test.com',theOffice);
expect(typeof(employeeInstance.officeNumber)).toBe(theOffice);


});

//test method getOfficeNumber 
test('getOfficeNumber',()=>{
    const theOffice =1;
    const employeeInstance= new Employee('ruochen',112, 'ruochen@test.com',theOffice);
    expect (typeof(employeeInstance.getOfficeNumber)).toBe(theOffice);
});

//test method getRole
test('getRole',()=>{
    const testRole =Employee;
    const employeeInstance = new Employee ('ruochen', 110, 'ruochen@test.com');
  expect (typeof(employeeInstance.getRole).toBe(testRole));
    
});