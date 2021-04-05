const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            notes.addNote(argv.title, argv.body)
        }
    }
)

//Create a remove command
yargs.command(
    {
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            notes.removeNote(argv.title)
        }
    }
)

//Create add command
yargs.command(
    {
        command: 'list',
        describe: 'List all the notes',
        handler: function() {
            console.log('Listing all the notes!')
        }
    }
)

//Create a remove command
yargs.command(
    {
        command: 'read',
        describe: 'Read a note',
        handler: function() {
            console.log('Reading the note!')
        }
    }
)

//add, remove, read, list

yargs.parse()