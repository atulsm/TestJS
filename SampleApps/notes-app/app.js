const lodash = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

//console.log(notes.addNote());
//console.log(lodash.isString(true));
//console.log(process.argv);

var argv = yargs.argv;
var command = argv._[0];
//console.log(argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
    console.log(notes.getAll());
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else if(command === 'read'){
    console.log(notes.getNote(argv.title));
}else{
    console.log("Unrecognized command");
}

