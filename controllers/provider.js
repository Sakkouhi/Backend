const Provider = require('../models/Provider');

const {RatingController} = require("./ratings");
const {ContactController} = require('./contacts');
const {DaysHoursController} = require('./dayshours');

const ProviderController = {
    save: async provider => {
        let contacts = [];
        for (const contact of provider.contacts) {
            let c = await ContactController.findOne(contact);
            if (!c)
                c = await ContactController.save(contact);
            contacts.push(c);
        }
        provider.contacts = contacts.map((contact => contact._id));

        let opening_days_hours = [];
        for (const opening_day_hour of provider.opening_days_hours) {
            let odh = await DaysHoursController.findOne(opening_day_hour);
            if (!odh)
                odh = await DaysHoursController.save(opening_day_hour);
            opening_days_hours.push(odh);
        }
        provider.opening_days_hours = opening_days_hours.map((opening_day_hour => opening_day_hour._id));

        let rating = await RatingController.findOne(provider.rating);
        if (!rating) {
            rating = await RatingController.save(provider.rating);
        }
        provider.rating = rating._id;

        return await new Provider({
            contacts: provider.contacts,
            opening_days_hours: provider.opening_days_hours,
            description: provider.description,
            services: provider.services,
            is_auto_assignable: provider.is_auto_assignable,
            rating: provider.rating
        }).save();
    },
    findById: async _id => {
        return await Provider
            .findById(_id)
            .populate('contacts')
            .populate('opening_days_hours')
            .populate('rating')
            .exec();
    },
    find: async criteria => {
        return await Provider
            .find(criteria)
            .populate('contacts')
            .populate('opening_days_hours')
            .populate('rating')
            .exec();
    },
    findOneAndUpdate: async (criteria, provider) => {
        let contacts = [];
        for (const contact of provider.contacts) {
            let c = await ContactController.findOne(contact);
            if (!c)
                c = await ContactController.save(contact);
            contacts.push(c);
        }
        provider.contacts = contacts.map((contact => contact._id));

        let opening_days_hours = [];
        for (const opening_day_hour of provider.opening_days_hours) {
            let odh = await DaysHoursController.findOne(opening_day_hour);
            if (!odh)
                odh = await DaysHoursController.save(opening_day_hour);
            opening_days_hours.push(odh);
        }
        provider.opening_days_hours = opening_days_hours.map((opening_day_hour => opening_day_hour._id));

        let rating = await RatingController.findOne(provider.rating);
        if (!rating) {
            rating = await RatingController.save(provider.rating);
        }
        provider.rating = rating._id;

        return await Provider
            .findOneAndUpdate(criteria, provider)
            .populate('contacts')
            .populate('opening_days_hours')
            .populate('rating')
            .exec();
    },
    deleteOne: async criteria => {
        return await Provider
            .deleteOne(criteria)
            .exec();
    }
}

exports.ProviderController = ProviderController;
