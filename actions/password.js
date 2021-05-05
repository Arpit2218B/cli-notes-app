const inquirer = require('inquirer');
const colors = require('colors');

const validator = require('../utils/validator');
const UserLib = require('../libs/User');

const passwordUpdateQuestions = [
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
        message: 'Enter new password :'.yellow,
        type: 'password',
        validate: validator.isRequired
    }
]

const handleUpdatePasswords = ({username, password, repassword}) => {
    try {
        const user = new UserLib(username, password);
        user.changePassword(repassword);
        console.log('Password updated successfully'.green);
    }
    catch(ex) {
        console.log(`Error updating password. ${ex.message}`.red);
    }
}

const password = {
    update: () => {
        inquirer
        .prompt(passwordUpdateQuestions)
        .then(handleUpdatePasswords)
        .catch(err => {
            console.log(`Internal Error. ${err.message}`.red);
        });
    }
}

module.exports = password;