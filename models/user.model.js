const mongoose = require("mongoose");
 


const userSchema =  mongoose.Schema({
    name:{
        type: String,
        required: true,
        unquie: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    } ,
    password:{
        required: true,
        type: String,
        
    }
    
},{timestamps: true}
);

const User = mongoose.model("User" , userSchema);
module.exports = User;  