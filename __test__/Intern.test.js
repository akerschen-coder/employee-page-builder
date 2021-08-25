//intern’s name, ID, email, and school, 
const Intern = require('../lib/Intern');
//test school argument 
test('Should return the intern school', () => {
    let intern = new Intern('babs', 1, 'email', 'school');
    expect(intern.school).toEqual('school');
});
//school function
test('getSchool() should return interns school', () => {
    let employee = new Intern('babs',1, 'email', 'school');
    expect(employee.getSchool()).toEqual('school');
});
//role
test('should return interns role', () => {
    let role = "Intern";
    let employee = new Intern('babs',1, 'email', 'school');
    expect(employee.getRole()).toEqual(role);
});