import React from "react";
import sample from '../img/Profile-img-sample.png';
import { NavLink, Route, Routes } from "react-router-dom";
import '../styles/Profile.css';



function Profile() {
    return (
        <div className="Profile-style" >
            <img src={sample} className="Profile-img" />

            <div id="introducing-blog">
                <h2>블로거 이름</h2>
                <p>"Welcome to my VLOG !(●'◡'●)"</p></div>
            <div id="Category"><ul className="no-dot">
                <li><NavLink to="/foods">🍙음식</NavLink></li>
                <li><NavLink to="/trip">🕶️여행</NavLink></li>
                <li><NavLink to="/festival">🎇축제</NavLink></li>
                <li><NavLink to="/study">✏️공부</NavLink></li>
            </ul>

            </div>
        </div>
    )
}

export default Profile;