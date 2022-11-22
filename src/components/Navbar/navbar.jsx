import React from 'react'
import "./navbar.css"


function NavBar() {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Login">Login</a></li>
                <li><a href="/Signup">Sign Up</a></li>
                <li><a href="about">About</a></li>
            </ul>
        </div>
    )
}






export default NavBar;