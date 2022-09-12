const express   = require("express");
const path      = require("path");
const hbs       = require("hbs");
const forecast   = require("./src/utils/forecast");

const port  = process.env.PORT || 4000;

const app = express();

const publicDirectoryPath = path.join(__dirname, 'public')
const viewDirectoryPath = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials')

app.set('view engine', 'hbs' );
app.set('views', viewDirectoryPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', ( req, res ) => {
    res.render('index');
} )

app.get('/about', ( req, res) => {
    res.render('about')
} );

app.get('/help', ( req, res) => {
    res.render('help')
} );

app.get('/weather', ( req, res ) => {
    let address = req.query.address;

    if(!address){
        return res.send({error:'Kindly provide the address'});
    }

    forecast(address, (error, response) => {
        if(error){
            return res.send({error: " service unavailble"});
        }
        console.log(response)
        
        res.send(response);
    });
})


app.listen( port, () => {
    console.log(" Server is running on port ", port);
} )