import React from "react";
import Header from '../component/Header';
import Profile from '../component/Profile';
import DarkMode from '../component/Darkmode';
import Card from '../component/Card';
import '../styles/Darkmode.css';
import Detail from '../component/detail';
function Home(){
    return (
        <div>
            {/* <p>홈입니다</p> */}
            <DarkMode></DarkMode>
            <Header></Header>
            <Profile></Profile>
            <Detail></Detail>
            <Card></Card>
        </div>
    )
}

export default Home;