const Address = require('../models/Address');

const AddressController = {
    save: async address => {
        return await new Address({
            street_address: address.street_address,
            subdivision: address.subdivision,
            postal_code: address.postal_code,
            locality: address.locality,
            country: address.country
        }).save();
    },
    findById: async _id => {
        return await Address.findById(_id).exec();
    },
    findOne: async criteria => {
        return await Address.findOne(criteria).exec();
    },
    findOneAndUpdate: async (criteria, address) => {
        return await Address.findOneAndUpdate(criteria, address).exec();
    }
}

exports.AddressController = AddressController;
