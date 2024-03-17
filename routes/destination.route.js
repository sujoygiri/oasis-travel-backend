const destinationRouter = require("express").Router();

const destinationModel = require("../models/destination.model");
const destinationDetailModel = require("../models/destination-detail.model");

// {name:{$regex:/.*.*/gi},routePath:{$regex:/.*Los.*/gi}}
// let regEx = new RegExp(/.*('s').*/gi)

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
    if(destinationDetail[0]){
        res.json(destinationDetail[0]);
    }else{
        res.status(400).json({success:false,message:'nothing found!'})
    }
});

module.exports = destinationRouter;