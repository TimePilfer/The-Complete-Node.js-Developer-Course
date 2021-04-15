const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=6d30da04ea13e13f993d52804cfd5266&query='+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error) {
            callback(response.body.error.info, undefined)
        } 
        else {
            callback(undefined, 
                    response.body.current.weather_descriptions[0] + 
                    '. It is currently ' + 
                    response.body.current.temperature + 
                    ' degrees out. It feels like ' + 
                    response.body.current.feelslike + 
                    ' degrees out. '
            )
        }
    
    })
}

module.exports = forecast