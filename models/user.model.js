const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    username:String,
    email:String,
    password:String,
});

const userModel = mongoose.model('Users',userSchema,'users');
module.exports = userModel;