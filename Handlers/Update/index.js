var Device = require('../../Models/Device'),
    config = require('../../Configuration'),
    axios = require('axios');

class Update {
    constructor() {

    }

    UpdateState(device) {
        return new Promise(function(resolve, reject) {
            Device.findByIdAndUpdate(device.deviceId, { state : device.state}, function(err, result) {                
                if (err || result === null)
                    return reject(err);

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
    
                    return resolve("State updated");    
                }).catch(err => {
                    return reject(err);
                }); 

                return resolve(result);
            }) 
                 
        });
    }
}

module.exports = Update;