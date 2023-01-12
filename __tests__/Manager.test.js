// Import Engineer class with require()
const Manager = require('../lib/Manager');
const employeeInstance = new Manager('ruochen','1123','ruochen@test.com','101');

//test office
test('officeNumber',()=>{
  const office = 121;
  const employeeInstance = new Manager('test', 132,'test@gmail.com', office);
expect(employeeInstance.officeNumber).toBe(office);
});


//test method getRole
test('getRole',()=>{
    const getRole = 'Manager';
    const employeeInstance =new Manager()
    
  expect (employeeInstance.getRole()).toBe(getRole);
    
});