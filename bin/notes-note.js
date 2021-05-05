const program = require('commander');

program
.command('create')
.description('Create a new note')
.action(() => console.log('Create a new note'));

program
.command('view')
.description('View notes for an existing user')
.action(() => console.log('View notes'));

program.parse(process.argv);

if(!process.argv[2])
    program.outputHelp();