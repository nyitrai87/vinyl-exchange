const responseCodes = require('../../http/response-codes');
const vinyls = require('../../data/vinyls');

function getVinylById(req, res) {
    const vinylID = +req.params.id;
    for(let i = 0; i < vinyls.length; i++) {
        if (vinylID === vinyls[i].id) {
            res.json(vinyls[i]);
            return;
        }
    }
    res.sendStatus(responseCodes.notFound);
}

module.exports = getVinylById;
