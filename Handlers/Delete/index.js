var Device = require('../../Models/Device'),
    User = new(require('../User'))(),
    Logger = new(require('../Logger'))();

module.exports = class Delete {
    constructor() {

    }

    Device(authorization, id) {
        return new Promise(function(resolve, reject) {
            User.ValidateUser(authorization).then(user => {
                Device.findByIdAndUpdate(id, { active: false }, function(err, result) {
                    if (err || result === null)
                        return reject("Unable to find or update Device " + err);

                        Logger.CreateWithID(id, "DELETED", user.id);

                        return resolve(result);
                });
            }).catch(error => {
                return reject(error);
            });
        });
    }
}
