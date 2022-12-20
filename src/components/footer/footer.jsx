import React from "react";
import SocialFollow from "../pages/socialfollow/socialfollow";
import "../pages/socialfollow/socialfollow.css"
import "./footer.css"


function Footer() {
    const year = new Date().getFullYear();
    return <div className="footer">
            <SocialFollow />
            <div className="copy">
                <p>Copyright ⓒ {year} Designed by Jinchi team</p>
            </div>
            <div>
                <h3>Contact Us:</h3>
                <h4>+91 9480974203</h4>
                <h4>jinchiteam@gmail.com</h4>
            </div>
    </div>
}

export default Footer;