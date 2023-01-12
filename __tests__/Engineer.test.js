// Import Engineer class with require()
const Engineer = require('../lib/Engineer');


// // Test setting github account
test("github", () => {
  const gitHub = 'mason66xue';
  const employeeInstance = new Engineer('ruochen',111, 'ruochen@test.com', gitHub);
  expect(employeeInstance.getGithub()).toBe(gitHub);

});

// Test get role method
test("getRole", () => {
  const testRole= 'Engineer';
  const employeeInstance = new Engineer('ruochen', 111,'ruochen@test.com','mason66xue');
  expect(employeeInstance.getRole()).toBe(testRole)
});

// Test get github method
test("getGithub", () => {
  const testGithub = 'mason66xue';
  const employeeInstance = new Engineer('ruochen', 111, 'ruochen@test.com','mason66xue');
  expect(employeeInstance.getGithub()).toBe(testGithub);
});
