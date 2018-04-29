var Device = require('../../Models/Device');
var Logger = require('../Logger');

class Insert {
    constructor() {

    }

    AddDevice(device) {
        return new Promise(function(resolve, reject) {
            var newDevice = new Device(device);

                newDevice.save(function(err, device) {
                    console.log(err, device);
                    if (err || device === null) 
                        return reject(err);
                    
                    Logger.CreateLog({
                        message : 'Added a ' + device.name + ' to the ' + device.location,
                        created_by_user : device.created_by_user,
                        type : "Device"
                    });

                    return resolve(device);
                });      
        });
    }
}

module.exports = Insert;