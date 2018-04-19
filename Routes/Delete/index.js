var route = require('express').Router();
var Deleter = new(require('../../Handlers/Delete'))();

route.post('/:id', function(req, res) {
    try {
        Deleter.Device(req.headers.authorization, req.params.id).then(deleted => {
            res.status(200).send(deleted);
        }).catch(error => {
            res.status(400).send({ "error " : error });
        });
    } catch (ex) {
        res.status(500).send({ "error " : ex });
    }
});

module.exports = route;