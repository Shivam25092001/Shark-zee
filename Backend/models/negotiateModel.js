const mongoose = require('mongoose')

const negotiateSchema = new mongoose.Schema({
    investor: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    startUp: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    demand_by: {
        type: String,
        required: true,
        default: "Start-Up"
    },
    equity: {
        type: Number,
        required: true
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
        required: true
    },
    last_updated: {
        type: Date,
        default: Date.now,
        required: true
    }
});


module.exports = mongoose.model('Negotiate',negotiateSchema)