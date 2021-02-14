const {ContactController} = require("../controllers/contacts");
const {AddressController} = require("../controllers/addresses");
const {DaysHoursController} = require("../controllers/dayshours");
const {RatingController} = require("../controllers/ratings");
const {ProviderController} = require("../controllers/providers");

const ProviderService = {
    save: async provider => {
        let contacts = [];
        for (const contact of provider.contacts) {
            let address = await AddressController.findOne(contact.address);
            if (!address)
                address = await AddressController.save(contact.address);
            contact.address = address._id;
            let c = await ContactController.findOne(contact);
            if (!c)
                c = await ContactController.save(contact);
            contacts.push(c);
        }
        provider.contacts = contacts.map(contact => contact._id);

        let opening_days_hours = [];
        for (const opening_day_hour of provider.opening_days_hours) {
            let odh = await DaysHoursController.findOne(opening_day_hour);
            if (!odh)
                odh = await DaysHoursController.save(opening_day_hour);
            opening_days_hours.push(odh);
        }
        provider.opening_days_hours = opening_days_hours.map(odh => odh._id);

        let rating = await RatingController.findOne(provider.rating);
        if (!rating)
            rating = await RatingController.save(provider.rating);
        provider.rating = rating._id;

        const p = await ProviderController.findOne(provider);
        if (!p)
            return await ProviderController.save(provider);
        else
            return p;
    },
    findById: async _id => {
        return await ProviderController.findById(_id);
    },
    deleteOne: async _id => {
        return await ProviderController.deleteOne(_id);
    },
    findOneAndUpdate: async (criteria, provider) => {
        const p = await ProviderController.findById(criteria);

        for (const contact of provider.contacts) {
            await AddressController.findOneAndUpdate({_id: p.contacts[0].address._id}, contact.address)
            await ContactController.findOneAndUpdate({_id: p.contacts[0]._id}, contact);
        }

        for (const opening_day_hour of provider.opening_days_hours) {
            await DaysHoursController.findOneAndUpdate({_id: p.opening_days_hours[0]._id}, opening_day_hour);
        }

        await RatingController.findOneAndUpdate({_id: p.rating._id}, provider.rating);

        await ProviderController.findOneAndUpdate(criteria, provider);
        return await ProviderController.findById(criteria);
    }
}

exports.ProviderService = ProviderService;
