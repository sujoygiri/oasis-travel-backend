const dealDetailModel = require("../models/deal-detail.model");
const dealModel = require("../models/deal.model");
const vacationTypeDetailModel = require("../models/vacation-type.model");

const dealRouter = require("express").Router();

dealRouter.get("/get-deals", async (req, res, next) => {
    let {type, limit} = req.query;
    if (type === 'Vacation') {
        let deals = await dealModel.find({}, { _id: 0 }).limit(limit);
        res.json(deals);
    } else {
        let filterObj = {};
        let transformedDealType = 'includes.' + type;
        filterObj[transformedDealType] = '1';
        let deals = await dealModel.find(filterObj, { _id: 0 }).limit(limit);
        res.json(deals);
    }
});

dealRouter.get("/deal-detail", async (req, res, next) => {
    let dealCode = req.query.code;
    if (dealCode) {
        let dealDetail = await dealDetailModel.find({ deal_id: dealCode }, { _id: 0 });
        if (dealDetail.length) {
            res.json(dealDetail[0]);
        } else {
            res.status(400).json({ success: false, message: "nothing found!" });
        }
    } else {
        res.status(400).json({ success: false, message: "nothing found!" });
    }
});

dealRouter.get("/vacation-type-detail", async (req, res, next) => {
    let vacationType = req.query.vacationType;
    if (vacationType) {
        let vacationTypeDetail = await vacationTypeDetailModel.find({ urlPath: vacationType }, { _id: 0 });
        if (vacationTypeDetail.length) {
            res.json(vacationTypeDetail[0]);
        } else {
            res.status(400).json({ success: false, message: "nothing found!" });
        }
    } else {
        res.status(400).json({ success: false, message: "nothing found!" });
    }
});


module.exports = dealRouter;