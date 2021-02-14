const Contact = require('../models/Contact');

const ContactController = {
    save: async contact => {
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
    findOne: async contact => {
        return await Contact
            .findOne({
                type: contact.type,
                email: contact.email,
                mobile_phone_number: contact.mobile_phone_number
            })
            .exec();
    },
    findOneAndUpdate: async (criteria, contact) => {
        return await Contact
            .findOneAndUpdate(criteria,{
                    type: contact.type,
                    email: contact.email,
                    mobile_phone_number: contact.mobile_phone_number
                })
            .exec();
    }
}

exports.ContactController = ContactController;
