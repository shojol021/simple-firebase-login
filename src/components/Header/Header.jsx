import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{marginBottom: '20px'}}>
            <Link style={{marginRight: '15px'}} to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;