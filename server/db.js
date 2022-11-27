const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/web_tech', { useNewUrlParser: true },() => console.log("MongoDB connected"))

const db = mongoose.connection

module.exports = db;