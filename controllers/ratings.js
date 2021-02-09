const Rating = require('../models/Rating');

const RatingController = {
    save: async rating => {
        return await new Rating({
            ranking: rating.ranking
        }).save();
    },
    findById: async _id => {
        return await Rating.findOne(_id).exec();
    },
    find: async criteria => {
        return await Rating.find(criteria).exec();
    },
    findOne: async criteria => {
        return await Rating.findOne(criteria).exec();
    }
}

exports.RatingController = RatingController;