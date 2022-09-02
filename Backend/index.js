const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'config/config.env'})
const connectDb = require('./config/database')
const app = express()
const cookieParser = require("cookie-parser")
const startup = require('./routes/StartUp_route')
const investor = require('./routes/Investor_route')
const negotiate = require('./routes/Negotiate_route')
const errorhandler = require('./middleware/error')

app.use(errorhandler)
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1',startup)
app.use('/api/v1',investor)
app.use('/api/v1',negotiate)


const start = ()=>{
    connectDb();
    app.listen(process.env.PORT,()=>{
        console.log(`Running on ${process.env.PORT}`)
    })
}

start();