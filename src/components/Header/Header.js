import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
const Header = () => {
    return (
        <div className="p-3 mb-5">
            <Navigation></Navigation>
        </div>
    );
};

export default Header;