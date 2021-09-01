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
                name: "mName",
                message: "What is the manager's name?"
            },
            //email
            {
                type: "input",
                name: "mEmail",
                message: "What is the manager's email?"
            },
            //id
            {
                type: "input",
                name: "mId",
                message: "What is the manager's id?"
            },
            //office id
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?"
            }
            // push to array here 
        ]).then(answers => {
            // i know I have this constructor here but its coming up undefined- how to i define it? in my lib manager.js? 
            const manager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.officeNumber);
            teamMembers.push(manager);
            idArr.push(answers.mId);
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
                name: "eName",
                message: "What is the engineer's name?"
            },
            //email
            {
                type: "input",
                name: "eEmail",
                message: "What is the engineers's email?"
            },
            // id
            {
                type: "input",
                name: "eId",
                message: "What is the engineers id?"
            },
            // github
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github?"
            }

            // push items here to array  
        ]).then(answers => {
            const engineer = new Engineer(answers.eName, answers.eId, answers.eEmail, answers.github);
            //pushes to array 
            teamMembers.push(engineer);
            idArr.push(answers.eId);
            // prompts to make another team member or not 
            createTeam();
        });
    }
    // intern- name, id, school, email 
    function createIntern() {
        inquirer.prompt([
            //name
            {
                type: "input",
                name: "iName",
                message: "What is the intern's name?"
            },
            //email
            {
                type: "input",
                name: "iEmail",
                message: "What is the intern's email?"
            },
            //input            
            {
                type: "input",
                name: "iId",
                message: "What is the intern's id?"
            },
            //school 
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?"
            },

            // push answers here     
        ]).then(answers => {
            const intern = new Intern(answers.iName, answers.iId, answers.iEmail, answers.school);
            //pushes to array 
            teamMembers.push(intern);
            idArr.push(answers.iId);
            // prompt choices again 
            createTeam();
        });

    }
    function buildTeam() {
        // Creates output to go and render team to html
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        console.log("Generating Team Profile.... ");
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    createManager();
}

builderMenu();