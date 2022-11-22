const express = require('express');
const MongoClient = require("mongodb").MongoClient;

const app = express();
const route = express.Router();
const port = 3000;

app.use(express.json());

app.post('/',(req,res)=>{
  console.log(req.body.name);
  res.end();
});

app.listen(port, (err) => {
  if(err) console.log(err);
})