const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    email: String,
    password: String,
    confirm_password:String
})

module.exports = mongoose.model("users",User);