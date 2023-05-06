import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
                <img
                    src={require("../../assets/images/logo-travellers.png")}
                    alt="logo"
                    sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {navigate("/")}}
                />
                <div className="footer-copyright">
                    <p>Design &amp; Code by Mandy Tsang &copy; 2023. All rights reserved. </p>
                </div>
        </footer>
    )
}

export default Footer;