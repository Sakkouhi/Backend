const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    type: {
        type: String,
        maxLength: 100,
        required: true
    },
    address: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    email: {
        type: String,
        required: true
    },
    mobile_phone_number: {
        type: String,
        maxLength: 20,
        required: true
    }
});

module.exports = mongoose.model('Contact', contactSchema);
