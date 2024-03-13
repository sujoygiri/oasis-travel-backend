const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const userModel = require("../models/user.model")

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;


authRouter.post("/signin",(req,res,next) => {
    let token = jwt.sign({ foo: 'bar' }, jwtSecret);
    let {username,email,password} = req.body
    bcrypt.genSalt(saltRounds,(err,salt) => {
        bcrypt.hash(password,salt,async (err,hash) => {
            password = hash;
            let dbResponseUserData = await userModel.create({username,email,password});
            res.json({dbResponseUserData});
        })
    })
})

module.exports = authRouter;