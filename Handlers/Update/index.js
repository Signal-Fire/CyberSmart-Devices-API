/* jshint esversion: 6*/
var Device = require('../../Models/Device'),
    request = require('request'),
    config = require('../../Configuration');

class Update {
    constructor() {

    }
    
    UpdateStateById(id, state) {
        return new Promise(function(resolve, reject) {
            Device.findByIdAndUpdate(id, { state : state }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to change state of device");

                    request.post({ 
                        headers: {'content-type' : 'application/json'},
                        url: 'http://' + config["state-api"] + '/update/state', 
                        body: JSON.stringify({
                            ip : result.address,
                            state : state
                        })
                    }, 
                    function optionalCallback(err, httpResponse, body) {
                        if (err) 
                            return reject("Change state failed" + err);                  
        
                        return resolve("Updated state");
                    });

                return resolve(result);
            });
        });
    }
}

module.exports = Update;