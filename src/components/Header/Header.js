import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
const Header = () => {
    // header component is separated as it was planned to merge another section with navigation 
    return (
        <div className="p-3 mb-5">
            <Navigation></Navigation>
        </div>
    );
};

export default Header;