const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: String,
    dateOfBirth: Date,
    joinReason: String
});

module.exports = userSchema;
