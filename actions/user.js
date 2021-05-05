const inquirer = require('inquirer');
const colors = require('colors');

const validator = require('../utils/validator');

const userCreateQuestions = [
    {
        name: 'username',
        message: 'Enter username :'.yellow,
        validate: validator.isRequired
    },
    {
        name: 'password',
        message: 'Enter password :'.yellow,
        type: 'password',
        validate: validator.isRequired
    },
    {
        name: 'repassword',
        message: 'Re-enter password :'.yellow,
        type: 'password',
        validate: validator.isRequired
    }
]

const handleCreateAnswers = (answers) => {
    const { username, password, repassword } = answers;
    try{
        if(validator.cofirmPassword(password, repassword))
        {
            console.log(`User [${username}] created successfully`.green)
        }
    }
    catch(ex) {
        console.log(`Error creating user. ${ex.message}`.red);
    }
}

const user = {
    create: () => {
        inquirer
        .prompt(userCreateQuestions)
        .then(handleCreateAnswers)
        .catch(err => {
            console.log(`Internal Error. ${err.message}`.red);
        });
    },

    remove: () => {
        console.log('Deleting a user')
    }
}

module.exports = user;