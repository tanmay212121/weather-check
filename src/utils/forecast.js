const postmanRequest    = require("postman-request");

const token     = `419986c7ed3930ad6c9e73096515d5fd`;

const forecast = ( place , cb) => {

    console.log('place' , place);
    const URL  = `http://api.weatherstack.com/current?access_key=${token}&query=${place}`;

    postmanRequest( URL, ( error, response ) => {
        if( error ){
            cb(' There is some issue in your network. ', undefined)
        }
        if( response.error ){
            cb(' internal server error ', undefined)
        }
        let forecastResponseObject = JSON.parse(response.body);
        cb(undefined,forecastResponseObject)
    } )

}

module.exports = forecast;