import React from "react"
import "../assets/Header/Header.css"
import facebookLogo from "../assets/Header/facebook-logo.png"
import userProfile from "../assets/Header/user-profile.png"

const Header = () => (
  <div className="header">
    <a href="#">
      <img src={facebookLogo} alt="Facebook Logo" height="25" />
    </a>
    <a href="#" className="profile">
      <span>My profile</span>
      <img height="25" src={userProfile} />
    </a>
  </div>
)

export default Header
