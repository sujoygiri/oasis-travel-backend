const errorHandler = (err,req,res,next) => {
    res.json({errorHandel:err})
}

module.exports = errorHandler;