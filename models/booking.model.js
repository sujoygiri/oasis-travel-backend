const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'Users' },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    destination: String,
    totalTraveler: String,
    planningMode: String
});

const bookingModel = model('Booking', bookingSchema, 'bookings');

module.exports = bookingModel;