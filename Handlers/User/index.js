var request = require('request'),
    config = require('../../Configuration');

module.exports = class User {
    constructor() {

    }

    ValidateUser(authorization) {
        return new Promise(function(resolve, reject) {
            request.get({
                url : config.users-api + '/find/details',
                headers : {
                    'Authorization' : authorization
                }
            }).on('response', response => {
                console.log(response);
                return resolve(response);
            }).on('error', error => {
                return reject(error);
            });
        });
    }
}