import React from 'react';
import '../styles/Header.css';
import logoImg from '../img/logo.png';;

const Header = () => {
    return (
        <div className="Header">
            <img src={logoImg} alt="Logo" className="logo" />
            <h1 className="title">Twenty Diary</h1>
        </div>
    );
}

export default Header;
