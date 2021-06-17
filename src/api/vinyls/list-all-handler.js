const vinyls = require('../../data/vinyls');

function listAllVinyls(req, res) {
    res.json(vinyls);
}

module.exports = listAllVinyls;
