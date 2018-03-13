var route = require('express').Router();

route.post('/add', function(req, res) {
    res.status(500).send();
});

module.exports = route;