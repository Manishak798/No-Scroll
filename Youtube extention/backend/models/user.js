const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    chromeId: String,
    topics: [String],
});

module.exports = mongoose.model('User', userSchema);
