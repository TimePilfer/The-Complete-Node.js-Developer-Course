const fs = require('fs')
// const book = {
//     title: 'Bible',
//     author: 'Jesus'
// }

// const jsonBook = JSON.stringify(book)

// fs.writeFileSync('1-json.json', jsonBook)

// const dataBuffer = fs.readFileSync('1-json.json')

// const dataJSON = dataBuffer.toString()

// const data = JSON.parse(dataJSON)

// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')

const dataJSON = JSON.parse(dataBuffer)

dataJSON.name = "James"
dataJSON.age = "32"

fs.writeFileSync('1-json.json', JSON.stringify(dataJSON))