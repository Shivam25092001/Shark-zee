// const ErrorHandler = require('../utils/errorhandler')

module.exports = (err,req,res,next)=>{
    err.statuscode = err.statuscode||500
    err.message = err.message||"Inter/nal Server Error"


    res.status(err.statuscode).json({
        success:false,
        message:err.message
    })
}