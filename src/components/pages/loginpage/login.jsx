import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { NavLink, useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate();
    const navigateToSignUp = () => {
        navigate("/register");
    };

    const navigateToDash = () => {
        navigate("/dash");
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/login", { username: username, password: password })
            .then((res) => {
                if (res.data.message === "True")
                    navigateToDash()
                else
                    alert("Incorrect login credentials")

            })
    }

    return (
        <center>
            <div className="login">
                <p>Login</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                    <input type="submit" className="button">Login</input>
                    <div>or</div>
                    <NavLink exact to="/register" className="button">Register</NavLink>
                </form>
            </div>
        </center>
    )
}

export default Login;