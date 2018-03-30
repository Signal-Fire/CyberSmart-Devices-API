var request = require('request');

module.exports = class Logger {
    constructor() {

    }

    CreateWithID(id, message, createdBy) {
        if (!message || !createdBy || !id)
            return true;

        request.post({url:config["logger-url"] + '/create/' + id, 
            body: JSON.stringify({
                message : message,
                created_by_user : createdBy
            }),
            headers : {
                'Content-Type' : 'application/json'
            }}, 
            function optionalCallback(err, httpResponse, body) {
                if (err) 
                    return false;
                return true;
            });
    }
}