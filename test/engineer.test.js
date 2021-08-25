//engineer’s name, ID, email, and GitHub username,
const { expect, it } = require('@jest/globals');
const { describe } = require('yargs');
const index = require('../index.js');

describe('Engineer', () => {
    it("should return employees name", () => {
        let employee = new Engineer('Kim', 1, 'kim@gmail.com');

        expect(employee.name).toEqual('Kim');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('kim@gmail.com');
    });
    // employee name 
    it('Should return the employee name', () => {
        let employee = new Engineer('Kim', 1, 'kim@gmail.com');
        expect(getName(employee)).toEqual('Kim');
    });
    //get ID();
    it('Should return the employee Id', () => {
        let employee = new Engineer('Kim', 1, 'kim@gmail.com');
        expect(getId(employee)).toEqual(1);
    });
    //get email
    it('Should return the employee email', () => {
        let employee = new Engineer('Kim', 1, 'kim@gmail.com');
        expect(getEmail(employee)).toEqual('kim@gmail.com');
    });

    // get github
    it('Should return the employees github', () => {
        let employee = new Engineer('Kim', 1, 'kim@gmail.com', 'kimsgithub');
        expect(getGithub(employee)).toEqual('kimsgithub');
    });
    // get role - don't know if I should have or not  
    it('Should return the employee role', () => {
        let employee = new Engineer('Kim', 1, 'kim@gmail.com');
        expect(getRole(employee)).toEqual('Employee');
    });
});