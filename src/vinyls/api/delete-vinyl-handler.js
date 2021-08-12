const responseCodes = require('../../http/response-codes');
const vinyls = require('../../data/vinyls');

function deleteVinylById(req, res) {
    const vinylID = +req.params.id;
    let i = 0;
    for(i; i < vinyls.length; i++) {
        if(vinylID === vinyls[i].id) {
            break;
        }
    }
    vinyls.splice(i, 1);
    res.sendStatus(responseCodes.noContent);
}

module.exports = deleteVinylById;
