const dealModel = require("../models/deal.model");

const dealRouter = require("express").Router();

dealRouter.get("/get-deals",async (req,res,next) => {
    let dealType = req.query.dealType;
    if(!dealType || dealType !== ''){
        let deals = await dealModel.find({},{_id:0}).limit(18)
        res.json(deals)
    }else{

    }
})


module.exports = dealRouter;