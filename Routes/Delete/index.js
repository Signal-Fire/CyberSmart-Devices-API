var route = require('express').Router();
var Deleter = require('../../Handlers/Delete');

route.post('/all', function(req, res) {
    try {
        Deleter.DeleteAll().then(deleted => {
            return res.status(200).send({ success : deleted });
        }).catch(err => {
            return res.status(400).send({ error : error });
        })
    } catch (ex) {
        return res.status(500).send({ error : ex });
    }
});

route.post('/:id', function(req, res) {
    try {
        Deleter.Device(req.headers.authorization, req.body.deleter, req.params.id).then(deleted => {
            return res.status(200).send(deleted);
        }).catch(error => {
            return res.status(400).send({ "error " : error });
        });
    } catch (ex) {
        return res.status(500).send({ "error " : ex });
    }
});

module.exports = route;