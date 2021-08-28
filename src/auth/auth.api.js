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

function login(req, res) {
    const userReq = req.body;

    if(!userReq || !userReq.userName || !userReq.password) {
        res.sendStatus(responseCodes.unauthorized);
        return;
    }

    User.findOne({ userName: userReq.userName }, (err, user) => {
        if(err || !user) {
            res.sendStatus(responseCodes.unauthorized);
            return;
        }
        bcrypt.compare(userReq.password, user.password, (err, result) => {
            if(err || !result) {
                res.sendStatus(responseCodes.unauthorized);
                return;
            }
            req.session.userID = user._id;
            res.sendStatus(responseCodes.ok);
        });
    });
}

module.exports = { createUser: createUser, login: login };
