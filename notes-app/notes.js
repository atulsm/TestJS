const fs = require('fs');

var notesStr = fs.readFileSync("data.json");
var notes = {};
if(notesStr.length > 0){
    notes=JSON.parse(notesStr);
}

module.exports = {
    addNote : (title,body) => {
        console.log(`Adding note with title: ${title} and body:${body}`);
        notes.title = body;
        save();
    },
    getAll : () => {
        return notes;
    },
    getNote : (title) => {
        return notes[title];
    },
    removeNote : (title) => {
        delete notes[title];
        save();
    }
}

function save(){
    fs.writeFile("data.json",JSON.stringify(notes), (err) => {
        if(err){
            console.log(err);
        }
    });
}

