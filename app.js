const express   = require("express");
const path      = require("path");
const hbs       = require("hbs");
const forecast   = require("./src/utils/forecast");

const port  = process.env.PORT || 4000;

const app = express();

const viewDirectoryPath = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials')

app.set('view engine', 'hbs' );
app.set('views', viewDirectoryPath);
hbs.registerPartials(partialsPath);

app.get('', ( req, res ) => {
    res.render('index');
} )

app.get('/about', ( req, res) => {
    res.render('about')
} );

app.get('/help', ( req, res) => {
    res.render('help')
} );

forecast('bangladesh');

app.listen( port, () => {
    console.log(" Server is running on port ", port);
} )