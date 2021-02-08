const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street_address: {
        type: String,
        maxLength: 1024,
        required: true
    },
    subdivision: {
        type: String,
        maxLength: 50
    },
    postal_code: {
        type: String,
        maxLength: 20,
        required: true
    },
    locality: {
        type: String,
        maxLength: 100,
        required: true
    },
    country: {
        type: String,
        maxLength: 2,
        minlength: 2,
        required: true
    }
});

module.exports = mongoose.model('Address', addressSchema);
