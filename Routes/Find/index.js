/* jshint esversion: 6 */
var route = require('express').Router();
var Finder = new(require('../../Handlers/Find'))();

route.get('/all', function(req, res) {
    try {
        Finder.FindAll().then(devices => {
            res.status(200).send(devices);
        }).catch(error => {
            res.status(400).send({ "error" : error });
        });
    } catch (ex) {
        res.status(500).send({ "error" : ex });
    }
});

route.get('/connected', function(req, res) {
    try {
        Finder.FindConnected().then(connected => {
            res.status(200).send(connected);
        }).catch(error => {
            res.status(400).send({ "error" : error });
        });
    } catch (ex) {
        res.status(500).send({ "error" : ex });
    }
});

route.get('/in/location', function(req, res) {
    try {
        Finder.FindByLocation(req.body.location).then(devices => {
            res.status(200).send(devices);
        }).catch(error => {
            res.status(400).send({ "error" : error });
        });
    } catch (ex) {
        res.status(500).send({ "error" : ex });
    }
});

route.get('/:id', function(req, res) {
    try {
        Finder.FindById(req.params.id).then(device => {
            res.status(200).send(device);
        }).catch(error => {
            res.status(400).send({ "error" : error });
        });
    } catch (ex) {
        res.status(500).send({ "error" : ex });
    }
});



module.exports = route;