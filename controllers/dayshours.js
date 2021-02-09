const DaysHours = require('../models/DaysHours');

const DaysHoursController = {
    save: async dayshours => {
        return await new DaysHours({
            day_of_week: dayshours.day_of_week,
            hour_periods: dayshours.hour_periods
        }).save();
    },
    findById: async _id => {
        return await DaysHours.findOne(_id).exec();
    },
    find: async criteria => {
        return await DaysHours.find(criteria).exec();
    },
    findOne: async criteria => {
        return await DaysHours.findOne(criteria).exec();
    }
}

exports.DaysHoursController = DaysHoursController;