/* jshint esversion: 6*/
var route = require('express').Router();
var Updater = new(require('../../Handlers/Update'))();

route.post('/state', function(req, res) {
    try {
        Updater.UpdateStateById(req.body._id, req.body.state).then(state => {
            res.status(200).send({ "state ":  state.state });
        }).catch(error => {
            res.status(401).send({ "error " : error });
        });
    } catch (ex) {
       res.status(500).send({ "error " : ex }); 
    }
});

module.exports = route;