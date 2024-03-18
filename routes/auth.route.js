const authRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, matchedData, validationResult } = require("express-validator");

const userModel = require("../models/user.model");

const saltRounds = 10;
const expireTime = 2 * 24 * 60 * 60 * 1000;
const jwtSecret = process.env.JWT_SECRET;

const createUsernameChain = () => body('username').trim().notEmpty().escape().isAlphanumeric();
const createEmailChain = () => body('email').trim().notEmpty().escape().isEmail();
const createPasswordChain = () => body('password').trim().notEmpty().escape().isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 });

authRouter.post("/signup", createUsernameChain(), createEmailChain(), createPasswordChain(), (req, res, next) => {
    const validResult = validationResult(req);
    if (validResult.isEmpty()) {
        let { username, email, password } = matchedData(req);
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                password = hash;
                try {
                    await userModel.create({ username, email, password });
                    const jwtToken = jwt.sign({ username, email }, jwtSecret, { expiresIn: expireTime });
                    res.cookie('_token', jwtToken, { maxAge: expireTime, httpOnly: true, sameSite: "strict", priority: "high" });
                    res.json({ success: true, message: 'sign up successful!' });
                } catch (error) {
                    next(error);
                }
            });
        });
    } else {
        let error = validResult.array();
        next(error);
    }
});

authRouter.post("/signin", createEmailChain(), createPasswordChain(), async (req, res, next) => {
    const validResult = validationResult(req);
    if (validResult.isEmpty()) {
        let { email, password } = matchedData(req);
        try {
            let userData = await userModel.findOne({ email });
            if (userData) {
                let userName = userData.username;
                let userEmail = userData.email;
                let userPasswordHash = userData.password;
                bcrypt.compare(password, userPasswordHash, (err, result) => {
                    if (result) {
                        const jwtToken = jwt.sign({ userName, userEmail }, jwtSecret, { expiresIn: expireTime });
                        res.cookie('_token', jwtToken, { maxAge: expireTime, httpOnly: true, sameSite: "strict", priority: "high" });
                        res.json({ success: true, message: 'sign in successful!' });
                    } else {
                        let mismatchPasswordError = new Error("Wrong password");
                        mismatchPasswordError.statusCode = 400;
                        throw mismatchPasswordError;
                    }
                });
            } else {
                let error = new Error("User not found");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            next(error);
        }
    } else {
        let error = validResult.array();
        next(error);
    }
});

authRouter.get("/verify", (req, res, next) => {
    const cookie = req.headers?.cookie;
    let jwtTokenFromClient = cookie && cookie.split("_token=")[1];
    if (jwtTokenFromClient) {
        jwt.verify(jwtTokenFromClient, jwtSecret, (err, decodeData) => {
            if (!err) {
                if(decodeData.userName && decodeData.userEmail){
                    res.cookie('_token', jwtTokenFromClient, { maxAge: expireTime, httpOnly: true, sameSite: "strict", priority: "high" });
                    res.json({ success: true, message: "user verification successful",userName: decodeData.userName, userEmail: decodeData.userEmail});
                }else{
                    res.cookie('_token', jwtTokenFromClient, { maxAge: expireTime, httpOnly: true, sameSite: "strict" });
                    res.json({ success: false, message: "user verification failed!"});
                }
            } else {
                next(err);
            }
        });
    } else {
        let error = new Error("token not found!");
        error.statusCode = 400;
        next(error);
    }
});

authRouter.get("/logout",(req,res,next) => {
    const jwtToken = jwt.sign('',jwtSecret);
    res.cookie('_token',jwtToken,{ maxAge: expireTime, httpOnly: true, sameSite: "strict" });
    res.json({success:true,message:"logout successful!"})
})


module.exports = authRouter;