import React from "react";
import SocialFollow from "../socialfollow/socialfollow";
import "../socialfollow/socialfollow.css"

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