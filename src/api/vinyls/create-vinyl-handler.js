const vinyls = require('../../data/vinyls');

let counter = vinyls.length;

function createNewVinyl(req, res) {
    const vinyl = req.body;
    vinyl.id = counter++;
    vinyls.push(vinyl);
    res.json(vinyl);
}

module.exports = createNewVinyl;
