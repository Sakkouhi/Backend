const DayOfTheWeek = require('../models/DayOfTheWeek');

const DayOfTheWeekController = {
    save: async dayshours => {
        return await new DayOfTheWeek({

        }).save();
    },
    findById: async _id => {
        return await DayOfTheWeek.findOne(_id).exec();
    },
    find: async criteria => {
        return await DayOfTheWeek.find(criteria).exec();
    }
}

exports.DayOfTheWeekController = DayOfTheWeekController;