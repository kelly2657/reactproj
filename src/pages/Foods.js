import React from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import { Food } from "../component/detail";
import '../styles/Home.css'
import '../styles/Darkmode.css';

function Foods() {
    return (
        <div className="Home">
            <Header></Header>
            <Profile></Profile>
            <Food />
        </div>
    )
}

export default Foods;