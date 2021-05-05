#!/usr/bin/env node

// console.log('Hello world from app');

const program = require('commander');
const pkg = require('../package.json');

program.version(pkg.version);

program
.command('user', 'Manage users')
.command('password', 'Manage passwords')
.command('note', 'Manage notes for a user')

program.parse(process.argv);