const {Schema,model} = require("mongoose");

const destinationSchema = new Schema({
    name:String,
    imageUrl:String,
    routePath:String,
    isTropical:Boolean
})

const destinationModel = model('Destination',destinationSchema,'destination');
module.exports = destinationModel;