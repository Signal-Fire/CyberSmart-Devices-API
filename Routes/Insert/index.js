var route = require('express').Router();

var Inserter = new(require('../../Handlers/Insert'))();

route.get('/device', function(req, res) {
    Inserter.AddDevice(req.body).then(newDevice => {
        res.status(201).send(newDevice);
    }).catch(error => {
        res.status(401).send(" { error : " + error + "}");
    });
});

module.exports = route;