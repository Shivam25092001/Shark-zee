const ErrorHandler = require('../utils/errorhandler')
const catchAsync = require('../middleware/catchAsyncerrors')
const Negotiate = require('../models/negotiateModel')
const startUpModel = require('../models/StartUpModel')
const ErrorHandler = require('../utils/errorhandler')


//Create a negotiation
const startNegotiation = catchAsync( async (req, res, next) => {
    const investor = req.investor;

    if(investor){
        const startupId = req.params.id;
        const startupDetails = await startUpModel.findById(startupId);
        if(!startupDetails){
            next(new ErrorHandler("startup not found",400));
        }

        const {equity,investment} = startupDetails.demands

        const negotiation = await Negotiate.create({
            investor:investor,
            startUp:startupId,
            equity:equity,
            investment:investment,
            demand_by:"investor"
        })

        res.status(201).json({
            success:true,
            negotiation
        })
    }
    
    res.status(400).json({
        success:false,
        msg:"you need to be an investor to start the negotiation"
    })
})



//Update a negotiation
const updateNegotiate = catchAsync( async (req, res, next) => {

})

module.exports = {
    startNegotiation,
    updateNegotiate
}