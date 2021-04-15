const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const locationArray = process.argv.slice(2)

if(locationArray.length === 0) {
    return console.log('Please enter a location')
}

geocode(locationArray[0], (error, data) => {
    if(error) {
        return console.log(error)
    }
    
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error) {
            return console.log(error)
        }
        
        console.log(data.location)
        console.log(forecastData)

      })
})