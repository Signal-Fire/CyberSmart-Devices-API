var route = require('express').Router();
var Updater = new(require('../../Handlers/Update'))();

route.get('/', function(req, res) {
    res.status(200).send('Hello World');
});

route.post('/state', function(req, res) {
    try {
        Updater.UpdateState(req.body).then(response => {
            return res.status(200).send(response);
        }).catch(error => {
            return res.status(400).send({ error : error });
        })
    } catch (ex) {
        return res.status(500).send({ error : ex });
    }
})

module.exports = route;