const errorHandler = (err,req,res,next) => {
    console.log(err.message);
    if(err.statusCode){
        res.status(err.statusCode).json({message:err.message})
    }
    res.status(404).json({message:err.message})
}

module.exports = errorHandler;