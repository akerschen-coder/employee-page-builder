// employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
const { expect, it } = require('@jest/globals'); 
const { describe } = require('yargs');
const index = require('../index.js');

describe('Manager', () => {
    it("should return employees name", ()=> {
        let employee = new Manager('Kim', 1, 'kim@gmail.com', 1);

        expect(employee.name).toEqual('Kim');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('kim@gmail.com');
        expect(employee.officeNumber).toEqual('1');

    });
    // employee name 
    it('Should return the employee name', ()=>{
        let employee = new Manager('Kim', 1, 'kim@gmail.com', 1);
        expect(getName(employee)).toEqual('Kim');
    });
    //get ID();
    it('Should return the employee Id', ()=>{
        let employee = new Manager('Kim', 1, 'kim@gmail.com', 1);
        expect(getId(employee)).toEqual(1);
    });
    //get email
    it('Should return the employee email', ()=>{
        let employee = new Manager('Kim', 1, 'kim@gmail.com', 1);
        expect(getEmail(employee)).toEqual('kim@gmail.com');
    });
    // get role 
    it('Should return the employee role', ()=>{
        let employee = new Manager('Kim', 1, 'kim@gmail.com', 1);
        expect(getRole(employee)).toEqual('Manager');
    });
});