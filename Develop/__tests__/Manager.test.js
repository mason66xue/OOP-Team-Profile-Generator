// Import Engineer class with require()
const Manager = require('../lib/Manager');
const employeeInstance = new Manager('ruochen','1123','ruochen@test.com','101');

//test office
test('officeNumber',()=>{
expect(employeeInstance.officeNumber).toBe(officeNumber);
});

//test method getOfficeNumber 
test('getOfficeNumber',()=>{
    // const getOfficeNumber =101;
    
    expect(employeeInstance.getOfficeNumber()).toBe(101);
});

//test method getRole
test('getRole',()=>{
    const getRole = 'Employee';
    
  expect (employeeInstance.getRole).toBe(getRole);
    
});