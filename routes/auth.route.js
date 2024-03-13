const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

authRouter.post("/signin",(req,res,next) => {

})

module.exports = authRouter;