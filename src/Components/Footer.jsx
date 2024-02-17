import React from "react";
import "./Footer.css"
import logo from './Images/copyright.jpeg'


const Footer =()=>{
    const year= new Date().getFullYear()
    return<>
<footer className="footer">
<p>Copyright
    <img src={logo} alt="copyright img" width="14px"/> {year}
    </p>
</footer>
    </>
}
export default Footer;