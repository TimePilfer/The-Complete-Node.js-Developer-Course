const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return "Your notes..."
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    }
    else {
        console.log(chalk.bgRed("Note title taken!"))
    }

    
}

const removeNote = function(title) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title !== title
    })

    if (duplicateNotes.length === notes.length) {
        console.log(chalk.bgRed('No note with title ' + title + ' found!'))
    }
    else {
        saveNotes(duplicateNotes)
        console.log(chalk.bgGreen("Note removed!"))
    }

    
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
    
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}