const request = require('request-promise');

const API_KEY = 'b3193b77c536715e1907d29570a23f4d'

class Weather {
    static retrieveByCity (city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({error: "could not reach OpenWeatherMap API."});
        }); 
    }        
}

module.exports = Weather;