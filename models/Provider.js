const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    contacts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contact'
        }
    ],
    opening_days_hours: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DaysHours',
            required: true
        }
    ],
    services: String,
    is_auto_assignable: {
        type: Boolean,
        required: true
    },
    rating: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating',
        required: true
    }
});

module.exports = mongoose.model('Provider', providerSchema);
