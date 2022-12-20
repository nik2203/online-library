import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"
import Footer from "../../footer/footer"

const Login = () => {

    const navigate = useNavigate();
    const navigateToDash = () => {
        navigate("/dash");
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/login", { username: username, password: password })
            .then((res) => {
                if (res.data.message === "true")
                    navigateToDash()
                else
                    alert("Incorrect login credentials")

            })
    }
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <center>
                <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input className="input" type="text" name="username" value={username} onChange={(event) => setUser(event.target.value)} placeholder="Enter your Username" required></input>
                        <input className="input" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Password" required></input>
                        <input type="submit" className="button" value="Login"></input>
                        <br />
                        <div>or</div>
                        <br />
                        <NavLink exact to="/register" className="button">Register</NavLink>
                    </form>
                </div>
                <div className="foot">
                    <Footer />
                </div>
            </center>
        </div>
    )
}

export default Login;