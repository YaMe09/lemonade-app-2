import React, { useState } from 'react';
import LemonadeLogo from '../assets/Lemonade StandLogo.png';
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };
    const {lemon} = useSelector((state) => state.LemonadeProfit);

    return (
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item is-size-5 has-text-weight-semibold ml-5" href="/" style={{ fontFamily: 'Mr Dafoe', color: '#188151' }}>
                    Lemonade <img src={LemonadeLogo} alt="Lemonade Stand Logo" /> Stand
                </a>

                <a 
                    role="button" 
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
                    aria-label="menu" 
                    aria-expanded={isActive} 
                    onClick={toggleNavbar} 
                    style={{ border: '2px solid #fad342' }}
                >
                    <span aria-hidden="true" style={{ color: '#188151' }}></span>
                    <span aria-hidden="true" style={{ color: '#188151' }}></span>
                    <span aria-hidden="true" style={{ color: '#188151' }}></span>
                    <span aria-hidden="true" style={{ color: '#188151' }}></span>
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end is-size-5 px-5 has-text-weight-medium">
                    <a className="navbar-item" style={{ color: '#188151' }} onClick={() => navigate('/')}>
                        Forside
                    </a>

                    <a className="navbar-item" style={{ color: '#188151' }} onClick={() => navigate('/lemonade-stand')}>
                        Lemonade
                    </a>

                    <a className="navbar-item" style={{ color: '#188151' }} onClick={() => navigate('/køb')}>
                        Køb
                    </a>

                    <a className="navbar-item" style={{ color: '#188151' }} onClick={() => navigate('/cart')}>
                        Kurv
                    </a>

                </div>
                <button className="button has-shadow my-3 mx-3  has-background-white is-outlined" style={{ boxShadow: '#b6baba 0 0 0.5em', color: '#188151', border:'2px solid #188151' }}
                    onClick={() => navigate('/chick-out')} >
                    $ {lemon}   🍋
                </button>
                <button className="button has-shadow my-3 mr-5" style={{ boxShadow: '#b6baba 0 0 0.5em', color: '#188151' }}
                    onClick={() => navigate('/chick-out')} >
                    Tjek Ud
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
