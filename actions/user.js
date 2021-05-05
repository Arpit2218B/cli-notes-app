const inquirer = require('inquirer');
const colors = require('colors');

const validator = require('../utils/validator');
const UserLib = require('../libs/User');

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

const userDeleteQuestions = [
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
        name: 'confirm',
        message: 'Confirm delete :'.yellow,
        type: 'confirm'
    }
]

const handleCreateUser = (answers) => {
    const { username, password, repassword } = answers;
    try{
        if(validator.cofirmPassword(password, repassword))
        {
            const newUser = new UserLib(username, password);
            newUser.createUser();
            console.log(`User [${username}] created successfully`.green)
        }
    }
    catch(ex) {
        console.log(`Error creating user. ${ex.message}`.red);
    }
}

const handleDeleteUser = ({username, password, confirm}) => {
    try {
        if(!confirm) {
            console.log('Delete operation cancelled'.blue);
            return;
        }
        const user = new UserLib(username, password);
        user.deleteUser();
        console.log('User deleted successfully'.green);
    }
    catch(ex) {
        console.log(`Error deleting user. ${ex.message}`.red);
    }
}

const user = {
    create: () => {
        inquirer
        .prompt(userCreateQuestions)
        .then(handleCreateUser)
        .catch(err => {
            console.log(`Internal Error. ${err.message}`.red);
        });
    },

    remove: () => {
        inquirer
        .prompt(userDeleteQuestions)
        .then(handleDeleteUser)
        .catch(err => {
            console.log(`Internal Error. ${err.message}`.red);
        });
    }
}

module.exports = user;