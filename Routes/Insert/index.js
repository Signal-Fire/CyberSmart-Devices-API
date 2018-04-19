var route = require('express').Router();
var Inserter = new(require('../../Handlers/Insert'))();

route.post('/', function(req, res) {
    console.log(req.body);
    try {
        Inserter.AddDevice(req.body).then(newDevice => {
            res.status(201).send(newDevice);
        }).catch(error => {
            res.status(400).send({ "error" : error });
        });
    } catch (ex) {
        res.status(500).send({ "error" : ex });
    }
});

module.exports = route;