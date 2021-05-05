const inquirer = require('inquirer');
const colors = require('colors');

const userCreateQuestions = [
    {
        name: 'username',
        message: 'Enter username :'.green
    },
    {
        name: 'password',
        message: 'Enter password :'.green,
        type: 'password'
    },
    {
        name: 'repassword',
        message: 'Re-enter password :'.green,
        type: 'password'
    }
]

const user = {
    create: () => {
        inquirer
        .prompt(userCreateQuestions)
        .then(answers => {
            // handle answers
        })
        .catch(err => {
            // handle errors
        })
    },

    remove: () => {
        console.log('Deleting a user')
    }
}

module.exports = user;