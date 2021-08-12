const mongoose = require('mongoose');

const vinylSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true }
});

module.exports = vinylSchema;
