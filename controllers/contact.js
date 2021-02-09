const Contact = require('../models/Contact');
const {AddressController} = require('./addresses');

const ContactController = {
    save: async contact => {
        const address = await AddressController.find(contact.address);
        if (!address) {
            const address = await AddressController.save(contact.address);
        }
        contact.address = address._id;
        return await new Contact({
            type: contact.type,
            address: contact.address,
            email: contact.email,
            mobile_phone_number: contact.mobile_phone_number
        }).save();
    },
    findById: async _id => {
        return await Contact
            .findOne(_id)
            .populate('address')
            .exec();
    },
    find: async criteria => {
        if (criteria && criteria.address)
            delete criteria.address;
        return await Contact
            .find(criteria)
            .exec();
    },
    findOne: async criteria => {
        if (criteria && criteria.address)
            delete criteria.address;
        return await Contact
            .findOne(criteria)
            .exec();
    }
}

exports.ContactController = ContactController;