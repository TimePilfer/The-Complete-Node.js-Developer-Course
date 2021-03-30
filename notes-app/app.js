const fs = require('fs')

//fs.writeFileSync('notes.txt', 'My name is James')
fs.appendFileSync('notes.txt', "\r\n" + 'This is the appended sentence')