const errorHandler = (err,req,res,next) => {
    console.log({fromErrorHandel:err});
    if(err.statusCode){
        res.status(err.statusCode).json({message:err.message})
    }else{
        res.status(404).json({message:err.message})
    }
}

module.exports = errorHandler;