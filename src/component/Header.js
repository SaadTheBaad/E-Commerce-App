import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <div>
            <div className="header">
                <img src="/images/CompanyLogo.png" alt="BirdCo Logo" className="logo" width="100" />
                <h1>BirdCo</h1>
            </div>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/Productpage">Products</Link>
                <Link to="/LoginPage">Login</Link>
            </div>
        </div>
    );
}

export default Header;
