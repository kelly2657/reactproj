import React from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import { Study } from "../component/detail";
import '../styles/Home.css'
import '../styles/Darkmode.css';


function Studies(){
    return (
        <div className="Home">
            <Header></Header>
            <Profile></Profile>
            <Study />
        </div>
    )
}

export default Studies;