// // const { request } = require("http")
// const { request } = require("http");
const User = require("./models")


const createUser=(request,response)=>{
    const user= new User({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        confirm_password:request.body.confirm_password
    })
    user.save().then((data) => response.json(data))
    .catch((err) => console.log(err));
    console.log(user)
}


// const getUser=(request,response)=>{}

module.exports = {
    createUser,
    //getUser,
}