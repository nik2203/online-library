import React, { useState } from "react"
import "./signup.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <center>
            <div className="register">
                {console.log("User", user)}
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
                <input type="text" name="name" value={username} placeholder="Your Name" onChange={(event)=>setUsername(event.target.value)}></input>
                <input type="text" name="email" value={email} placeholder="Your Email" onChange={(event)=>setEmail(event.target.value)}></input>
                <input type="password" name="password" value={password} placeholder="Your Password" onChange={(event)=>setPassword(event.target.value)}></input>
                <input type="password" name="confirmpassword" value={confirm} placeholder="Re-enter Password" onChange={(event)=>setConfirm(event.target.value)}></input>
                <input type="submit" className="button">Register</input>
                </form>
                <div>or</div>
                <div className="button" onClick={() => history.push("/login")}>Login</div>
            </div>
        </center>
    )
}

export default Register;