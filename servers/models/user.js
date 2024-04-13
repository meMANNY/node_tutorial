const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
    
    },
    lastName:{
        type: String,
        
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    }
);

const User = mongoose.model("user", userSchema);

module.exports(User);