import React from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import { Trip } from "../component/detail";
import '../styles/Home.css'
import '../styles/Darkmode.css';


function Trips(){
    return (
        <div className="Home">
            <Header></Header>
            <div className="Content">
                <Profile></Profile>
                <Trip/>
            </div>
        </div>
    )
}

export default Trips;