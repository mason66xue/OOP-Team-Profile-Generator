// Import Employee class with require()
const Employee = require('../lib/Employee');
const employee=require('../__tests__/Employee')
// Test instantiate Employee instance
test("", () => {
  const employeeInstance= new Employee();
  expect(typeof(employeeInstance)).toBe('object');
  // Instantiate the Employee class with new operator to create an object and assign it to an new variable
  // Expect the type of the variable to be the "object" data type


});

// Test setting name of an employee
test("name", () => {
  const name =ruochen; 
  const employeeInstance = new Employee(name);
  expect(typeof(employeeInstance.name)).toBe(name);

  // Assign the name of an employee to a new variable
  // Instantiate the Employee class, passing the variable of the employee name as an augument, to create an object and assign it to an new variable
  // Expect the value of the name property of the object to be equal to the value of the variable of the employee name
});

// Test setting id of an employee
test("id", () => {
  const id = 110;
  const employeeInstance = new Employee(id);
  expect(typeof(employeeInstance.id).toBe(id));
  // Assign a number as an id to a new variable for the employeee id
  // Instantiate the Employee class with an employee name of your choice and the id variable as input arguments to create an employee object and assign it to a new variable
  // Expect the id of the employe object to be equal to the value of the id variable
});

// Test setting email of an employee
test("email", () => {
  const email= 'ruochen@test.com';
  const employeeInstance= new Employee(email);
  expect (typeof(employeeInstance.email)).toBe(email);
  // Assign an email to a new variable
  // Instantiate the Employee class, passing a name and an id and the email variable as input arguments, to create an employee object and assign it to a new variable
  // Expect the email of the employee object to be equal to the value of the email variable
});

// Test get name method
test("getName", () => {
  const testName= ruochen;
  const employeeInstance= new Employee(testName);
  expect (typeof(employeeInstance.getName)).toBe(testName);
  // Assign the name of an employee to a new variable
    // Instantiate the Employee class, passing the variable of the employee name as input augument, to create an object and assign it to an new variable
    // Expect the getName method of the object to return the name to be equal to the value of the emplyee name variable
});

// Test get id method
test("getId", () => {
  const testId = 110;
  const employeeInstance =new Employee('ruochen',110);
  expect (typeof(employeeInstance.getId)).toBe(testId);
  // Assign an id of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and the id variable as auguments, to create an object and assign it to an new variable
  // Expect the getId method of the object to return the id to be equal to the value of the emplyee id variable
});

// Test get email method
test("getEmail", () => {
  const testEmail = 'ruochen@test.com';
  const employeeInstance = new Employee ('ruochen', 110, 'ruochen@test.com');
  expect (typeof(employeeInstance.getEmail)).toBe(testEmail);
  // Assign an email of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and an id and the email variable as auguments, to create an object and assign it to an new variable
  // Expect the getEmail method of the object to return the email to be equal to the value of the emplyee email variable
});

// Test get role method
test("getRole", () => {
  const testRole = Employee;
  const employeeInstance = new Employee ('ruochen', 110, 'ruochen@test.com');
  expect (typeof(employeeInstance.getRole).toBe(testRole));
  // Assign "Employee" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email as auguments, to create an object and assign it to an new variable
  // Expect getRole() to return the role to be equal to the value of the role variable
});
