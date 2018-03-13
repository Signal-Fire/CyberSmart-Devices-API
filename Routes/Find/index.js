var route = require('express').Router();

route.get('/all', function(req, res) {
    res.status(500).send();
});

route.get('/:id', function(req, res) {
    res.status(500).send();
});

module.exports = route;