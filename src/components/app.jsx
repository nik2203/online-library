import React from "react";
import NavBar from "./Navbar/navbar";
import "./app.css"
import Footer from "./footer/footer"
import jinchi from "../assets/jinchi.png"



function App() {
    return <div>
        <div>
            <NavBar />
        </div>
        <center>
            <h1> Welcome to Jinchi</h1>
            <div>
            <button className="joinus"><a href="/Signup">Join Us</a></button>
            </div>
            <img src={jinchi} alt="Jinchi logo" />
        </center>
        <div>
            <Footer />
        </div>
    </div>

}

export default App;