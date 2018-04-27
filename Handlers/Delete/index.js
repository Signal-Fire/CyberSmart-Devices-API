var Device = require('../../Models/Device'),
    Logger = require('../Logger');

module.exports = new class Delete {
    constructor() {

    }

    Device(authorization, deleter, id) {    
        return new Promise(function(resolve, reject) {
            Device.findByIdAndUpdate(id, { active: false }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to find or update Device " + err);

                    result.active = false;

                    Logger.CreateLog({
                        message : result.name + ' was removed',
                        created_by_user : deleter,
                        type : "Device"
                    });

                    return resolve(result);
            });
        });
    }

    DeleteAll() {
        return new Promise(function(resolve, reject) {
            Device.remove({}, function(err, result) {
                if (err || result === null)
                    return reject("Unable to delete devices");

                    Logger.CreateLog({
                        message : "Deleted all devices",
                        created_by_user : "System",
                        type : "Device"
                    })

                return resolve(result);
            })
        })
    }
}
