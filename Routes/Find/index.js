/* jshint esversion: 6 */
var route = require('express').Router();
var Finder = new(require('../../Handlers/Find'))();

route.get('/all', function(req, res) {
    try {
        Finder.FindAll().then(devices => {
            res.status(200).send(devices);
        }).catch(err => {
            res.status(404).send("{error : " + err);
        });
    } catch (ex) {
        res.status(500).send("{ error: Unexpeced server crash ");
    }
});

route.get('/location', function(req, res) {
    try {
        Finder.FindByLocation(req.body.location).then(devices => {
            res.status(200).send(devices);
        }).catch(error => {
            res.status(404).send(error);
        });        
    } catch (ex) {
        res.status(500).send("{ error: Unexpeced server crash ");
    }
});

route.get('/:id', function(req, res) {
    try {
        Finder.FindById(req.params.id).then(device => {
            res.status(200).send(device);
        }).catch(err => {
            res.status(404).send("{error : " + err);
        });
    } catch (ex) {
        res.status(500).send("{ error: Unexpeced server crash ");
    }
});

module.exports = route;