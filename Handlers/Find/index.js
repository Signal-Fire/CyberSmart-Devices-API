/* jshint esversion: 6 */
var Device = require('../../Models/Device');

class Find {
    constructor() {

    }

    FindAll() {
        return new Promise(function(resolve, reject) {
            Device.find({ }, function(err, devices) {
                if (err || devices === null)
                    return reject("Unable to find any devices");

                return resolve(devices);
            });
        });
    }

    FindById(id) {
        return new Promise(function(resolve, reject) {

        });
    }

    FindByLocation(location) {
        return new Promise(function(resolve, reject) {

        });
    }
}

module.exports = Find;