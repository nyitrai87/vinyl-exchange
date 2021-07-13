const mongoose = require('mongoose');

const connection = mongoose.connection;

function connect(connectionString) {
    mongoose.connect(connectionString, {
        useNewUrlParser: true, useUnifiedTopology: true
    });
}

function onConnectionError(errorHandler) {
    connection.on('error', errorHandler);
}

function onSuccessfulConnect(successHandler) {
    connection.once('connected', successHandler);
}

module.exports = {
    connect: connect,
    onSuccessfulConnect: onSuccessfulConnect,
    onConnectionError: onConnectionError
};
