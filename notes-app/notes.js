const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

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

const removeNote = (title) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title !== title)

    if (duplicateNotes.length === notes.length) {
        console.log(chalk.bgRed('No note with title ' + title + ' found!'))
    }
    else {
        saveNotes(duplicateNotes)
        console.log(chalk.bgGreen("Note removed!"))
    }

    
}

const listNotes = () => {
    const notes = loadNotes()

    if (notes.length === 0) {
        console.log(chalk.bgRed('No notes found!'))
    }
    else {
        console.log(chalk.bgRedBright("Your notes:"))
        notes.forEach(note => console.log(chalk.bgYellow.black('Title: ' + note.title)))
    }

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}