const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
});

const userModel = model('Users', userSchema, 'users');
module.exports = userModel;