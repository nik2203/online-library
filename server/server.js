/*const dotenv = require("dotenv");
dotenv.config();
const url = "mongodb://localhost:27017";

const MongoClient = require("mongodb").MongoClient;
const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');
const cors = require('cors');
const { isObjectEmpty } = require("./helper");


//Mongo DB Connect part
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("web_tech");
    const users = dbo.collection("users")
//----------------------------

    const app = express()
    const port = 3000
    app.use(logger("dev"))

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cors())

    app.get("/login", async function(req, res) {
        uname = req.params["username"]
        passd = req.params["password"]
        query = {
            "username": uname
        }
        var data = await users.find(query).toArray()

        if (isObjectEmpty(data)) {
            res.send({
                "STATUS": "USER_NOT_FOUND"
            })
            return
        }

        if (data[0]["password"]!=passd) {
            res.send({
                "STATUS": "WRONG_PASSWORD"
            })
            return
        }

        res.send({
            "STATUS": "SUCCESS"
        })
    })

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))

});*/