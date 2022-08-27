const startup = require('../models/StartUpModel')
const ErrorHandler = require('../utils/errorhandler')
const catchAsync = require('../middleware/catchAsyncerrors')
const APIfeatures = require('../utils/apifeatures')
const {sendToken} = require('../utils/jwtToken')

//Create a Startup

exports.createStartup = catchAsync(async (req,res,next)=>{
    const newStartUp = await startup.create(req.body)
    sendToken(newStartUp,201,res)
})

//Login startup

exports.loginstartup = catchAsync(async (req,res,next)=>{
    const {email,password} = req.body

    if(!email||!password)
    return next(new ErrorHandler("Please Input email and Password",400))

    const _startup = await startup.findOne({email}).select("+password")

    if(!_startup)
    return next(new ErrorHandler("Please Input a valid email or password",401))
    
    const isMatch = await _startup.comparePassword(password)
    
    if(!isMatch)
    return next(new ErrorHandler("Please Input a valid email or password",401))

    sendToken(_startup,201,res)
})


//Get All StartUps


exports.getAllStartUps = catchAsync(async (req,res)=>{
    const startupCount = await startup.countDocuments()
    const apifeatures = new APIfeatures(startup,req.query).search().pagination(100)
    const startups = await apifeatures.query
    res.json({success:true,
    startups,
    startupCount
})
})


//Update a Startup


exports.updateStartup = catchAsync(async (req,res,next)=>{
    let uStartup = await startup.findById(req.params.id)
    if(!uStartup){
        return next(new ErrorHandler("Startup not found",404))
    }
    uStartup = await startup.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
        })
    res.status(200).json({
        succes:true,
        updated:uStartup
    })
})


//Delete a startup

exports.deleteStartup = catchAsync(async (req,res,next)=>{
    let dStartup = await startup.findById(req.params.id)
    if(!dStartup){
        return next(new ErrorHandler("Startup not found",404))
    }
    await dStartup.remove()
    res.status(200).json({
        succes:true,
        message:"Deleted Successfully"
    })
})


// Get a Startup


exports.getStartup = catchAsync( async(req,res,next)=>{
    const SingleStartup = await startup.findById(req.params.id)
    if(!SingleStartup)
    return next(new ErrorHandler("Startup not found",404))
    res.status(200).json({
        succes:true,
        SingleStartup
    })
})



//Logout a Startup

exports.logoutStartup = catchAsync(async(req,res,next)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"Logged Out Successfully"
    })
})