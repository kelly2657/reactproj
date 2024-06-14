import React from 'react';
import '../styles/Header.css';
import logoImg from '../img/logo.png';
import DarkMode from '../component/Darkmode';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate(`/`);
    }
    return (
        <div className="Header">
            <img src={logoImg} alt="Logo" className="logo" onClick={goHome}/>
            <h1 className="title">Twenty Diary</h1>
            <DarkMode></DarkMode>
        </div>
    );
}

export default Header;
