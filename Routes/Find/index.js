var route = require('express').Router();
var Finder = new(require('../../Handlers/Find'))();

route.get('/all', function(req, res) {
    Finder.FindAll().then(devices => {
        res.status(200).send(devices);
    }).catch(err => {
        res.status(404).send("{error : " + err);
    });
});

route.get('/:id', function(req, res) {
    Finder.FindById(req.params.id).then(device => {
        res.status(200).send(device);
    }).catch(err => {
        res.status(404).send("{error : " + err);
    });
});

module.exports = route;