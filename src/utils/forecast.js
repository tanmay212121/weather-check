const postmanRequest    = require("postman-request");

const token     = `419986c7ed3930ad6c9e73096515d5fd`;



const forecast = ( place ) => {

    const URL       = `http://api.weatherstack.com/current?access_key=${token}&query=${place}`;

    postmanRequest( URL, ( error, response ) => {
        if( error ){
            console.log(' There is some issue in your network. ');
        }
        if( response.error ){
            console.log(' internal server error ', response.error);
        }
        let forecastResponseObject = JSON.parse(response.body);
        console.log( 'forecast response object', forecastResponseObject );
    } )

}

module.exports = forecast;