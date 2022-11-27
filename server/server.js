const dotenv = require("dotenv");
dotenv.config();
const url = "mongodb://localhost:27017";

const MongoClient = require("mongodb").MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const router = require("./routes");
const app = express()
const port = 4000

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use("/",router);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));