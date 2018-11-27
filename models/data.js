const mongoose = require('mongoose');

module.exports = mongoose.model('Data', {
    text: {
        type: String,
        required: true
    }
});
