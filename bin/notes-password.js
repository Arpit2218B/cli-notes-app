const program = require('commander');
const password = require('../actions/password');

program
.command('update')
.description('Update password for an existing user')
.action(password.update);

program.parse(process.argv);

if(!process.argv[2])
    program.outputHelp();