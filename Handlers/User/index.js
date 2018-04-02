var request = require('request'),
    config = require('../../Configuration');

module.exports = class User {
    constructor() {

    }

    ValidateUser(authorization) {       
        return new Promise(function(resolve, reject) {
            if (authorization.split(' ').length < 2)
                return reject("Invalid headers");

            var web_gubbins = {
                url: config["users-api"] + '/find/details',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : authorization
                }
            };

            function callback(error, response, body) {
                if (!error && !response.statusCode == 200) 
                    return reject("Unable to find user");

                try {
                    var info = JSON.parse(body);
                    return resolve(info); 
                } catch (ex) {
                    return reject("Issue during authentication");
                }
            }
            
            request(web_gubbins, callback);
        });
    }
}