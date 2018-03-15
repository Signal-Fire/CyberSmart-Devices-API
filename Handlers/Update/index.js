/* jshint esversion: 6*/
var Device = require('../../Models/Device');

class Update {
    constructor() {

    }
    
    UpdateStateById(id, state) {
        return new Promise(function(resolve, reject) {
            Device.findByIdAndUpdate(id, { state : state }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to change state of device");

                return resolve(result);
            });
        });
    }
}

module.exports = Update;