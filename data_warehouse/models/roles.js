const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, default: 'user'}
});

module.exports = mongoose.model('Roles', schema);