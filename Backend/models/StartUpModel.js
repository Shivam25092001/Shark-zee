const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')


const startupSchema = new mongoose.Schema({
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
    about:{
        type:String,
        required:[true,"Please provide about section"]
    },
    totalUpvotes:{
        type:Number,
        default:0
    },
    password:{
        type:String,
        required:true,
        minLength:[8,"Password length should be greater than 8 characters"],
        select:false
    },
    EquityLeft:{
        type:Number,
        required:true
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }

    },

    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true
})


startupSchema.pre("save", async function(next){
    if(this.isModified("password"))
    this.password = await bcrypt.hash(this.password,8);
})


startupSchema.methods.comparePassword= async function(password) {
    return await bcrypt.compare(password,this.password)
}

startupSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}




module.exports = mongoose.model('StartUp',startupSchema)