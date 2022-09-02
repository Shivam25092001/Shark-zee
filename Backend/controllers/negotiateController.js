const ErrorHandler = require('../utils/errorhandler')
const catchAsync = require('../middleware/catchAsyncerrors')
const Negotiate = require('../models/negotiateModel')
const startUpModel = require('../models/StartUpModel')
const { findByIdAndUpdate } = require('../models/InvestorModel')


//Create a negotiation
const startNegotiation = catchAsync( async (req, res, next) => {
    const investor = req.investor;

    if(investor){
        const startupId = req.params.id;
        const startupDetails = await startUpModel.findById(startupId);
        if(!startupDetails){
            next(new ErrorHandler("startup not found",400));
        }

        const { equity,investment } = startupDetails.demands

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
    const investor = req.investor;
    const startUp = req.startUp;
    let newNegotiate = {};
    if(investor){
        newNegotiate = {
            demand_by: "Investor",
            equity: req.body.equity,
            investment: req.body.investment,
            loan: req.body.loan !== undefined ? req.body.loan : 0,
            period: req.body.period !== undefined ? req.body.period : 0,
            interest: req.body.interest !== undefined ? req.body.interest : 0,
            last_updated: Date.now()
        }
    }
    else if(startUp){
        newNegotiate = {
            demand_by: "StartUp",
            equity: req.body.equity,
            investment: req.body.investment,
            loan: req.body.loan !== undefined ? req.body.loan : 0,
            period: req.body.period !== undefined ? req.body.period : 0,
            interest: req.body.interest !== undefined ? req.body.interest : 0,
            last_updated: Date.now()
        }
    }

    const updatedNegotiate = await findByIdAndUpdate(req.negotiate.id, newNegotiate) ;

    res.status(200).json({
        success: true,
        updatedNegotiate
    });
    
})

module.exports = {
    startNegotiation,
    updateNegotiate
}