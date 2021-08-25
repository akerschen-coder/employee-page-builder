//engineer’s name, ID, email, and GitHub username,
const Engineer = require('../lib/Engineer');
//test github 
test('Should return the engineer github', () => {
    let engineer = new Engineer('babs', 1, 'email', 'github');
    expect(engineer.github).toEqual('github');
});
//github function
test('getGithub() should return the employee email', () => {
    let employee = new Engineer('babs',1, 'email', 'github');
    expect(employee.getGithub()).toEqual('github');
});
//role
test('getName() should return the employee name', () => {
    let role= "Engineer";
    let employee = new Engineer('babs',1, 'email');
    expect(employee.getRole()).toEqual(role);
});