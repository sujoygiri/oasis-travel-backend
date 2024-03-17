const destinationRouter = require("express").Router();

const destinationModel = require("../models/destination.model");

// {name:{$regex:/.*.*/gi},routePath:{$regex:/.*Los.*/gi}}
// let regEx = new RegExp(/.*('s').*/gi)

destinationRouter.get("/search-destination", async (req, res, next) => {
    let { place_name } = req.query;
    let regExp = new RegExp(`.*${place_name}.*`, "gi");
    let foundDestinations = await destinationModel.find({ name: { $regex: regExp } }).limit(5);
    res.json(foundDestinations);
});

destinationRouter.get("/all-destination",async (req,res,next) => {
    let allDestination = await destinationModel.find({},{_id:0})
    res.json(allDestination);
})

destinationRouter.get("/destination-detail",async (req,res,next) => {
    const {region,country,place} = req.query
    if(region && country && place){
        // let destinationDetail = await 
    }
    else if(region && country){

    }
    else if(region){

    }
})

module.exports = destinationRouter;