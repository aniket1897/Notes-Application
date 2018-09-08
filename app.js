const fs = require('fs');
const _ = require('lodash');
const  yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions={
    describe:'Title of note',
    demand : true,
    alias:'t'
};

var argv = yargs
           .command('add','Add a note',{
              title:titleOptions,
              body:{
                describe:'Body of note',
                demand : true,
                alias:'b'
              }
           })
           .command('list','List all notes')
           .command('read','Read an existing note',{
             title:titleOptions
           })
           .command('remove','Remove an existing note',{
             title:titleOptions
           })
           .help()
           .argv;
var command=argv._[0];

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
