var route = require('express').Router();

var Updater = new(require('../../Handlers/Update'))();

route.get('/state', function(req, res) {
    Updater.ChangeState(req.body).then(state => {
        res.status(200).send(state);
    }).catch(error => {
        res.status(401).send("{ error : " + error + "}");
    });
});

module.exports = route;