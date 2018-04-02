/* jshint esversion: 6 */
var Device = require('../../Models/Device'),
    User = new(require('../User'))(),
    Logger = new(require('../Logger'))();

class Insert {
    constructor() {

    }

    AddDevice(authorization, device) {
        return new Promise(function(resolve, reject) {
            User.ValidateUser(authorization).then(user => {
                var newDevice = new Device(device);

                newDevice.save(function(err, device) {
                    if (err || device === null) 
                        return reject(err);
                    
                    Logger.CreateWithID(device._id, "CREATED", user.id);

                    return resolve(device);
                });
            }).catch(error => {
                return reject("Unable to authenticate");
            });         
        });
    }
}

module.exports = Insert;