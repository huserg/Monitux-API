const stringify = require('json-stringify-safe');

exports.authorizationController = {

    checkApiKey: function(clientApiKey) {
        return process.env.API_KEY === clientApiKey;
    }
};