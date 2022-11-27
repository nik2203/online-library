import React from "react";
import "./home.css"
import Footer from "../../footer/footer";
import logo from "../../../assets/jnchi_crop.png"

export const Home = () => {
  return (
    <div>
      <div className="welcome">
        <p className="title">Welcome to Jinchi</p>
      </div>
      <div>
        <img src={logo} alt="jinchi_logo"></img>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>


  );
};
