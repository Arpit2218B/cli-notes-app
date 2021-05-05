const program = require('commander');
const note = require('../actions/note');

program
.command('create')
.description('Create a new note')
.action(note.create);

program
.command('view')
.description('View notes for an existing user')
.action(note.view);

program.parse(process.argv);

if(!process.argv[2])
    program.outputHelp();