const fs = require('fs');
const _ = require('lodash');
const  yargs = require('yargs');

const notes = require('./notes.js');

var argv=yargs.argv;
var command=process.argv[2];

if (command === 'add' ){
  var note = notes.addNote(argv.title,argv.body);
  if(note === undefined){
    console.log('Note with title already exists!!');
  }
  else{
    console.log(`Note created`);
    notes.logNote(note);
  }
}
else if(command === 'list' ){
  notes.getAll();
}
else if(command === 'read' ){
  var note = notes.read(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note);
  }
  else{
    console.log('Note not found');
  }
}
else if(command === 'remove' ){
  var noteRemoved = notes.remove(argv.title);
  var message = noteRemoved ? 'Note removed':'No note removed';
  console.log(message);
}
else{
  console.log('command invalid');
}
