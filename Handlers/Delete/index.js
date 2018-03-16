/* jshint esversion: 6*/
var Device = require('../../Models/Device');

module.exports = class Delete {
    constructor() {

    }

    Device(id) {
        return new Promise(function(resolve, reject) {
            Device.findByIdAndUpdate(id, { active: false }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to find or update Device");

                return resolve(result);
            });
        });
    }
}
