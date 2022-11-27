import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate();
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
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <center>
            <div className="login">
                <p>Login</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={user} onChange={(event)=>setUser(event.target.value)} placeholder="Enter your Username" required></input>
                    <input type="password" name="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter your Password"  required></input>
                    <input type="submit" className="button">Login</input>
                    <div>or</div>
                    <NavLink exact to="/register" className="button">Register</NavLink>
                </form>
            </div>
        </center>
    )
}

export default Login;