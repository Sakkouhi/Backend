const Providers = require('../models/Provider');

const ProviderController = {
    save: async provider => {
        return await new Providers({
            contacts: provider.contacts,
            opening_days_hours: provider.opening_days_hours,
            description: provider.description,
            services: provider.services,
            is_auto_assignable: provider.is_auto_assignable,
            rating: provider.rating
        }).save();
    },
    findOne: async provider => {
        return await Providers
            .findOne({
                services: provider.services,
                is_auto_assignable: provider.is_auto_assignable
            })
            .exec();
    },
    findById: async _id => {
        return await Providers
            .findById(_id)
            .populate({path: 'contacts', populate: {path: 'address', model: 'Address'}})
            .populate('opening_days_hours')
            .populate('rating')
            .exec();
    },
    findOneAndUpdate: async (criteria, provider) => {
        return await Providers
            .findOneAndUpdate(criteria, {
                is_auto_assignable: provider.is_auto_assignable,
                services: provider.services
            })
            .populate('contacts')
            .populate('opening_days_hours')
            .populate('rating')
            .exec();
    },
    deleteOne: async criteria => {
        return await Providers
            .deleteOne(criteria)
            .exec();
    }
}

exports.ProviderController = ProviderController;
