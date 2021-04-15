const request = require('request')

const geocode = require('./utils/geocode.js')

const url = 'http://api.weatherstack.com/current?access_key=6d30da04ea13e13f993d52804cfd5266&query=Whitby%20On'

request({url: url, json: true}, (error, response) => {

    if(error) {
        console.log('Unable to connect to weather service')
    } else if(response.body.error) {
        console.log(response.body.error.info)
    }
    else {
        console.log(response.body.current.weather_descriptions[0] + 
                    '. It is currently ' + 
                    response.body.current.temperature + 
                    ' degrees out. It feels like ' + 
                    response.body.current.feelslike + 
                    ' degrees out. ')
    }
})

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})