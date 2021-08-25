
const { test } = require('@jest/globals');
const Employee= require('../lib/Employee')


test("Should return an object", ()=>{
    const emp = new Employee();
    expect(typeof(emp)).toEqual("object");
});
//name
test('Should return the employee name', () => {
    let employee = new Employee('Kim');
    expect(employee.name).toEqual('Kim');
});
// id
test('Should return the employee ID', () => {
    let employee = new Employee('babs', 1);
    expect(employee.id).toEqual(1);
}); 
//email
test('Should return the employee email', () => {
    let employee = new Employee('babs', 1, 'email');
    expect(employee.email).toEqual('email');
});
//checking function
//getname test
test('getName() should return the employee name', () => {
    let employee = new Employee('babs');
    expect(employee.getName()).toEqual('babs');
});
//get id
test('getId() should return the employee name', () => {
    let employee = new Employee('babs', 1);
    expect(employee.getId()).toEqual(1);
});
//get email
test('getEmail() should return the employee email', () => {
    let employee = new Employee('babs',1, 'email');
    expect(employee.getEmail()).toEqual('email');
});
//get role 
test('getName() should return the employee name', () => {
    let role= "Employee";
    let employee = new Employee('babs',1, 'email');
    expect(employee.getRole()).toEqual(role);
});
