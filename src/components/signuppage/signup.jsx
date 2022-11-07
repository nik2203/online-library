import React from 'react'
import "./signup.css"

function Signup() {
    return (
        <div className='signup'>
            <h2>Sign Up</h2>
            <div className='user-box'>
                <input type="text" placeholder="Set Username" />
            </div>
            <br/>
            <div className='user-box'>
                <input type="text" placeholder='Set Display Name'/>
            </div>
            <br/>
            <div className='user-box'>
                <input type="text" placeholder="Set Password" />
            </div>
            <div className='user-box'>
                <input type="text" placeholder="Enter Email" />
            </div>
            <center><input id = "submit" type = "submit" value = "Submit" /></center>
        </div>)
}



export default Signup;