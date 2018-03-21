/* jshint esversion: 6 */
var express = require('express'),
    cors = require('cors'),
    config = require('./Configuration'),
    app = express();

var Update_Routes = require('./Routes/Update');
var Find_Routes = require('./Routes/Find');
var Insert_Routes = require('./Routes/Insert');
var Delete_Routes = require('./Routes/Delete');

app.use(cors());

const port = 8080;

app.use('/update', Update_Routes);
app.use('/find', Find_Routes);
app.use('/insert', Insert_Routes);
app.use('/delete', Delete_Routes);

app.listen(config.port, ()  => {
    console.log("Devices API, sailing through " + port + ", Braavosian warriors are on our tail!");
});