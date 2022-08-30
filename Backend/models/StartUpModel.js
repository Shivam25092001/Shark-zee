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
    password:{
        type:String,
        required:true,
        minLength:[8,"Password length should be greater than 8 characters"],
        select:false
    },
    about:{
        type:String,
        required:[true,"Please provide about section"]
    },
    feild_of_interest:{
        type: String,
        required:[true, "Please select proper tags for better reach"]
    },
    totalUpvotes:{
        type:Number,
        default:0
    },
    EquityLeft:{
        type:Number,
        required:true,
        default:100
    },
    demands:{
        equity: {
            type: Number,
            required: true
        },
        investment: {
            type: Number,
            required: true
        },
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
            by:{
                type:String,
                enum:['investor','startup'],
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    investors_approached:[
        {
            type: mongoose.Schema.ObjectId,
        }
    ],
    investors_active:[
        {
            type: mongoose.Schema.ObjectId,
        }
    ],
    
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