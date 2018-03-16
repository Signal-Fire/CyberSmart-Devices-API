/* jshint esversion: 6*/
var route = require('express').Router();
var Deleter = new(require('../../Handlers/Delete'))();

route.post('/device', function(req, res) {
    try {
        Deleter.Device(req.body._id).then(deleted => {
            res.status(200).send(deleted);
        }).catch(error => {
            res.status(404).send("{ error : " + error + "}");
        });
    } catch (ex) {
        res.status(500).send("{ error : " + ex + "}");
    }
});

module.exports = route;