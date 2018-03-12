var route = require('express').Router();

route.get('/', function(req, res) {
    res.status(200).send("CyberSmart Devices API");
});

module.exports = route;