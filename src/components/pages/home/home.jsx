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
      <div className="mission">
        Jinchi
        <br />
        /ʤɪnʧiː/
        <br />
        noun
        <br />
        A Japanese word for knowledge.
        <br/>
        <br/>
        <br/>
        <h2>Our Mission:</h2>
        <p>To make all forms of knowledge accessible to as many people as possible via the Internet</p>
        <br/>
        <p>All of our books are hosted on <a class="homelink" href="https://archive.org">archive.org</a> and we plan to expand our existing offerings as well</p>
        <br/>
        <br/>
        <h2>Upcoming Projects:</h2>
        <p>Stay tuned on our <a href="https://github.com/nik2203/online-library" class="homelink">GitHub</a> to learn more about our upcoming projects</p>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};
