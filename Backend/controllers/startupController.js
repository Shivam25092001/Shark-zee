const startup = require('../models/StartUpModel')
const ErrorHandler = require('../utils/errorhandler')
const catchAsync = require('../middleware/catchAsyncerrors')
const APIfeatures = require('../utils/apifeatures')
const { sendToken } = require('../utils/jwtToken')

//Create a Startup
<<<<<<< HEAD

exports.createStartup = catchAsync(async (req, res, next) => {
=======
exports.createStartup = catchAsync(async (req,res,next)=>{
>>>>>>> 8664a2eb0d5162f3bb9601a3371e924506ad24c6
    const { name, email, password, about, feild_of_interest, equityLeft, demands, image } = req.body;

    const newStartUp = await startup.create({
        name,
        email,
        password,
        about,
        feild_of_interest,
        equityLeft,
        demands,
        image
    });

    sendToken(newStartUp, 201, res);
})

//Login startup
<<<<<<< HEAD

exports.loginstartup = catchAsync(async (req, res, next) => {
    const { email, password } = req.body
=======
exports.loginstartup = catchAsync(async (req,res,next)=>{
    const {email,password} = req.body
>>>>>>> 8664a2eb0d5162f3bb9601a3371e924506ad24c6

    if (!email || !password)
        return next(new ErrorHandler("Please Input email and Password", 400))

    const _startup = await startup.findOne({ email }).select("+password")

    if (!_startup)
        return next(new ErrorHandler("Please Input a valid email or password", 401))

    const isMatch = await _startup.comparePassword(password)

    if (!isMatch)
        return next(new ErrorHandler("Please Input a valid email or password", 401))

    sendToken(_startup, 201, res)
})


//Get All StartUps
<<<<<<< HEAD


exports.getAllStartUps = catchAsync(async (req, res) => {
=======
exports.getAllStartUps = catchAsync(async (req,res)=>{
>>>>>>> 8664a2eb0d5162f3bb9601a3371e924506ad24c6
    const startupCount = await startup.countDocuments()
    const apifeatures = new APIfeatures(startup, req.query).search().pagination(100)
    const startups = await apifeatures.query
    res.json({
        success: true,
        startups,
        startupCount
    })
})


//Update a Startup
<<<<<<< HEAD


exports.updateStartup = catchAsync(async (req, res, next) => {
=======
exports.updateStartup = catchAsync(async (req,res,next)=>{
>>>>>>> 8664a2eb0d5162f3bb9601a3371e924506ad24c6
    let uStartup = await startup.findById(req.params.id)
    if (!uStartup) {
        return next(new ErrorHandler("Startup not found", 404))
    }
    uStartup = await startup.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        succes: true,
        updated: uStartup
    })
})


//Delete a startup
<<<<<<< HEAD

exports.deleteStartup = catchAsync(async (req, res, next) => {
=======
exports.deleteStartup = catchAsync(async (req,res,next)=>{
>>>>>>> 8664a2eb0d5162f3bb9601a3371e924506ad24c6
    let dStartup = await startup.findById(req.params.id)
    if (!dStartup) {
        return next(new ErrorHandler("Startup not found", 404))
    }
    await dStartup.remove()
    res.status(200).json({
        succes: true,
        message: "Deleted Successfully"
    })
})


// Get a Startup
<<<<<<< HEAD


exports.getStartup = catchAsync(async (req, res, next) => {
=======
exports.getStartup = catchAsync( async(req,res,next)=>{
>>>>>>> 8664a2eb0d5162f3bb9601a3371e924506ad24c6
    const SingleStartup = await startup.findById(req.params.id)
    if (!SingleStartup)
        return next(new ErrorHandler("Startup not found", 404))
    res.status(200).json({
        succes: true,
        SingleStartup
    })
})



//Logout a Startup
<<<<<<< HEAD

exports.logoutStartup = catchAsync(async (req, res, next) => {
    res.cookie("token", null, {
=======
exports.logoutStartup = catchAsync(async(req,res,next)=>{
    res.cookie("token",null,{
>>>>>>> 8664a2eb0d5162f3bb9601a3371e924506ad24c6
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logged Out Successfully"
    })
})