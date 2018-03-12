/* jshint esversion: 6 */
var express = require('express');
var cors = require('cors');
var app = express();

var Routes = require('./Routes/Devices');

app.use(cors());

const port = 8080;

app.use('/api', Routes);

app.listen(port, ()  => {
    console.log("Devices API, sailing through " + port + ", Braavosian warriors are on our tail!");
});