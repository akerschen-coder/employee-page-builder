const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs'); 
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// to push to html 
const DIST_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/pageTemplate.js');

//array to be pushed into 
const teamMembers = [];
const idArr = [];

function builderMenu() {
    // manager- name, id, office id, email
    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([
            //name
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?"
            },
            //id
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?"
            },
            //office id
            {
                type: "input",
                name: "officeID",
                message: "What is the manager's office number?"
            },
            //email
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?"
            }
            // push to array here 
        ]).then(answers => {
            // i know I have this constructor here but its coming up undefined- how to i define it? in my lib manager.js? 
            const manager = new Manager(answers.name, answers.id, answers.officeID, answers.email);
            teamMembers.push(manager);
            idArr.push(answers.officeId);
            idArr.push(answers.id);
            createTeam();
        });
    }
    // prompt to create team giving choices of engineer and intern or no.
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                //still have to create the default
                default:
                    buildTeam();
            }
        });
    }


    // create engineer- name, id, github, email
    function createEngineer() {
        console.log("Please build your team");
        inquirer.prompt([
            //name
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?"
            },
            // id
            {
                type: "input",
                name: "id",
                message: "What is the engineers id?"
            },
            // github
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github?"
            },
            //email
            {
                type: "input",
                name: "email",
                message: "What is the engineers's email?"
            }
            // push items here to array  
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.github, answers.email);
            //pushes to array 
            teamMembers.push(engineer);
            idArr.push(answers.id);
            // prompts to make another team member or not 
            createTeam();
        });
    }
    // intern- name, id, school, email 
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?"
            }
            // push answers here     
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.school, answers.email);
            //pushes to array 
            teamMembers.push(intern);
            idArr.push(answers.id);
            // prompt choices again 
            createTeam();
        });

    } 
    function buildTeam() {
        // Create the output directory if the output path doesn't exist
            if (!fs.existsSync(DIST_DIR)) {
                fs.mkdirSync(DIST_DIR);
            }
            console.log("Generating Team Profile.... ");
            fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
        }

createManager();
}

builderMenu();