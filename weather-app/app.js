const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6d30da04ea13e13f993d52804cfd5266&query=Whitby%20On'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})