const program = require('commander');

program
.command('update')
.description('Update password for an existing user')
.action(() => console.log('Update password'));

program.parse(process.argv);

if(!process.argv[2])
    program.outputHelp();