//intern’s name, ID, email, and school, 
const Manager = require('../lib/Manager');
//test office number argument 
test('Should return the manager office number', () => {
    let manager = new Manager('babs', 1, 'email', 1);
    expect(manager.officeNumber).toEqual(1);
});
//getOfficeNumber() function
test('getSchool() should return interns school', () => {
    let employee = new Manager('babs',1, 'email', 1);
    expect(employee.getOfficeNumber()).toEqual(1);
});
//role
test('should return managers role', () => {
    let role = "Manager";
    let employee = new Manager('babs', 1, 'email', 1);
    expect(employee.getRole()).toEqual(role);
});