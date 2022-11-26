import React from "react";
import SocialFollow from "../pages/socialfollow/socialfollow";
import "../pages/socialfollow/socialfollow.css"

function Footer() {
    const year = new Date().getFullYear();
    return <div>
        <footer>
            <SocialFollow />
            <p>Copyright ⓒ {year} Designed by Jinchi team</p>
        </footer>
    </div>
}

export default Footer;