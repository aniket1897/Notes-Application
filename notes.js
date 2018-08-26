console.log('Starting notes.js');

var addNote = (title,body) => {
      console.log(`Added notes ${title} ${body}`);
}

var getAll = () => {
      console.log('Listing all notes');
}

var read = (title) => {
      console.log(`Fetching  ${title}`);
}

var remove = (title) => {
      console.log(`Removing  ${title}`);
}

module.exports = {
   addNote,
   getAll,
   read,
   remove
};
