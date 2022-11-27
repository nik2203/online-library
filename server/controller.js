// // const { request } = require("http")
// const { request } = require("http");
const User = require("./models")


const createUser = (request, response) => {
    const user = new User({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        confirm_password: request.body.confirm_password
    })
    user.save().then((data) => response.json(data))
        .catch((err) => console.log(err));
    console.log(user)
}


const getUser = async (request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    try {
        user1 = await User.find({ username:username });
        console.log(user1.length,password,username);
        if (user1.length == 0)
            response.send({ message: "false" })
        else if (user1[0].password == password)
            response.send({ message: "true" })
        else
           response.send({ message: "false" })
    }
    catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    createUser,
    getUser,
}