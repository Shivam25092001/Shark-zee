const ErrorHandler = require('../utils/errorhandler')
const catchAsync = require('../middleware/catchAsyncerrors')
const investor = require('../models/InvestorModel')
const {sendTokenInvestor} = require('../utils/jwtToken')
const APIfeatures = require('../utils/apifeatures')


//Create a Investor

exports.createInvestor = catchAsync(async (req,res,next)=>{
    const newInvestor = await investor.create(req.body)
    sendTokenInvestor(newInvestor,201,res)
})

//Login a investor

exports.loginInvestor = catchAsync(async (req,res,next)=>{
    const {email,password} = req.body

    if(!email||!password)
    return next(new ErrorHandler("Please Input email and Password",400))

    const _investor = await investor.findOne({email}).select("+password")

    if(!_investor)
    return next(new ErrorHandler("Please Input a valid email or password",401))
    
    const isMatch = await _investor.comparePassword(password)
    
    if(!isMatch)
    return next(new ErrorHandler("Please Input a valid email or password",401))

    sendTokenInvestor(_investor,201,res)
})


//Get All Investors


exports.getAllInvestors = catchAsync(async (req,res)=>{
    const InvestorCount = await investor.countDocuments()
    const apifeatures = new APIfeatures(investor,req.query).search().pagination(100)
    const investors = await apifeatures.query
    res.json({success:true,
    investors,
    InvestorCount
})
})


//Update a Invetsor


exports.updateInvestor = catchAsync(async (req,res,next)=>{
    let uinvestor = await investor.findById(req.params.id)
    if(!uinvestor){
        return next(new ErrorHandler("Investor not found",404))
    }
    uinvestor = await investor.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
        })
    res.status(200).json({
        succes:true,
        updated:uinvestor
    })
})



//Delete a Investor

exports.deleteInvestor = catchAsync(async (req,res,next)=>{
    let dInvestor = await investor.findById(req.params.id)
    if(!dInvestor){
        return next(new ErrorHandler("Investor not found",404))
    }
    await dInvestor.remove()
    res.status(200).json({
        succes:true,
        message:"Deleted Successfully"
    })
})



// Get a Investor


exports.getInvestor = catchAsync( async(req,res,next)=>{
    const SingleInvestor = await investor.findById(req.params.id)
    if(!SingleInvestor)
    return next(new ErrorHandler("Investor not found",404))
    res.status(200).json({
        succes:true,
        SingleInvestor
    })
})
