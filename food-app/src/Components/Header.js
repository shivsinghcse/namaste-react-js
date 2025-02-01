import { Link } from 'react-router';
import { LOGO_URL } from '../../utils/constants';
import { useState, useEffect } from 'react';

const Header = () => {
    const [btn, setBtn] = useState('Login');

    // useEffect(() => {
    //     console.log('useEffect called');
    // },[]);

    // console.log('header renderd');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>

                    <button
                        className="login-logout-btn"
                        onClick={() => {
                            btn === 'Login'
                                ? setBtn('Logout')
                                : setBtn('Login');
                        }}
                    >
                        {btn}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
