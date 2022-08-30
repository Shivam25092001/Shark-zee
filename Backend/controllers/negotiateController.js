const ErrorHandler = require('../utils/errorhandler')
const catchAsync = require('../middleware/catchAsyncerrors')
const Negotiate = require('../models/negotiateModel')


//Create a negotiation
exports.newNegotiate = catchAsync( async (req, res, next) => {
    const {
        investor,
        startUp,
        equity,
        investment,
        loan,
        period,
        interest
    } = req.body;

    const negotiate = await Negotiate.create({
        investor,
        startUp,
        equity,
        investment,
        loan,
        period,
        interest,
        last_updated: Date.now()
    });

    res.status(200).json({
        success: true,
        negotiate
    })
})



//Update a negotiation
exports.updateNegotiate = catchAsync( async (req, res, next) => {
    
})