const bcrypt =  require("bcrypt");
require("dotenv/config")

const register = async (req ,  res) =>{
    try {
    const payload = req.body;
    const salt =  bcrypt.genSaltSync(10);
    payload.passowrd = bcrypt.hashSync(payload.password ,  salt);

    const result = await userModel.create(payload);

    return res.json({message :  "User Generated" ,  result });
    } catch (error) {
        console.log(error);
        
    }


    const login = async(req , res)=>{
        try {
        const {name ,  email} =  req.body;

        const user = await userModel.findOne({ email, isActive: true });
        if(!user) {
            throw new Error ("user not found")
        }
        // check both email password
        if(bcrypt.compareSync(passowrd ,  user.passowrd)){
            throw new Error("Invalid Credentials")

        }

        const payload  =  {
            name: user.name,
            email: user.email,
        }
        const token  = jwt.sign(payload ,  process.env.JWT_SECRET,{
            expiresIn : "365d",
        });
        return res.json({access_token : `Bearer ${token}`});
        
        } catch (error) {
            console.log(error);
            
        }
    }

    const user = () =>{
        const user =  req.user;
        return res.status(200).json({user: user});
    }
    

    
}


const login  = async(req ,  res) =>{

    try{
        const {email  , passowrd}= req.body;;
        const userExists   = await User.findOne({email})
        if(!userExists){
            return res.status(400).json('server error');
        }

    }
    catch(error){
            return res.status(400).json("internal server error")
    }
   

};