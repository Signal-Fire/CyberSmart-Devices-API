var Device = require('../../Models/Device');
var Logger = require('../Logger');

class Insert {
    constructor() {

    }

    AddDevice(device) {
        return new Promise(function(resolve, reject) {
            var newDevice = new Device(device);

                newDevice.save(function(err, device) {
                    if (err || device === null) 
                        return reject(err);
                    
                    Logger.CreateLog({
                        message : 'Added a ' + device.name,
                        created_by_user : device.created_by_user
                    });

                    return resolve(device);
                });      
        });
    }
}

module.exports = Insert;