import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "./socialfollow.css"

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href=""
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="0.5x" />
      </a>
      <a href="#"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="0.5x" />
      </a>
      <a href="#" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="0.5x" />
      </a>
      <a href="https://www.instagram.com/_saicharan19_/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="0.5x" />
      </a>
    </div>
  );
}