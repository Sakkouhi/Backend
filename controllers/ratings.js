const Rating = require('../models/Rating');

const RatingController = {
    save: async rating => {
        let r = await RatingController.findOne(rating);
        if (!r)
            return await new Rating({
                ranking: rating.ranking
            }).save();
        else
            return r;
    },
    findById: async _id => {
        return await Rating.findOne(_id).exec();
    },
    findOne: async criteria => {
        return await Rating.findOne(criteria).exec();
    },
    findOneAndUpdate: async (criteria, rating) => {
        return await Rating.findOneAndUpdate(criteria, rating).exec();
    }
}

exports.RatingController = RatingController;
