const fs = require('fs');

var notes={
  title : 'Some title',
  body : 'Some body'
};

var notesString = JSON.stringify(notes);

fs.writeFileSync('notes.json',notesString);

var noteString = fs.readFileSync('notes.json');
var noteObject = JSON.parse(noteString);

console.log(typeof noteObject);
console.log(noteObject.title);
