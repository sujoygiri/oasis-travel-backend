const { Schema, model } = require("mongoose");

const dealSchema = new Schema({
    title: String,
    name: String,
    type: String,
    star_rating: String,
    image: String,
    destination: [
        {
            name: String,
            parent: String
        }
    ],
    advertsied_price: String,
    length_of_stay: String,
    los_units: String,
    includes: {
        air: String,
        hotel: String,
        rental_car: String,
        sightseeing: String,
        transfer: String,
        all_inclusive: String,
        adults_only: String,
        luxary: String,
        beach:String,
        casino:String,
        family:String,
        golf_and_spa:String,
        honeymoon:String,
        lastMinute:String
    },
    featured: String,
    hot_deal: String,
    exclusive: String,
    my_time: String,
    get_carried_away: String,
    code: String
});

const dealModel = model('Deal',dealSchema,'deals');

module.exports = dealModel;