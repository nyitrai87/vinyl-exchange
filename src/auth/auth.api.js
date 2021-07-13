const User = require('./user.model');
const userService = require('./user.service');
const responseCodes = require('../http/response-codes');

function createUser(req, res) {
    const user = new User(req.body);

    userService.save(user).then(() => {
        res.sendStatus(responseCodes.created);
    }).catch(error => {
        const errorMessage = `Failed to save user: ${error}`;
        console.error(errorMessage);
        res.status(responseCodes.badRequest).send(`Failed to save user: ${error}`);
    });
}

module.exports = createUser;
