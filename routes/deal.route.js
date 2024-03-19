const dealRouter = require("express").Router();

dealRouter.get("/get-deals",(req,res,next) => {
    let query = req.query;
    res.json(query);
})


module.exports = dealRouter;