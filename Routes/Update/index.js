var route = require('express').Router();

route.get('/update/:id', function(req, res) {
    res.status(500).send();
});

module.exports = route;