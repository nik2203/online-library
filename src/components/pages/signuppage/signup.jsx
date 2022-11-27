import React, { useState } from "react"
import "./signup.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate();
    const navigateToDash = () => {
        navigate("/dash");
    };
    const navigateToLogin = () => {
        navigate("/login");
    };

    const checkPassword = (password, confirm) => {
        if (password === confirm && password.length > 8) return 1;
        else if (password === confirm && password.length < 8) return 2;
        else if (password != confirm) return 3;
    };


    function submitHandler(e) {
        e.preventDefault();
        if (checkPassword(password, confirm) == 1) {
            const user = {
                email: email,
                username: username,
                password: password,
                confirm_password: confirm,
            };
            axios.post("http://localhost:3000/signup", user)
                .then((res) => {
                    if (res.data.message == "Existing Account") {
                        alert("The email entered by you seems to already have an account!\nTry Signing in!")
                        navigateToLogin()
                    }
                    else {
                        navigateToDash()
                    }
                });
            console.log(user);
        } else if (checkPassword(password, confirm) == 2)
            alert("Password should be more than 8 letters");
        else if (checkPassword(password, confirm) == 3)
            alert("Please enter the same password");
    }

    return (
        <center>
            <div className="register">
                {console.log("User", user)}
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                <div className="button" onClick={register} >Register</div>
                <div>or</div>
                <div className="button" onClick={() => history.push("/login")}>Login</div>
            </div>
        </center>
    )
}

export default Register;