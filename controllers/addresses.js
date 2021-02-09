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
        return await Address.findOne(_id).exec();
    },
    find: async criteria => {
        return await Address.find(criteria).exec();
    }
}

exports.AddressController = AddressController;