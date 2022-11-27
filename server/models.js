const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema({
    username:{type:String,},
    password:{type:String,},
    email:{type:String,},
    
})