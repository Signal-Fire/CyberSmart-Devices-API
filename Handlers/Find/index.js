/* jshint esversion: 6 */
var Device = require('../../Models/Device');

class Find {
    constructor() {

    }

    FindAll() {
        return new Promise(function(resolve, reject) {
            Device.find({ }, function(err, devices) {
                if (err || devices === null)
                    return reject("Unable to find any Devices");

                return resolve(devices);
            });
        });
    }

    FindById(id) {
        return new Promise(function(resolve, reject) {
            Device.findById(id, function(err, device) {
                if (err || device === null)
                    return reject("Unable to find Device with ID: " + id);

                return resolve(device);
            });
        });
    }

    FindByLocation(location) {
        return new Promise(function(resolve, reject) {
            Device.find({ location: location }, function(err, device) {
                if (err || device === null)
                    return reject("Unable to find Device in: " + location);

                return resolve(device);
            });
        });
    }
}

module.exports = Find;