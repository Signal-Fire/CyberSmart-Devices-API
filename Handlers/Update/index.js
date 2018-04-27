var Device = require('../../Models/Device'),
    config = require('../../Configuration'),
    axios = require('axios');

class Update {
    constructor() {

    }

    UpdateState(device) {
        return new Promise(function(resolve, reject) {
            Device.findByIdAndUpdate(device.id, { state : device.state }, function(err, result) {
                if (err || result === null)
                    return reject(err);
                
                result.state = device.state;

                axios({
                    method: 'POST',
                    url : config["state-url"] + '/update/state',
                    data : {
                        address : result.address,
                        state : device.state
                    }
                }).then(res => {
                    if (res.status !== 200)
                        return reject("State not updated, issue posting");
                    
                    return resolve(result);    
                }).catch(err => {
                    return reject(err);
                });   
            });
            return reject(false)
        });
    }
}

module.exports = Update;