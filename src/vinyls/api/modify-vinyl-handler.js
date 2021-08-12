const responseCodes = require('../../http/response-codes');
const vinyls = require('../../data/vinyls');

function modifyVinylById(req, res) {
    const vinylID = +req.params.id;
    let i = 0;
    for(i; i < vinyls.length; i++) {
        if(vinylID === vinyls[i].id) {
            break;
        }
    }
    vinyls[i] = req.body;
    res.sendStatus(responseCodes.ok);
}

module.exports = modifyVinylById;
