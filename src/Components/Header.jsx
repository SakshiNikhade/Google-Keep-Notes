import React from "react";
import "./Header.css"
import logo from './Images/logo-img.png'
const Header =()=>{
   return(
    <>
        <div className="header">
            <img src={logo} alt="logo img" width='70' hight='50' />
            <h1>Google Keep</h1>
        </div>
    </>
   )
}
export default Header;