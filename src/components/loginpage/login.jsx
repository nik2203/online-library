import React from 'react'
import "./login.css"
import NavBar from '../Navbar/navbar';
import Footer from '../footer/footer';

//const response = await fetch('/');
//const body = await response.json();

function Login() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className='login'>
                <h2>Login</h2>
                <div className='user-box'>
                    <input type="text" placeholder="Name" />
                </div>
                <br />
                <div className='user-box'>
                    <input type="password" placeholder="Password" />
                </div>
                <center><input id="submit" type="submit" value="Submit" /></center>
            </div>
            <div>
                <Footer/>
            </div>
        </div>)
}



export default Login;