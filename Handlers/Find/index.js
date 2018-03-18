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

    FindConnected() {
        return new Promise(function(resolve, reject) {
            var sys = require('util');
            var exec = require('child_process').exec;
            var child = exec('arp -ani wlan0', function(err, stdout, stderr) {
                if (stderr) 
                    return reject("Unable to find any devices");

                var deviceList = stdout.split("\n")
                .filter(x => !x.includes("incomplete") && x.length > 5)
                .map(line => {
                    var splitLine = line.split(" ");
                    var deviceInfo = {};
                    deviceInfo.ip = splitLine[1].replace('/[^()]', "");
                    deviceInfo.mac = splitLine[3];
                    return deviceInfo;
                });

                return resolve(deviceList);  
            });
        });
    }
 }

module.exports = Find;