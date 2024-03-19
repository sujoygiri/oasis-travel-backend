const jwt = require("jsonwebtoken");
const destinationRouter = require("express").Router();

const destinationModel = require("../models/destination.model");
const destinationDetailModel = require("../models/destination-detail.model");
const bookingModel = require("../models/booking.model");

const jwtSecret = process.env.JWT_SECRET;

destinationRouter.get("/search-destination", async (req, res, next) => {
    let { place_name } = req.query;
    let regExp = new RegExp(`.*${place_name}.*`, "gi");
    let foundDestinations = await destinationModel.find({ name: { $regex: regExp } }).limit(5);
    res.json(foundDestinations);
});

destinationRouter.get("/all-destination", async (req, res, next) => {
    let allDestination = await destinationModel.find({}, { _id: 0 });
    res.json(allDestination);
});

destinationRouter.get("/destination-detail", async (req, res, next) => {
    const { region, country, place } = req.query;
    let destinationDetail = null;
    if (region && country && place) {
        destinationDetail = await destinationDetailModel.find({ name: place }, { _id: 0 });
    }
    else if (region && country) {
        destinationDetail = await destinationDetailModel.find({ name: country }, { _id: 0 });
    }
    else if (region) {
        destinationDetail = await destinationDetailModel.find({ name: region }, { _id: 0 });
    }
    destinationDetail[0] ? res.json(destinationDetail[0]) : res.status(400).json({ success: false, message: 'nothing found!' });
});

destinationRouter.post("/booking", (req, res, next) => {
    const { firstName, lastName, email, phone, destination, totalTraveler, planningMode } = req.body;
    const cookie = req.headers?.cookie;
    const jwtTokenFromClient = cookie && cookie.split("_token=")[1];
    jwt.verify(jwtTokenFromClient, jwtSecret, async (err, decodeData) => {
        if (!err) {
            let userId = decodeData.userId;
            let bookingData = await bookingModel.create({ _user: userId, firstName, lastName, email, phone, destination, totalTraveler, planningMode });
            if (bookingData) {
                res.status(200).json({ success: true, message: "booking successful" });
            } else {
                res.status(400).json({ success: false, message: "booking failed" });
            }
        } else {
            next(err);
        }
    });
});

module.exports = destinationRouter;