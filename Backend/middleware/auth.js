const catchAsync = require('../middleware/catchAsyncerrors')
const jwt = require("jsonwebtoken")
const startup = require("../models/StartUpModel")
const investor = require("../models/InvestorModel")
const ErrorHandler = require("../utils/errorhandler")



exports.isAuthencatedStartup =  catchAsync(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login to complete this request",401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.startup = await startup.findById(decoded.id)

    next()
})


exports.isAuthencatedInvestor = catchAsync(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login to complete this request",401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.investor = await investor.findById(decoded.id)

    next()
})