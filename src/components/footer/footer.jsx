import React from "react";
import SocialFollow from "../pages/socialfollow/socialfollow";
import "../pages/socialfollow/socialfollow.css"
import "./footer.css"


function Footer() {
    const year = new Date().getFullYear();
    return <div>
        <footer>
            <SocialFollow />
            <div className="copy">
                <p>Copyright ⓒ {year} Designed by Jinchi team</p>
            </div>
        </footer>
    </div>
}

export default Footer;