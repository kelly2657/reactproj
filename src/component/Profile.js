import React from "react";
import sample from '../img/Profile-img-sample.png';
import { NavLink } from "react-router-dom";
import '../styles/Profile.css';



function Profile() {
    return (
        <div className="Profile-style" >
            <img src={sample} className="Profile-img" />

            <div id="introducing-blog"><p>제 블로그에는 ~~~ 이런 주제의 글을 올리고 있습니다</p></div>
            <div id="Category"><ul className="no-dot">
                <li>음식</li>
                <li>여행</li>
                <li>축제</li>
                <li>공부</li>
            </ul></div>
        </div>
    )
}

export default Profile;