const jwt = require("jsonwebtoken");


const authMiddleware  =  (req , res)=>{
    const authHeader = req.headers.authorization ;
    if(authHeader===null || authHeader=== undefined){
        return res.status(401).json({status:401,
            message: "Unauthorized"
        })
    }

    const token  =  authHeader.split(" ")[1]

    //verify Token

    jwt.verify(token , process.env.JWT_SECRET , (err , user)=>{
        if(err) return res.status(401).json({status:401 ,  message:
            "UNauthorized"
        });
        req.user = payload
        next();
    })
}

module.exports = {
   authMiddleware
}