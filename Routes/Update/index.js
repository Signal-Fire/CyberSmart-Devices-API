/* jshint esversion: 6*/
var route = require('express').Router();
var Updater = new(require('../../Handlers/Update'))();

route.get('/', function(req, res) {
    res.status(200).send('Hello World');
});
module.exports = route;