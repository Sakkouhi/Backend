const mongoose = require('mongoose');

const dayOfTheWeekSchema = new mongoose.Schema({
    days: {
        type: String,
        enum: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],
        default: 'MONDAY'
    }
});

exports = mongoose.model('DayOfTheWeek', dayOfTheWeekSchema);
