const { Schema, model } = require("mongoose");

const destinationDetailSchema = new Schema({
    name: String,
    title: String,
    text: String,
    at_a_glance: {
        text: String,
        currency: String,
        popular_drink: String,
        tipping_custom: String,
        must_eat: String,
        power_up: String,
        language: String,
        getting_there: String,
        weather: String,
        best_time_to_visit: String,
        place_map_image_url: String
    },
    things_to_do: {
        content: String,
        things_image_url: String
    }
});

const destinationDetailModel = model('DestinationDetail', destinationDetailSchema, 'destination-details');
module.exports = destinationDetailModel;