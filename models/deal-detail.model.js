const { Schema, model } = require("mongoose");

const dealDetailSchema = new Schema({
    valid: String,
    status: String,
    title: String,
    offer_name: String,
    includes: {
        air: String,
        hotel: String,
        rental_car: String,
        sightseeing: String,
        transfer: String,
        all_inclusive: String,
        adults_only: String
    },
    featured: String,
    exclusive: String,
    mytime: String,
    get_carried_away: String,
    offer_type: String,
    offer_categories: [{
        type: {
            id: String,
            name: String
        }
    }],
    image: {
        name: String,
        alt: String,
        file_path: String,
        photo_caption: String,
        photo_caption_color: String
    },
    offer_description: String,
    offer_valid: {
        start: String,
        end: String,
        date_range: String
    },
    offer_publish: {
        publish: String,
        expire: String
    },
    trip_dates: {
        depart: String,
        return: String,
        los: String,
        los_units: String,
        date_range: String
    },
    destinations: [
        {
            term_id: String,
            destination_name: String,
            parent: String,
            destination_code: String,
            state: String,
            country: String,
            world_region: String,
            hide_fee: String
        }
    ],
    hotels: [
        {
            hotel_id: String,
            name: String,
            brand: {
                id: String,
                name: String
            },
            description: String,
            star_rating: String,
            address: {
                street_number: String,
                street_name: String,
                city: String,
                state: String,
                postal_code: String,
                country: String,
                longitude: String,
                latitude: String
            },
            dining_entertainment:[{type:String}],
            disabled_facilities:[{type:String}],
            family_facilities:[{type:String}],
            features:[{type:String}],
            liesure_recreation:[{type:String}],
            nearby:[{type:String}],
            checkin: String,
            checkout: String,
            rooms: String,
            property_specialties: [{ type: String }],
            disclaimer: String,
            mytime: {
                short: String,
                long: String
            }
        }
    ],
    top_choice: String,
    price: {
        priced_on: String,
        base_price: String,
        transfer_price: String,
        transfer_type: String,
        sightseeing_price: String,
        lowest_priced_city: String,
        total_price: String,
        advertised_price: String
    },
    departure_cities: [
        {
            city_name: String,
            airfare_price: String,
            total_price: String,
            advertised_price: String,
            outbound_carrier: String,
            inbound_carrier: String,
            outbound_fare_class: String,
            inbound_fare_class: String,
            outbound_routing: String,
            inbound_routing: String
        },
        {
            city_name: String,
            airfare_price: String,
            total_price: String,
            advertised_price: String,
            outbound_carrier: String,
            inbound_carrier: String,
            outbound_fare_class: String,
            inbound_fare_class: String,
            outbound_routing: String,
            inbound_routing: String
        },
        {
            city_name: String,
            airfare_price: String,
            total_price: String,
            advertised_price: String,
            outbound_carrier: String,
            inbound_carrier: String,
            outbound_fare_class: String,
            inbound_fare_class: String,
            outbound_routing: String,
            inbound_routing: String
        },
        {
            city_name: String,
            airfare_price: String,
            total_price: String,
            advertised_price: String,
            outbound_carrier: String,
            inbound_carrier: String,
            outbound_fare_class: String,
            inbound_fare_class: String,
            outbound_routing: String,
            inbound_routing: String
        },
        {
            city_name: String,
            airfare_price: String,
            total_price: String,
            advertised_price: String,
            outbound_carrier: String,
            inbound_carrier: String,
            outbound_fare_class: String,
            inbound_fare_class: String,
            outbound_routing: String,
            inbound_routing: String
        }
    ],
    special_notes: String,
    deal_id: String
});


const dealDetailModel = model("DealDetail",dealDetailSchema,"deal-details");

module.exports = dealDetailModel;