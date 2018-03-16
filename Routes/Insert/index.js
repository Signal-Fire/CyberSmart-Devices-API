/* jshint esversion: 6*/
var route = require('express').Router();
var Inserter = new(require('../../Handlers/Insert'))();

route.post('/device', function(req, res) {
    try {
        Inserter.AddDevice(req.body).then(newDevice => {
            res.status(201).send(newDevice);
        }).catch(error => {
            res.status(401).send(" { error : " + error + "}");
        });
    } catch (ex) {
        res.status(500).send(" { error : Unexpected Server Error }");
    }
});

module.exports = route;