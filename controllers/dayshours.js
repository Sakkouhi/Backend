const DaysHours = require('../models/DaysHours');

const DaysHoursController = {
    save: async dayshours => {
        let dh = await DaysHoursController.findOne(dayshours);
        if (!dh)
            return await new DaysHours({
                day_of_week: dayshours.day_of_week,
                hour_periods: dayshours.hour_periods
            }).save();
        else
            return dh;
    },
    findById: async _id => {
        return await DaysHours.findOne(_id).exec();
    },
    findOne: async criteria => {
        return await DaysHours.findOne(criteria).exec();
    },
    findOneAndUpdate: async (criteria, opening_days_hours) => {
        return await DaysHours.findOneAndUpdate(criteria, opening_days_hours).exec();
    }
}

exports.DaysHoursController = DaysHoursController;
