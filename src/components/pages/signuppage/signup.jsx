import React, { useState } from "react"
import "./signup.css"
import axios from "axios"
import { useNavigate, NavLink } from "react-router-dom"
import Footer from "../../footer/footer"

function Register() {

    const navigate = useNavigate();
    const navigateToDash = () => {
        navigate("/dash");
    };
    const navigateToLogin = () => {
        navigate("/login");
    };

    const checkPassword = (password, confirm) => {
        if (password === confirm) return 1;
        else if (password != confirm) return 2;
    };


    function submitHandler(e) {
        e.preventDefault();
        if (checkPassword(password, confirm_password) == 1) {
            axios.post("http://localhost:4000/register", { username: username, email: email, password: password, confirm_password: confirm_password });
            navigateToDash();
        }
        else if (checkPassword(password, confirm_password) == 2)
            alert("Please enter the same password");
    }

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm] = useState("");

    return (
        <center>
            <div className="register">
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
                    <input className="input" type="text" name="name" value={username} placeholder="Your Name" onChange={(event) => setUsername(event.target.value)}></input>
                    <input className="input" type="text" name="email" value={email} placeholder="Your Email" onChange={(event) => setEmail(event.target.value)}></input>
                    <input className="input" type="password" name="password" value={password} placeholder="Your Password" onChange={(event) => setPassword(event.target.value)}></input>
                    <input className="input" type="password" name="confirmpassword" value={confirm_password} placeholder="Re-enter Password" onChange={(event) => setConfirm(event.target.value)}></input>
                    <input type="submit" className="button" value="Register"></input>
                    <br />
                    <div>or</div>
                    <br />
                    <NavLink exact to="/login" className="button">Log In</NavLink>
                </form>
            </div>
            <div className="foot">
                <Footer />
            </div>
        </center>
    )
}

export default Register;