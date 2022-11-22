import React from 'react'
import "./signup.css"
import NavBar from '../Navbar/navbar';
import Footer from '../footer/footer';

function Signup() {
    return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div className='signup'>
        <form>
            <h2>Sign Up</h2>
            <div className='user-box'>
                <input type="text" placeholder="Set Username"  minlength={3} required/>
            </div>
            <br/>
            <div className='user-box'>
                <input type="text" placeholder='Set Display Name' required/>
            </div>
            <br/>
            <div className='user-box'>
                <input type="password" placeholder="Set Password" required />
            </div>
            <div className='user-box'>
                <input type="email" placeholder="Enter Email" required/>
            </div>
            </form>
            <center><input id = "submit" type = "submit" value = "Submit"/></center>
        </div>
        <div>
            <Footer/>
        </div>
        </div>)
}



export default Signup;