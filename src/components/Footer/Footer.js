import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="pt-4 bg-light text-dark fixed-bottom" sticky="bottom">
            <p><small>&copy; Copyright 2021 @eSchool Designed by</small> <span className="fw-bold">Taki Kauser</span></p>
        </div>
    );
};
export default Footer;