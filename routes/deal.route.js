const dealModel = require("../models/deal.model");
const getTransformedVacationType = require("../utils/dealTypeTransformer.util");

const dealRouter = require("express").Router();

dealRouter.get("/get-deals", async (req, res, next) => {
    let dealType = req.query.type;
    if (dealType === 'Vacation') {
        let deals = await dealModel.find({}, { _id: 0 }).limit(18);
        res.json(deals);
    } else {
        let filterObj = {};
        let transformedDealType = 'includes.' + getTransformedVacationType(dealType);
        filterObj[transformedDealType] = '1';
        let deals = await dealModel.find(filterObj, { _id: 0 }).limit(30);
        res.json(deals);
    }
});


module.exports = dealRouter;