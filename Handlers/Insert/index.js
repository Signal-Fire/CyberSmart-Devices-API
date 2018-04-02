/* jshint esversion: 6 */
var Device = require('../../Models/Device');

class Insert {
    constructor() {

    }

    AddDevice(device) {
        return new Promise(function(resolve, reject) {
            var newDevice = new Device(device);

                newDevice.save(function(err, device) {
                    if (err || device === null) 
                        return reject(err);
                        
                    return resolve(device);
                });      
        });
    }
}

module.exports = Insert;