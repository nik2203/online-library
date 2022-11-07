import React from 'react'
import "./login.css"

function Login() {
    return (
        <div className='login'>
            <h2>Login</h2>
            <div className='user-box'>
                <input type="text" placeholder="Name" />
            </div>
            <br />
            <div className='user-box'>
                <input type="text" placeholder="Password" />
            </div>
            <center><input id = "submit" type = "submit" value = "Submit" /></center>
        </div>)
}



export default Login;