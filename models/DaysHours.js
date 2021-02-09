const mongoose = require('mongoose');

const daysHoursSchema = new mongoose.Schema({
    day_of_week: {
        type: String,
        enum: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],
        default: 'MONDAY'
    },
    hour_periods: [{
        type: String,
        required: true,
        maxlength: 13
    }]
});

module.exports = mongoose.model('DaysHours', daysHoursSchema);
