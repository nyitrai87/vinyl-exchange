const Vinyl = require('../data/vinyl.model');
const responseCodes = require('../../http/response-codes');

function listAllVinyls(req, res) {
    Vinyl.find({}, (err, vinyls) => {
        if(err) {
            res.sendStatus(responseCodes.internalServerError);
            return;
        }
        res.json(vinyls);
    });
}

module.exports = listAllVinyls;
