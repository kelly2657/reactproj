import React from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import { Food } from "../component/detail";
import '../styles/Home.css'
import '../styles/Darkmode.css';

function Foods(){
    return (
        <div className="Home">
            <Header></Header>
            <div className="Content">
                <Profile></Profile>
                <Food/>
            </div>
        </div>
    )
}

export default Foods;