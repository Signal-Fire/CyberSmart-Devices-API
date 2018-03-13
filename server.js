/* jshint esversion: 6 */
var express = require('express');
var cors = require('cors');
var app = express();

var Update_Routes = require('./Routes/Update');
var Find_Routes = require('./Routes/Find');

app.use(cors());

const port = 8080;

app.use('/api/update', Update_Routes);
app.use('/api/find', Find_Routes);

app.listen(port, ()  => {
    console.log("Devices API, sailing through " + port + ", Braavosian warriors are on our tail!");
});