const mongoose = require('mongoose')
const validator =require('validator')
const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')
const investorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name"]
    },
    email:{
        type: String,
        trim:true,
        unique:true,
        required:[true,"Please provide an email"],
        validate(value){
        
            if(!validator.isEmail(value))
            throw new Error('Input a valid email')
        }
    },
    password:{
        type:String,
        required:true,
        minLength:[8,"Password length should be greater than 8 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }

    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
})



investorSchema.pre("save", async function(next){
    if(this.isModified("password"))
    this.password = await bcrypt.hash(this.password,8);
})


investorSchema.methods.comparePassword= async function(password) {
    return await bcrypt.compare(password,this.password)
}

investorSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}
module.exports = mongoose.model("Investor",investorSchema)