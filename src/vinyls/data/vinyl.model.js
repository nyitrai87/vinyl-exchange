const mongoose = require('mongoose');
const vinylSchema = require('./vinyl.schema');

module.exports = mongoose.model('Vinyl', vinylSchema);
