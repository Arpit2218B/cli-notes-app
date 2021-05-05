const inquirer = require('inquirer');
const colors = require('colors');

const validator = require('../utils/validator');
const UserLib = require('../libs/User');

const noteCreateQuestions = [
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
        name: 'note',
        message: 'Enter your note :'.yellow,
        validate: validator.isRequired
    }
]

const noteViewQuestions = [
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
    }
]

const handleCreateNote = ({username, password, note}) => {
    try{
        const newUser = new UserLib(username, password);
        newUser.createNote(note);
        console.log(`New note created successfully`.green)
    }
    catch(ex) {
        console.log(`Error creating note. ${ex.message}`.red);
    }
}

const handleViewNote = ({username, password}) => {
    try {
        const user = new UserLib(username, password);
        const currentNote = user.viewNote();
        console.log(`\nNotes for user [${username}]\n`.yellow)
        console.log(currentNote.green);
    }
    catch(ex) {
        console.log(`Error viewing note. ${ex.message}`.red);
    }
}

const note = {
    create: () => {
        inquirer
        .prompt(noteCreateQuestions)
        .then(handleCreateNote)
        .catch(err => {
            console.log(`Internal Error. ${err.message}`.red);
        });
    },

    view: () => {
        inquirer
        .prompt(noteViewQuestions)
        .then(handleViewNote)
        .catch(err => {
            console.log(`Internal Error. ${err.message}`.red);
        });
    }
}

module.exports = note;