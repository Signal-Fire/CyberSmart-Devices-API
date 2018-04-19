var Device = require('../../Models/Device'),
    Logger = require('../Logger');

module.exports = class Delete {
    constructor() {

    }

    Device(authorization, id) {
        return new Promise(function(resolve, reject) {
            Device.findByIdAndUpdate(id, { active: false }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to find or update Device " + err);

                    Logger.CreateLog({
                        message : result.name + ' was deleted',
                        created_by_user : result.created_by_user
                    });
                    
                    return resolve(result);
            });
        });
    }
}
