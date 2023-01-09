// Import Engineer class with require()
// const Employee = require('../lib/Employee');

// // Test setting github account
test("github", () => {
  const gitHub = 'mason66xue';
  const employeeInstance = new Engineer('ruochen',111, 'ruochen@test.com', 'gitHub');
  expect(employeeInstance.gitHub()).toBe(gitHub);

  // Assign github account to a new variable
  // Instantiate the Employee class, passing an name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Export the github of the employee object to be equal to the value of the github variable
});

// Test get role method
test("getRole", () => {
  const testRole= 'Engineer';
  const employeeInstance = new Engineer('ruochen', 111,'ruochen@test.com','mason66xue');
  expect(employeeInstance.getRole()).toBe(testRole)
  // Assign "Engineer" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email and a github account name as auguments, to create an object and assign it to an new variable
  // Export getRole() to return the role to be equal to the value of the role variable
});

// Test get github method
test("getGithub", () => {
  const testGithub = 'mason66xue';
  const employeeInstance = new Employee('ruochen', 111, 'ruochen@test.com','mason66xue');
  expect(employeeInstance.testGithub()).toBe(testGithub);
  // Assign github account to a new variable
  // Instantiate the Employee class, passing an employee name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Expect getGithub() to return the github  name to be equal to the value of the github variable
});
