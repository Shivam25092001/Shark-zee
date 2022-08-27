const sendToken = (newStartUp,statuscode,res)=>{
    const token  = newStartUp.getJWTToken()

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly:true
    }
    res.status(statuscode).cookie("token",token,options).json({
        success:true,
        token,
        Startup:newStartUp
    })
}






const sendTokenInvestor = (newInvestor,statuscode,res)=>{
    const token  = newInvestor.getJWTToken()

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly:true
    }
    res.status(statuscode).cookie("token",token,options).json({
        success:true,
        token,
        Investor:newInvestor
    })
}

module.exports = {sendToken,sendTokenInvestor}