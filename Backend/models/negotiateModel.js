const mongoose = require('mongoose')

const negotiateSchema = new mongoose.Schema({
    investor: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:'investor'
    },
    startUp: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:'startUp'
    },
    demand_by: {
        type: String,
        enum:['Startup','Investor'],
        required: true,
        default: "Investor"
    },
    equity: {
        type: Number,
        required: true,
    },
    investment: {
        type: Number,
        required: true
    },
    loan: {
        type: Number,
        required: true,
        default: 0
    },
    period: {
        from: {
            type: Date,
            default: Date.now,
            required: true
        },
        to:{
            type: Date,
            default: Date.now,
            required: true
        }
    },
    interest: {
        type: Number,
        default: 0,
        max : 100,
        required: true
    },
    last_updated: { 
        type: Date,
        default: Date.now,
        required: true
    }
});


module.exports = mongoose.model('Negotiate',negotiateSchema)