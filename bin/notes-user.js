const program = require('commander');
const userActions = require('../actions/user');

program
.command('create')
.description('Create a new user')
.action(userActions.create);

program
.command('delete')
.description('Delete an existing user')
.action(userActions.remove);

program.parse(process.argv);

if(!process.argv[2])
    program.outputHelp();