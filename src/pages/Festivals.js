import React from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import { Festival } from "../component/detail";
import '../styles/Home.css'
import '../styles/Darkmode.css';


function Festivals(){
    return (
        <div className="Home">
            <Header></Header>
            <Profile></Profile>
            <Festival />
        </div>
    )
}

export default Festivals;