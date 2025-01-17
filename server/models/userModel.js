const mongoose = require ("mongoose");

const  userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:null
    },
});

module.exports = new mongoose.model("user", userSchema);