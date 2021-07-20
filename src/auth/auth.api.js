const User = require('./user.model');
const userService = require('./user.service');
const responseCodes = require('../http/response-codes');
const bcrypt = require('bcrypt');

const hashRounds = 12;

function createUser(req, res) {
    const user = new User(req.body);

    bcrypt.hash(user.password, hashRounds, (err, hash) => {
        if(err) {
            res.sendStatus(responseCodes.internalServerError);
            return;
        }
        user.password = hash;
        userService.save(user).then(() => {
            res.sendStatus(responseCodes.created);
        }).catch(error => {
            const errorMessage = `Failed to save user: ${error}`;
            console.error(errorMessage);
            res.status(responseCodes.badRequest).send(`Failed to save user: ${error}`);
        });
    });
}

module.exports = createUser;
