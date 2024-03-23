const { Schema, model } = require("mongoose");

const vacationTypeDetailSchema = new Schema({
    title: String,
    text: String,
    imageUrl: String,
    detailTitle: String,
    detailText: String,
    detailImageUrl: String,
    urlPath: String
});

const vacationTypeDetailModel = model("VacationTypeDetail",vacationTypeDetailSchema,"vacation-type-details");

module.exports = vacationTypeDetailModel;